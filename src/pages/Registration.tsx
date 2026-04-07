import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/aqua-pulse-logo.png";
import StudentIdCard from "@/components/StudentIdCard";
import { STEPS } from "@/constants/registration";
import { drawIdCard } from "@/utils/id-card-renderer";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";
import { StudentInfoStep } from "@/components/Registration/FormSteps/StudentInfo";
import { ContactInfoStep } from "@/components/Registration/FormSteps/ContactInfo";
import { TrainingDetailsStep } from "@/components/Registration/FormSteps/TrainingDetails";
import { MedicalExperienceStep } from "@/components/Registration/FormSteps/MedicalExperience";
import { TermsSubmitStep } from "@/components/Registration/FormSteps/TermsSubmit";

// ─── STYLES ───
const inputCls =
  "w-full px-4 py-3 rounded-xl border border-white/10 bg-[#071222] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm";
const labelCls =
  "block text-[11px] font-bold tracking-[2px] text-cyan-400 uppercase mb-2";

const Registration = () => {
  const {
    step,
    setStep,
    submitted,
    studentId,
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
    handleSubmit: handleFormSubmit,
    resetForm,
  } = useRegistrationForm();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Slot batch count
  const getBatchCount = (center: string, program: string, slot: string): number =>
    registrations.filter(
      (r) => r.center === center && r.program === program && r.slot === slot
    ).length;

  const previewId = studentId;

  // Submit handler (wraps hook's submit and triggers canvas render)
  const handleSubmit = async () => {
    try {
      const finalId = await handleFormSubmit();
      if (finalId) {
        // Render canvas after state settles with the FINAL ID
        setTimeout(async () => {
          if (canvasRef.current) {
            await drawIdCard(canvasRef.current, form, finalId);
            setCardReady(true);
          }
        }, 300);
      }
    } catch (_error) {
      alert("❌ Submission Failed. Please check your network and try again.");
    }
  };

  // ── Ensure canvas is rendered before any save operation ──
  const ensureCanvas = async (): Promise<string | null> => {
    if (!canvasRef.current) return null;
    if (!cardReady) await drawIdCard(canvasRef.current, form, studentId);
    return canvasRef.current.toDataURL("image/jpeg", 0.95);
  };

  // Save as JPG (desktop download)
  const saveAsJpg = async () => {
    setShowSaveMenu(false);
    const dataUrl = await ensureCanvas();
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${studentId}-id-card.jpg`;
    a.click();
  };

  // Save as PDF (single-page PDF via print-to-pdf trick)
  const saveAsPdf = async () => {
    setShowSaveMenu(false);
    const dataUrl = await ensureCanvas();
    if (!dataUrl) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${studentId} - ID Card</title>
          <style>
            * { margin:0; padding:0; box-sizing:border-box; }
            body { background:#020c1b; display:flex; justify-content:center; align-items:flex-start; padding:20px; }
            img { max-width:480px; width:100%; border-radius:16px; }
            @media print {
              body { padding:0; background:white; }
              img { max-width:100%; }
            }
          </style>
        </head>
        <body>
          <img src="${dataUrl}" />
          <script>window.onload=()=>{window.print();}</script>
        </body>
      </html>
    `);
    win.document.close();
  };

  // Share to phone / gallery via Web Share API
  const shareToPhone = async () => {
    setShowSaveMenu(false);
    const dataUrl = await ensureCanvas();
    if (!dataUrl) return;
    const fileName = `${studentId}-id-card.jpg`;
    try {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], fileName, { type: "image/jpeg" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "My Aqua Pulse ID Card", text: `Student ID: ${studentId}` });
      } else {
        // Fallback: open image in new tab so user can long-press save
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      }
    } catch (err) {
      console.warn("Share failed:", err);
    }
  };

  // ─── SUCCESS / ID CARD VIEW ────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#020c1b]">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            {/* Pro-Level Success Badge */}
            <div className="mb-8 relative inline-block">
              <div className="w-24 h-24 rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(34,211,238,0.4)] animate-pulse">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-black italic">PRO</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-cyan-500/50 rounded-full text-[10px] font-black text-cyan-400 tracking-[3px] uppercase shadow-xl">
                Identity Verified
              </div>
            </div>

            <div className="mb-8">
              <h1
                className="text-3xl md:text-5xl font-black tracking-tighter mb-2 text-white font-sans [text-shadow:0_0_20px_rgba(34,211,238,0.4)]"
              >
                REGISTRATION <span className="text-cyan-400">SUCCESSFUL!</span>
              </h1>
              <p className="text-slate-300 text-base">
                Welcome to Aqua Pulse Swimming Academy,{" "}
                <span className="text-white font-semibold">{form.studentName}</span>!
              </p>
            </div>

            {/* Premium React ID Card Preview */}
            <div className="mx-auto mb-4 scale-[0.85] sm:scale-100 origin-top">
              <StudentIdCard
                studentName={form.studentName}
                studentId={studentId}
                trainingCenter={form.center}
                slotTiming={form.slot}
                batchType={form.batchType}
                photoUrl={form.photoUrl}
              />
            </div>

            {/* Hidden Canvas for High-Resolution Export */}
            <div
              className="fixed -left-[10000px] -top-[10000px] overflow-hidden"
              style={{ width: 420, height: 600 }}
            >
              <canvas
                ref={canvasRef}
                style={{ width: "420px", height: "600px", display: "block" }}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="relative">
                <button
                  onClick={() => setShowSaveMenu((v) => !v)}
                  className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 select-none"
                  style={{ background: "linear-gradient(135deg,#22D3EE,#0ea5e9)" }}
                >
                  <span>⬇</span>
                  Save ID Card
                  <span className="ml-1 text-white/70">▾</span>
                </button>

                {showSaveMenu && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-50 bg-[#071e36]"
                  >
                    <div className="fixed inset-0 z-40" onClick={() => setShowSaveMenu(false)} />
                    <div className="relative z-50">
                      <button
                        onClick={saveAsJpg}
                        className="w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm font-semibold text-white hover:bg-cyan-500/10 transition-colors border-b border-white/5"
                      >
                        <span className="text-lg">🖼</span>
                        <div>
                          <p className="text-white font-bold">Save as JPG</p>
                          <p className="text-slate-400 text-[11px] font-normal">Download image to device</p>
                        </div>
                      </button>
                      <button
                        onClick={saveAsPdf}
                        className="w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm font-semibold text-white hover:bg-cyan-500/10 transition-colors border-b border-white/5"
                      >
                        <span className="text-lg">📄</span>
                        <div>
                          <p className="text-white font-bold">Save as PDF</p>
                          <p className="text-slate-400 text-[11px] font-normal">Print-to-PDF via browser</p>
                        </div>
                      </button>
                      <button
                        onClick={shareToPhone}
                        className="w-full flex items-center gap-3 px-5 py-3.5 text-left text-sm font-semibold text-white hover:bg-cyan-500/10 transition-colors"
                      >
                        <span className="text-lg">📱</span>
                        <div>
                          <p className="text-white font-bold">Share / Save to Gallery</p>
                          <p className="text-slate-400 text-[11px] font-normal">Use phone share sheet</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={resetForm}
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                Register Another Student
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ─── FORM VIEW ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#020c1b]">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <img
                src={logoImg}
                alt="Logo"
                className="w-14 h-14 object-contain rounded-full"
              />
              <div>
                <div className="font-['Bebas_Neue',_sans-serif] text-[22px] tracking-[2px] text-cyan-400">
                  AQUA PULSE
                </div>
                <div className="text-[12px] text-[#7ab8cc] tracking-[1px]">
                  SWIMMING ACADEMY
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-xl font-bold text-slate-400 tracking-[3px] uppercase">
                Student Registration
              </h2>
              <div className="h-0.5 w-12 bg-cyan-500/50 ml-auto mr-auto md:mr-0 mt-1" />
            </div>
          </div>

          {/* Stepper */}
          <div className="flex items-start justify-center gap-2 sm:gap-4 mb-10 px-1 overflow-x-auto no-scrollbar py-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${i < step
                      ? "bg-cyan-500 border-cyan-500 text-white"
                      : i === step
                        ? "border-cyan-500 text-cyan-400 bg-transparent shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                        : "border-slate-700 text-slate-500 bg-transparent"
                      }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-[10px] mt-1.5 font-medium transition-all duration-300 ${i === step
                      ? "text-cyan-400 opacity-100 scale-100"
                      : i < step
                        ? "text-cyan-500 md:block hidden opacity-60"
                        : "text-slate-500 md:block hidden opacity-40"
                      } whitespace-nowrap md:whitespace-normal text-center`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-[2px] mx-1 sm:mx-2 mt-[-18px] transition-all duration-500 sm:block hidden ${i < step ? "bg-cyan-500" : "bg-slate-700/60"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="min-h-[400px]">
            {step === 0 && (
              <StudentInfoStep 
                form={form} 
                updateForm={updateForm} 
                handlePhotoUpload={handlePhotoUpload} 
                inputCls={inputCls} 
                labelCls={labelCls} 
              />
            )}
            {step === 1 && (
              <ContactInfoStep 
                form={form} 
                updateForm={updateForm} 
                inputCls={inputCls} 
                labelCls={labelCls} 
              />
            )}
            {step === 2 && (
              <TrainingDetailsStep 
                form={form} 
                updateForm={updateForm} 
                getBatchCount={getBatchCount} 
                inputCls={inputCls} 
                labelCls={labelCls} 
              />
            )}
            {step === 3 && (
              <MedicalExperienceStep 
                form={form} 
                updateForm={updateForm} 
                previewId={previewId} 
                inputCls={inputCls} 
                labelCls={labelCls} 
              />
            )}
            {step === 4 && (
              <TermsSubmitStep 
                form={form} 
                updateForm={updateForm} 
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-700/50">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all disabled:opacity-30"
            >
              ← Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm text-white transition-all disabled:opacity-30 shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                style={{ background: canProceed() ? "linear-gradient(135deg,#22D3EE,#0ea5e9)" : "#334155" }}
              >
                Next Step →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm text-white transition-all disabled:opacity-30 shadow-[0_0_15px_rgba(34,197,94,0.25)]"
                style={{ background: canProceed() && !isSubmitting ? "linear-gradient(135deg,#22c55e,#16a34a)" : "#334155" }}
              >
                {isSubmitting ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                ) : (
                  <>✅ Submit Registration</>
                )}
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
