import { useState } from "react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { CheckCircle, MessageCircle } from "lucide-react";

const ENQUIRY_API_ENDPOINT =
  import.meta.env.VITE_ENQUIRY_API_URL ?? "YOUR_API_URL";
const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "919999999999";
const WHATSAPP_FLOATING_MESSAGE =
  import.meta.env.VITE_WHATSAPP_FLOATING_MESSAGE ?? "Hello, I want to enquire about swimming programs.";
=======
import { CheckCircle } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);
>>>>>>> 96b980244ead208abf4271cf0340c07a78008d8f

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
<<<<<<< HEAD
            <Button
              type="submit"
              variant="whatsapp"
              size="lg"
              className="w-full text-base text-white bg-[linear-gradient(90deg,#22D3EE,#3B82F6)] shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300"
            >
              Submit Enquiry
=======
            <Button type="submit" variant="whatsapp" size="lg" className="w-full text-base">
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Send via WhatsApp
>>>>>>> 96b980244ead208abf4271cf0340c07a78008d8f
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
