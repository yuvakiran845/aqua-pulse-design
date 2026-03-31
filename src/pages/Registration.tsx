import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Steps
const STEPS = [
  "Training Details",
  "Student Info",
  "Contact Info",
  "Medical & Experience",
  "Terms & Submit"
];

// Data
const CENTERS = ["R&R Swimming Pool", "Slim Life Gym Sports Complex"];
const BATCH_TYPES = ["Weekday Batch", "Weekend Batch"];
const TIME_SLOTS = {
  "🌅 Morning Batches": [
    "6:00 AM - 7:00 AM", "7:00 AM - 8:00 AM", "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"
  ],
  "🌆 Evening Batches": [
    "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM", "8:00 PM - 9:00 PM"
  ]
};

const Registration = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [formData, setFormData] = useState({
    center: "",
    program: "",
    batchType: "",
    timeSlot: "",
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    photo: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    medicalConditions: "",
    swimmingExperience: "",
    previousTraining: "",
    receiptNumber: "",
    termsAccepted: false,
  });
  const idCardRef = useRef<HTMLDivElement>(null);

  const updateField = (field: string, value: any) => {
    setFormData((prev: any) => {
      const newData = { ...prev, [field]: value };
      if (field === "center") {
        newData.program = "";
      }
      return newData;
    });
  };

  const getAvailablePrograms = () => {
    if (formData.center === "Slim Life Gym Sports Complex") {
      return [
        "Summer Camp",
        "Beginners Program",
        "Intermediate Program",
        "1-1 Personal Training"
      ];
    } else if (formData.center === "R&R Swimming Pool") {
      return [
        "Summer Camp",
        "Beginners Program",
        "Intermediate Program",
        "Advanced Program",
        "Aqua Sprouts (Toddlers Program)",
        "Ladies Exclusive Program",
        "Special Kids Aquatic Program",
        "Senior Citizen Swimming",
        "Aqua Rehabilitation",
        "1-1 Personal Training"
      ];
    }
    return [];
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => updateField("photo", reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const calculateAge = (dob: string) => {
    if (!dob) return "";
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return String(age);
  };

  useEffect(() => {
    if (formData.dob) {
      updateField("age", calculateAge(formData.dob));
    }
  }, [formData.dob]);

  // Save draft to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("registrationDraft");
    if (saved) {
      try { setFormData(JSON.parse(saved)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("registrationDraft", JSON.stringify(formData));
  }, [formData]);

  const generateStudentId = () => {
    const prefix = formData.center.includes("R&R") ? "RNR" : "SLIM";
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `APSA-${year}-${prefix}-${random}`;
  };

  const handleSubmit = () => {
    if (!formData.termsAccepted || !formData.receiptNumber) return;
    const id = generateStudentId();
    setStudentId(id);
    setSubmitted(true);
    localStorage.removeItem("registrationDraft");
  };

  const downloadIdCard = async () => {
    if (!idCardRef.current) return;
    const canvas = await html2canvas(idCardRef.current, { scale: 2, backgroundColor: "#0f172a" });
    const link = document.createElement("a");
    link.download = `${studentId}-id-card.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
  };

  const canProceed = () => {
    switch (step) {
      case 0: return formData.center && formData.program && formData.batchType && formData.timeSlot;
      case 1: return formData.fullName && formData.dob && formData.gender;
      case 2: return formData.parentName && formData.phone;
      case 3: return true;
      case 4: return formData.termsAccepted && formData.receiptNumber;
      default: return false;
    }
  };

  const inputClass = "w-full px-4 py-3 bg-card border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all";
  const labelClass = "text-sm font-medium text-muted-foreground mb-1.5 block";

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="container-main max-w-2xl mx-auto text-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-8">
              <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto">
                <span className="text-4xl">✅</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Registration Successful!</h1>
              <p className="text-muted-foreground text-lg">Your Student ID: <span className="text-cyan-400 font-bold text-2xl">{studentId}</span></p>

              {/* ID Card */}
              <div ref={idCardRef} className="mx-auto max-w-md p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                <div className="text-center mb-4">
                  <h3 className="text-cyan-400 font-heading font-bold text-lg tracking-wider">AQUA PULSE SWIMMING ACADEMY</h3>
                  <p className="text-xs text-muted-foreground mt-1">STUDENT IDENTITY CARD</p>
                </div>
                <div className="flex gap-4 items-start">
                  {formData.photo ? (
                    <img src={formData.photo} alt="Student" className="w-20 h-24 object-cover rounded-lg border border-cyan-500/30" />
                  ) : (
                    <div className="w-20 h-24 rounded-lg border border-white/10 bg-card flex items-center justify-center text-muted-foreground text-xs">No Photo</div>
                  )}
                  <div className="text-left space-y-1.5 flex-1">
                    <p className="text-foreground font-bold text-base">{formData.fullName}</p>
                    <p className="text-xs text-muted-foreground">ID: <span className="text-cyan-400 font-semibold">{studentId}</span></p>
                    <p className="text-xs text-muted-foreground">Program: <span className="text-foreground">{formData.program}</span></p>
                    <p className="text-xs text-muted-foreground">Center: <span className="text-foreground">{formData.center}</span></p>
                    <p className="text-xs text-muted-foreground">Batch: <span className="text-foreground">{formData.batchType}</span></p>
                    <p className="text-xs text-muted-foreground">Slot: <span className="text-foreground">{formData.timeSlot}</span></p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <p className="text-[10px] text-muted-foreground">Valid for Academic Year {new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
                </div>
              </div>

              <button onClick={downloadIdCard} className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                📥 Download ID Card
              </button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-main max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Student <span className="gradient-aqua-text">Registration</span>
            </h1>
            <p className="text-muted-foreground mt-2">Complete the form below to register for our swimming programs.</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-10 px-4">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                    i < step ? "bg-cyan-500 border-cyan-500 text-white" :
                    i === step ? "border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]" :
                    "border-white/20 text-muted-foreground"
                  }`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1.5 whitespace-nowrap ${i <= step ? "text-cyan-400" : "text-muted-foreground"}`}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mt-[-12px] ${i < step ? "bg-cyan-500" : "bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 0: Training Details */}
                {step === 0 && (
                  <div className="space-y-8">
                    <div>
                      <label className={`${labelClass} text-cyan-400 uppercase tracking-widest text-xs font-bold mb-3 block`}>TRAINING CENTER <span className="text-red-400">*</span></label>
                      <select 
                        value={formData.center} 
                        onChange={(e) => updateField("center", e.target.value)}
                        className={inputClass}
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' } as any}
                      >
                        <option value="" disabled hidden className="hidden">Select Training Center</option>
                        {CENTERS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={`${labelClass} text-cyan-400 uppercase tracking-widest text-xs font-bold mb-3 block`}>PROGRAM <span className="text-red-400">*</span></label>
                      <select 
                        value={formData.program} 
                        onChange={(e) => updateField("program", e.target.value)}
                        className={inputClass}
                        disabled={!formData.center}
                        style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' } as any}
                      >
                        <option value="" disabled hidden className="hidden">Select Program</option>
                        {getAvailablePrograms().map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={`${labelClass} text-cyan-400 uppercase tracking-widest text-xs font-bold mb-3 block`}>BATCH TYPE <span className="text-red-400">*</span></label>
                      <div className="flex gap-4">
                        {BATCH_TYPES.map(b => (
                          <button
                            key={b}
                            onClick={() => updateField("batchType", b)}
                            className={`px-6 py-3 rounded-xl border font-medium transition-all ${
                              formData.batchType === b 
                              ? "border-cyan-500 bg-cyan-500/10 text-cyan-400" 
                              : "border-white/10 bg-card hover:bg-white/5 text-foreground"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.batchType && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <label className={`${labelClass} text-cyan-400 uppercase tracking-widest text-xs font-bold mb-4 block`}>PREFERRED TIME SLOT <span className="text-red-400">*</span></label>
                        <div className="space-y-8">
                          {Object.entries(TIME_SLOTS).map(([category, slots]) => (
                            <div key={category}>
                              <h4 className="text-base font-semibold text-cyan-400 mb-4 flex items-center gap-2">{category}</h4>
                              <div className="flex flex-wrap gap-4">
                                {slots.map(slot => (
                                  <button
                                    key={slot}
                                    onClick={() => updateField("timeSlot", slot)}
                                    className={`w-[200px] text-left px-5 py-4 rounded-xl border transition-all ${
                                      formData.timeSlot === slot 
                                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-400" 
                                      : "border-white/10 bg-card hover:bg-white/5 text-foreground"
                                    }`}
                                  >
                                    <p className="font-semibold text-[15px]">{slot}</p>
                                    <span className="block text-[11px] text-green-400/90 mt-1 font-medium">Limited seats</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 1: Student Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                      <input type="text" value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} className={inputClass} placeholder="Enter student's full name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Date of Birth <span className="text-red-400">*</span></label>
                        <input type="date" value={formData.dob} onChange={(e) => updateField("dob", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Age (Auto-calculated)</label>
                        <input type="text" value={formData.age} readOnly className={`${inputClass} opacity-60`} placeholder="—" />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Gender <span className="text-red-400">*</span></label>
                      <div className="flex gap-3">
                        {["Male", "Female", "Other"].map(g => (
                          <button key={g} onClick={() => updateField("gender", g)} className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${formData.gender === g ? "border-cyan-500 bg-cyan-500/10 text-cyan-400" : "border-white/10 bg-card hover:bg-white/5 text-foreground"}`}>{g}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Student Photo</label>
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border file:border-cyan-500/30 file:bg-cyan-500/10 file:text-cyan-400 file:font-medium hover:file:bg-cyan-500/20 file:transition-all file:cursor-pointer" />
                      {formData.photo && <img src={formData.photo} alt="Preview" className="mt-3 w-20 h-24 object-cover rounded-lg border border-cyan-500/30" />}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Parent/Guardian Name <span className="text-red-400">*</span></label>
                      <input type="text" value={formData.parentName} onChange={(e) => updateField("parentName", e.target.value)} className={inputClass} placeholder="Enter parent/guardian name" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number <span className="text-red-400">*</span></label>
                      <input type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} placeholder="Enter phone number" />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} placeholder="Enter email address" />
                    </div>
                    <div>
                      <label className={labelClass}>Address</label>
                      <textarea value={formData.address} onChange={(e) => updateField("address", e.target.value)} className={`${inputClass} min-h-[100px] resize-none`} placeholder="Enter full address" />
                    </div>
                  </div>
                )}

                {/* Step 3: Medical & Experience */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className={labelClass}>Medical Conditions (if any)</label>
                      <textarea value={formData.medicalConditions} onChange={(e) => updateField("medicalConditions", e.target.value)} className={`${inputClass} min-h-[100px] resize-none`} placeholder="e.g., Asthma, Allergies, Heart conditions, etc. Write 'None' if not applicable." />
                    </div>
                    <div>
                      <label className={labelClass}>Swimming Experience</label>
                      <select value={formData.swimmingExperience} onChange={(e) => updateField("swimmingExperience", e.target.value)} className={inputClass}>
                        <option value="">Select experience level</option>
                        <option value="None">No Experience</option>
                        <option value="Beginner">Beginner (0–6 months)</option>
                        <option value="Intermediate">Intermediate (6–24 months)</option>
                        <option value="Advanced">Advanced (2+ years)</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Previous Swimming Training</label>
                      <input type="text" value={formData.previousTraining} onChange={(e) => updateField("previousTraining", e.target.value)} className={inputClass} placeholder="Name of previous academy/coach (if any)" />
                    </div>
                  </div>
                )}

                {/* Step 4: Terms & Submit */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="p-5 rounded-xl bg-card border border-white/10">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-3">Terms & Conditions</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• I confirm all information provided is accurate and complete.</li>
                        <li>• I understand that the academy is not liable for pre-existing medical conditions.</li>
                        <li>• I agree to follow all pool rules, safety guidelines, and academy policies.</li>
                        <li>• I understand that fees once paid are non-refundable.</li>
                        <li>• I consent to the use of my child's photo for academy records and ID generation.</li>
                      </ul>
                    </div>
                    <div>
                      <label className={labelClass}>Payment Receipt Number <span className="text-red-400">*</span></label>
                      <input type="text" value={formData.receiptNumber} onChange={(e) => updateField("receiptNumber", e.target.value)} className={inputClass} placeholder="Enter your payment receipt number" />
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.termsAccepted} onChange={(e) => updateField("termsAccepted", e.target.checked)} className="w-5 h-5 rounded border-white/20 bg-card accent-cyan-500" />
                      <span className="text-sm text-foreground group-hover:text-cyan-400 transition-colors">I agree to the Terms & Conditions <span className="text-red-400">*</span></span>
                    </label>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-foreground hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed font-medium"
              >
                ← Back
              </button>
              {step < STEPS.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="px-8 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                >
                  ✅ Submit Registration
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
