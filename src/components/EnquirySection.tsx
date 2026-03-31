import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";

const ENQUIRY_API_ENDPOINT =
  import.meta.env.VITE_ENQUIRY_API_URL ?? "YOUR_API_URL";
const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "919999999999";
const WHATSAPP_FLOATING_MESSAGE =
  import.meta.env.VITE_WHATSAPP_FLOATING_MESSAGE ?? "Hello, I want to enquire about swimming programs.";

const EnquirySection = () => {
  const [form, setForm] = useState({ name: "", phone: "", age: "", program: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (!form.age.trim()) e.age = "Age is required";
    else if (!/^\d+$/.test(form.age.trim())) e.age = "Enter a valid age";
    else if (Number(form.age) < 1 || Number(form.age) > 100) e.age = "Age must be between 1 and 100";
    if (!form.program) e.program = "Please select a program";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitError("");

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      age: Number(form.age),
      program: form.program,
      message: form.message.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      if (ENQUIRY_API_ENDPOINT === "YOUR_API_URL") {
        throw new Error("Enquiry API URL not configured.");
      }

      await fetch(ENQUIRY_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm({ name: "", phone: "", age: "", program: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setSubmitError("Submission failed. Try again.");
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-secondary/50 border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
      errors[field] ? "border-destructive" : "border-border/50"
    }`;

  if (submitted) {
    return (
      <section id="enquiry" className="section-padding relative">
        <div className="container-main">
          <div className="max-w-lg mx-auto bg-card rounded-2xl p-8 border border-primary/30 text-center shadow-[0_0_40px_hsl(192_82%_50%/0.15)]">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">Enquiry submitted successfully.</p>
            <Button variant="ghost" className="mt-6 text-primary" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", age: "", program: "", message: "" }); }}>
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="section-padding relative">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
              <span className="gradient-aqua-text">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-sm">We will contact you shortly after receiving your enquiry.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-primary/20 shadow-[0_0_40px_hsl(192_82%_50%/0.1)] space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={inputClass("name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputClass("phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="number"
                placeholder="Age"
                className={`${inputClass("age")} no-spin`}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                min={1}
                max={100}
              />
              {errors.age && <p className="text-destructive text-xs mt-1">{errors.age}</p>}
            </div>
            <div>
              <select
                className={inputClass("program")}
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
              >
                <option value="" disabled hidden>Select a Program</option>
                <option value="Summer Camp">Summer Camp</option>
                <option value="Beginners Program">Beginners Program</option>
                <option value="Intermediate Program">Intermediate Program</option>
                <option value="Advanced Program">Advanced Program</option>
                <option value="Aqua Sprouts (Toddlers Program)">Aqua Sprouts (Toddlers Program)</option>
                <option value="Ladies Exclusive Program">Ladies Exclusive Program</option>
                <option value="Special Kids Aquatic Program">Special Kids Aquatic Program</option>
                <option value="Senior Citizen Swimming">Senior Citizen Swimming</option>
                <option value="Aqua Rehabilitation">Aqua Rehabilitation</option>
                <option value="1-1 Personal Training">1-1 Personal Training</option>
              </select>
              {errors.program && <p className="text-destructive text-xs mt-1">{errors.program}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message (optional)"
                rows={3}
                className={inputClass("message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              variant="whatsapp"
              size="lg"
              className="w-full text-base text-white bg-[linear-gradient(90deg,#22D3EE,#3B82F6)] shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300"
            >
              Submit Enquiry
            </Button>
            {submitError && <p className="text-destructive text-xs text-center">{submitError}</p>}
          </form>
        </div>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_FLOATING_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-foreground shadow-lg hover:brightness-110 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default EnquirySection;
