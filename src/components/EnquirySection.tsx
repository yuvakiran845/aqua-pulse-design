import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Mail } from "lucide-react";

const ENQUIRY_API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzckFVv86JEhRHt2TenWveb4JkMuz1r-IcO4n0U6ZcFDSDbPoJh8MO3CXs-8PGMzWpE/exec";


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EnquirySection = () => {
  const [form, setForm] = useState({ name: "", phone: "", age: "", program: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    try {
      console.log("Submitting Data:", {
        name: form.name.trim(),
        phone: form.phone.trim(),
        age: form.age.trim(),
        program: form.program,
        message: form.message.trim(),
      });
      
      await fetch(ENQUIRY_API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          age: form.age.trim(),
          program: form.program,
          message: form.message.trim(),
        }),
      });

      toast.success("Enquiry sent successfully!", {
        description: "We will contact you shortly.",
        duration: 5000,
      });
      setForm({ name: "", phone: "", age: "", program: "", message: "" });
      setSubmitted(true);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const inputClass = (field: string) =>
    `w-full bg-secondary/50 border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
      errors[field] ? "border-destructive" : "border-border/50"
    }`;

  return (
    <section id="enquiry" className="section-padding relative">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
              <span className="gradient-aqua-text">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-sm">We will contact you shortly after receiving your enquiry.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-primary/20 shadow-[0_0_40px_hsl(192_82%_50%/0.1)] space-y-5 relative overflow-hidden">
            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-card/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Success!</h3>
                  <p className="text-muted-foreground mb-6">Your enquiry has been sent. We'll be in touch soon.</p>
                  <Button 
                    className="mt-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.03] active:scale-[0.98]" 
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                      setForm({ name: "", phone: "", age: "", program: "", message: "" });
                    }}
                  >
                    Send another enquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <input
                type="text"
                placeholder="Your Name"
                disabled={isSubmitting}
                className={inputClass("name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="number"
                placeholder="Age"
                disabled={isSubmitting}
                className={`${inputClass("age")} no-spin`}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                min={1}
                max={100}
              />
              {errors.age && <p className="text-destructive text-xs mt-1">{errors.age}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                disabled={isSubmitting}
                className={inputClass("phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <select
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                rows={3}
                className={inputClass("message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="whatsapp"
              size="lg"
              className="w-full text-base text-white bg-[linear-gradient(90deg,#22D3EE,#3B82F6)] shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Submitting...
                </span>
              ) : "Submit Enquiry"}
            </Button>
            {submitError && <p className="text-destructive text-xs text-center">{submitError}</p>}
          </form>
        </div>

          {/* Reach Us Column */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-[2rem] font-heading font-bold mb-4">
                <span className="gradient-aqua-text">Reach Us Directly</span>
              </h2>
              <p className="invisible text-sm">Spacer text to strictly equal left side</p>
            </div>

            <div className="flex flex-col gap-6">
              <a href={`https://wa.me/918330945566`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-[#25D366]/30 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:bg-[#25D366]/5 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:border-[#25D366]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#25D366]/30 transition-all duration-300">
                  <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1 text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 83309 45566</p>
                </div>
              </a>

              <a href="mailto:aquapulseswimmingacademy@gmail.com" className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-[#EA4335]/30 shadow-[0_0_20px_rgba(234,67,53,0.1)] hover:bg-[#EA4335]/5 hover:shadow-[0_0_30px_rgba(234,67,53,0.2)] hover:border-[#EA4335]/50 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-[#EA4335]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#EA4335]/30 transition-all duration-300">
                  <Mail className="w-7 h-7 text-[#EA4335]" />
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
    </section>
  );
};

export default EnquirySection;
