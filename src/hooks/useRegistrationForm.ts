import { useState, useEffect } from "react";
import { FormState, Registration } from "@/types/registration";
import { calculateAge, generateStudentId } from "@/utils/registration-utils";
import { SCRIPT_URL } from "@/constants/registration";

export const useRegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [studentId, setStudentId] = useState("APSA-2026-R&R-XXXX");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [cardReady, setCardReady] = useState(false);
  const [showSaveMenu, setShowSaveMenu] = useState(false);

  const [form, setForm] = useState<FormState>({
    center: "",
    program: "",
    batchType: "",
    slot: "",
    studentName: "",
    dob: "",
    age: "",
    gender: "",
    billId: "",
    parentName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    medical: "",
    allergies: "",
    experience: "",
    agreed: false,
    photoUrl: "",
  });

  // Load registrations from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("apsa_registrations");
      if (saved) setRegistrations(JSON.parse(saved));
    } catch {
      console.warn("Could not load registrations from localStorage");
    }
  }, []);

  // Auto-calculate age from DOB
  useEffect(() => {
    if (form.dob) {
      setForm((prev) => ({ ...prev, age: calculateAge(form.dob) }));
    }
  }, [form.dob]);

  // Update Student ID preview
  useEffect(() => {
    if (!submitted) {
      setStudentId(generateStudentId(form.center));
    }
  }, [form.center, submitted]);

  const updateForm = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value } as FormState;
      if (field === "center") {
        next.program = "";
        next.batchType = "";
        next.slot = "";
      } else if (field === "program") {
        next.batchType = "";
        next.slot = "";
      } else if (field === "batchType") {
        next.slot = "";
      }
      return next;
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      updateForm("photoUrl", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return !!(form.studentName && form.dob && form.gender && form.billId);
      case 1:
        return !!(form.parentName && form.mobile && form.email);
      case 2:
        return !!(form.center && form.program && form.batchType && form.slot);
      case 3:
        return !!(form.experience);
      case 4:
        return !!(form.agreed);
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!form.agreed || isSubmitting) return;

    if (!form.billId) {
      alert("Please enter Bill Number");
      return;
    }

    setIsSubmitting(true);

    try {
      const data = {
        studentId: studentId,
        studentName: form.studentName,
        billNumber: form.billId,
        dob: form.dob,
        age: form.age,
        gender: form.gender,
        parentName: form.parentName,
        mobile: form.mobile,
        email: form.email,
        address: form.address,
        city: form.city,
        state: form.state,
        postalCode: form.postal,
        trainingCenter: form.center,
        program: form.program,
        batchType: form.batchType,
        slotTiming: form.slot,
        medicalConditions: form.medical,
        allergies: form.allergies,
        experience: form.experience
      };

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const finalId = result.studentId || studentId;
      setStudentId(finalId);

      const newReg: Registration = {
        center: form.center,
        program: form.program,
        slot: form.slot,
      };
      const updated = [...registrations, newReg];
      setRegistrations(updated);
      localStorage.setItem("apsa_registrations", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitted(true);
      return finalId;
    } catch (error) {
      setIsSubmitting(false);
      throw error;
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(0);
    setCardReady(false);
    setShowSaveMenu(false);
    setForm({
      center: "", program: "", batchType: "", slot: "",
      studentName: "", dob: "", age: "", gender: "", billId: "",
      parentName: "", mobile: "", whatsapp: "", email: "",
      address: "", city: "", state: "", postal: "",
      medical: "", allergies: "", experience: "",
      agreed: false, photoUrl: "",
    });
    setStudentId(generateStudentId("", ""));
  };

  return {
    step,
    setStep,
    submitted,
    setSubmitted,
    studentId,
    setStudentId,
    isSubmitting,
    registrations,
    cardReady,
    setCardReady,
    showSaveMenu,
    setShowSaveMenu,
    form,
    updateForm,
    handlePhotoUpload,
    canProceed,
    handleSubmit,
    resetForm,
  };
};
