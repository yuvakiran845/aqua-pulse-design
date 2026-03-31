import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const EnquirySection = () => {
  const [form, setForm] = useState({ name: "", phone: "", program: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit phone number";
    if (!form.program) e.program = "Please select a program";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}. I'm interested in ${form.program}. ${form.message}`.trim()
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
    setSubmitted(true);
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
            <p className="text-muted-foreground">We have received your enquiry and will contact you shortly.</p>
            <Button variant="ghost" className="mt-6 text-primary" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", program: "", message: "" }); }}>
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
            <Button type="submit" variant="whatsapp" size="lg" className="w-full text-base">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
