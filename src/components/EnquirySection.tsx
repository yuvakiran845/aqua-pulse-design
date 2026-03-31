import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, MapPin, Mail } from "lucide-react";

const ENQUIRY_API_ENDPOINT =
  import.meta.env.VITE_ENQUIRY_API_URL ?? "YOUR_API_URL";
const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "918330945566";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left mb-8">
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

          {/* Reach Us Column */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
                <span className="mr-2">👉</span><span className="gradient-aqua-text">REACH US DIRECTLY</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <a href={`https://wa.me/918330945566`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-[#25D366]/30 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:bg-[#25D366]/5 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:border-[#25D366]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#25D366]/30 transition-all duration-300">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 83309 45566</p>
                </div>
              </a>

              <a href="mailto:aquapulseswimmingacademy@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-primary/40 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm sm:text-base break-all sm:break-normal">aquapulseswimmingacademy@gmail.com</p>
                </div>
              </a>

              <a href="https://www.google.com/maps?q=Vinayak+Sagar+Tirupati" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-primary/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:border-primary/40 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">Office</h3>
                  <p className="text-muted-foreground">Vinayak Sagar, Tirupati</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="https://www.google.com/maps?q=Vinayak+Sagar+Tirupati"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Google Maps"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-primary/90 hover:scale-[1.05] transition-all duration-300"
        >
          <MapPin className="w-6 h-6" />
        </a>
        <a
          href={`https://wa.me/918330945566?text=${encodeURIComponent(WHATSAPP_FLOATING_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-[1.05] transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default EnquirySection;
