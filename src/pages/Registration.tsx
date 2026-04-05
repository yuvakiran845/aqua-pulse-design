import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/aqua-pulse-logo.png";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const STEPS = [
  "Student Info",
  "Contact Info",
  "Training Details",
  "Medical & Experience",
  "Terms & Submit",
];

const CENTERS = ["R&R Swimming Pool", "Slim Life Gym Sports Complex"];

const PROGRAM_OPTIONS: Record<string, string[]> = {
  "R&R Swimming Pool": [
    "Summer Camp",
    "Beginners Program",
    "Intermediate Program",
    "Advanced Program",
    "Aqua Sprouts (Toddlers Program)",
    "Ladies Exclusive Program",
    "Special Kids Aquatic Program",
    "Senior Citizen Swimming",
    "Aqua Rehabilitation",
    "1-1 Personal Training",
  ],
  "Slim Life Gym Sports Complex": [
    "Summer Camp",
    "Beginners Program",
    "Intermediate Program",
    "1-1 Personal Training",
  ],
};

const BATCH_TYPES = ["Weekday Batch", "Weekend Batch"];

const TIME_SLOTS: Record<string, string[]> = {
  "🌅 Morning": [
    "6:00 AM – 7:00 AM",
    "7:00 AM – 8:00 AM",
    "8:00 AM – 9:00 AM",
    "9:00 AM – 10:00 AM",
    "10:00 AM – 11:00 AM",
  ],
  "🌆 Evening": [
    "4:00 PM – 5:00 PM",
    "5:00 PM – 6:00 PM",
    "6:00 PM – 7:00 PM",
    "7:00 PM – 8:00 PM",
    "8:00 PM – 9:00 PM",
  ],
};

const SLOT_LIMIT = 10;

// Google Sheets Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyt-2B1yPLyAZSQZQ3nocBWg7wnBSZL0Z779hABsAjtWoBWoMxQ1YWljtpLokjAQq3mKA/exec";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface FormState {
  center: string;
  program: string;
  batchType: string;
  slot: string;
  studentName: string;
  dob: string;
  age: string;
  gender: string;
  billId: string;
  parentName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  medical: string;
  allergies: string;
  experience: string;
  agreed: boolean;
  photoUrl: string;
}

interface Registration {
  center: string;
  program: string;
  slot: string;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

const calculateAge = (dobValue: string): string => {
  if (!dobValue) return "";
  const dob = new Date(dobValue);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return String(age);
};

const generateStudentId = (center: string = "R&R", billId: string = "") => {
  const centerCode = center.includes("R&R") ? "R&R" : "SLG";
  const idSuffix = billId.trim() || "XXXX";
  return `APSA-2026-${centerCode}-${idSuffix}`;
};

// ─── CANVAS ID CARD RENDERER ──────────────────────────────────────────────────
// Layout strategy:
//  • Top zone   (0 → ~310):  logo + title + divider + photo + name + ID badge
//  • Middle zone(310 → 650): info fields (stretch to fill)
//  • Bottom zone(650 → 820): signature block pinned to bottom

const drawIdCard = async (
  canvas: HTMLCanvasElement,
  form: FormState,
  studentId: string
): Promise<void> => {
  const SCALE = 2; 
  const W = 560 * SCALE;
  const H = 820 * SCALE;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(SCALE, SCALE);

  const w = 560;
  const h = 820;
  const PAD = 45; // Consistent side padding

  // 1. Background & Border
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, "#010A1A");
  bgGrad.addColorStop(0.5, "#04162E");
  bgGrad.addColorStop(1, "#010A1A");
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  roundRect(ctx, 0, 0, w, h, 24);
  ctx.fill();

  // Subtle scanlines / texture
  ctx.globalAlpha = 0.04;
  for (let i = 0; i < w; i += 4) {
    ctx.fillStyle = i % 8 === 0 ? "#ffffff" : "#000000";
    ctx.fillRect(i, 0, 1, h);
  }
  ctx.globalAlpha = 1.0;

  // Premium Outer Border
  ctx.strokeStyle = "rgba(34,211,238,0.8)";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  roundRect(ctx, 1.5, 1.5, w - 3, h - 3, 23);
  ctx.stroke();

  // 2. Logo - PREMIUM CIRCULAR RING CONTAINER
  const logoCircleR = 75; 
  const logoCenterY = 110;
  const logoX = w / 2;
  const logoY = logoCenterY;

  ctx.save();
  // Clear ring background
  ctx.beginPath();
  ctx.arc(logoX, logoY, logoCircleR, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(1, 10, 26, 0.9)"; // Matches card background
  ctx.fill();

  // Draw smooth gradient ring border
  const ringGrad = ctx.createLinearGradient(logoX - logoCircleR, logoY - logoCircleR, logoX + logoCircleR, logoY + logoCircleR);
  ringGrad.addColorStop(0, "#22D3EE"); // Cyan
  ringGrad.addColorStop(1, "#0EA5E9"); // Deep Aqua
  ctx.strokeStyle = ringGrad;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw logo with "contain" strategy + padding
  const PADDING = 14; // Space between logo and ring
  const maxD = (logoCircleR - PADDING) * 2;
  
  await new Promise<void>((resolve) => {
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.onload = () => {
      const iw = logo.width;
      const ih = logo.height;
      
      // Scale to "contain" logo within the padded circle (maxD)
      const scale = Math.min(maxD / iw, maxD / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      
      // Draw centered
      ctx.drawImage(logo, logoX - dw/2, logoY - dh/2, dw, dh);
      resolve();
    };
    logo.onerror = () => resolve();
    logo.src = logoImg;
  });
  ctx.restore();

  // 3. Typography & Hierarchy (Centered Header)
  const titleY = logoY + logoCircleR + 32;
  ctx.textAlign = "center";

  // Academy Name
  ctx.fillStyle = "#22D3EE";
  ctx.font = "bold 22px 'Arial', sans-serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("AQUA PULSE SWIMMING ACADEMY", w / 2, titleY);

  // Subtitle
  ctx.fillStyle = "rgba(148, 163, 184, 0.85)";
  ctx.font = "bold 13px 'Arial', sans-serif";
  ctx.letterSpacing = "4px";
  ctx.fillText("STUDENT IDENTITY CARD  •  2026", w / 2, titleY + 24);

  // Thin separator line
  ctx.strokeStyle = "rgba(34, 211, 238, 0.35)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PAD + 20, titleY + 40);
  ctx.lineTo(w - PAD - 20, titleY + 40);
  ctx.stroke();

  // 4. Photo Section
  const photoY = titleY + 68;
  const photoR = 66;
  const photoCX = w / 2;
  const photoCY = photoY + photoR;

  if (form.photoUrl) {
    await new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(photoCX, photoCY, photoR, 0, Math.PI * 2);
        ctx.clip();
        
        // Center-cover scaling for non-square photos
        const iw = img.width;
        const ih = img.height;
        const scale = Math.max((photoR * 2) / iw, (photoR * 2) / ih);
        const dw = iw * scale;
        const dh = ih * scale;
        ctx.drawImage(img, photoCX - dw/2, photoCY - dh/2, dw, dh);
        ctx.restore();
        resolve();
      };
      img.onerror = () => resolve();
      img.src = form.photoUrl;
    });
  } else {
    ctx.fillStyle = "rgba(34,211,238,0.08)";
    ctx.beginPath();
    ctx.arc(photoCX, photoCY, photoR, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stylish Photo Ring
  ctx.strokeStyle = "#22D3EE";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(photoCX, photoCY, photoR + 6, 0, Math.PI * 2);
  ctx.stroke();

  // 5. Name (Prominent)
  const nameY = photoCY + photoR + 38;
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 32px 'Arial', sans-serif";
  ctx.letterSpacing = "1px";
  ctx.fillText((form.studentName || "STUDENT NAME").toUpperCase(), w / 2, nameY);

  // Student ID Badge
  const idText = studentId;
  const idBadgeY = nameY + 12;
  ctx.font = "bold 16px 'Courier New', monospace";
  const idW = ctx.measureText(idText).width + 64;
  const idX = (w - idW) / 2;
  
  ctx.fillStyle = "rgba(34, 211, 238, 0.12)";
  ctx.strokeStyle = "rgba(34, 211, 238, 1)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  roundRect(ctx, idX, idBadgeY, idW, 36, 10);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(idText, w / 2, idBadgeY + 23);

  // 6. Information Section (Two-Column Grid)
  const infoYStart = idBadgeY + 75;
  const sigSectionH = 160;
  const infoHAvailable = h - infoYStart - sigSectionH - 40;
  
  const fields = [
    { label: "TRAINING CENTER", value: form.center || "No Center" },
    { label: "BATCH TIME",      value: form.slot    || "No Slot" },
    { label: "BATCH TYPE",      value: form.batchType || "No Batch" },
    { label: "EXPERIENCE",      value: form.experience || "Beginner" },
    { label: "ACADEMIC YEAR",   value: "2026" },
  ];

  const rowCount = fields.length;
  const rowH = (infoHAvailable / rowCount) + 4; // Tighter but bigger fonts
  const labelColW = 185; // Increased for bigger heading fonts
  const gutter = 15;

  fields.forEach((f, idx) => {
    const rowTop = infoYStart + idx * rowH;
    const centerY = rowTop + rowH / 2;

    // Subtle alternate row shading
    if (idx % 2 === 0) {
      ctx.fillStyle = "rgba(34, 211, 238, 0.05)";
      ctx.beginPath();
      roundRect(ctx, PAD, rowTop + 5, w - PAD * 2, rowH - 10, 8);
      ctx.fill();
    }

    // LABEL (Right-aligned to column edge)
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(34, 211, 238, 1)"; // Fully visible cyan
    ctx.font = "bold 17px 'Arial', sans-serif";
    ctx.letterSpacing = "0.5px";
    ctx.fillText(f.label + "  :", PAD + labelColW, centerY + 6);

    // VALUE (Left-aligned)
    ctx.textAlign = "left";
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 17px 'Arial', sans-serif";
    ctx.letterSpacing = "0px";
    ctx.fillText(f.value, PAD + labelColW + gutter, centerY + 6);
  });

  // 7. Signature & Footer Block
  const sigBlockTop = h - sigSectionH - 20;

  ctx.strokeStyle = "rgba(34, 211, 238, 0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(PAD, sigBlockTop);
  ctx.lineTo(w - PAD, sigBlockTop);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(148, 163, 184, 0.9)";
  ctx.font = "9px 'Arial', sans-serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("AUTHORISED SIGNATURE", w / 2, sigBlockTop + 18);

  // Handwritten wave signature
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 2.5;
  ctx.lineCap = "round";
  ctx.beginPath();
  const sx = w / 2 - 80;
  const sy = sigBlockTop + 42;
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(sx + 30, sy - 12, sx + 50, sy + 12, sx + 85, sy);
  ctx.bezierCurveTo(sx + 115, sy - 12, sx + 135, sy + 12, sx + 160, sy);
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 15px 'Arial', sans-serif";
  ctx.fillText("Founder & Program Director", w / 2, sigBlockTop + 68);

  ctx.fillStyle = "#22D3EE";
  ctx.font = "bold 11px 'Arial', sans-serif";
  ctx.fillText("Aqua Pulse Swimming Academy", w / 2, sigBlockTop + 84);

  // Contact Footer
  const footerY = h - 38;
  ctx.fillStyle = "rgba(148, 163, 184, 0.75)";
  ctx.font = "bold 10px 'Arial', sans-serif";
  ctx.fillText("aquapulsehub.in  •  aquapulsehub@gmail.com", w / 2, footerY);

  // Bottom Cyan Accent
  ctx.fillStyle = "#22D3EE";
  ctx.fillRect(0, h - 6, w, 6);
};

// Canvas helper: rounded rect
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Registration = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [studentId, setStudentId] = useState("APSA-2026-R&R-XXXX");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sheetError, setSheetError] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [cardReady, setCardReady] = useState(false);
  const [showSaveMenu, setShowSaveMenu] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Load registrations from localStorage for slot count
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

  // Slot batch count
  const getBatchCount = (center: string, program: string, slot: string): number =>
    registrations.filter(
      (r) => r.center === center && r.program === program && r.slot === slot
    ).length;

  // Update Student ID preview when center or bill number changes
  useEffect(() => {
    setStudentId(generateStudentId(form.center, form.billId));
  }, [form.center, form.billId]);

  const previewId = studentId;

  // Field updater with cascade reset
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



  // Photo upload via FileReader → base64
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      updateForm("photoUrl", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Per-step validation
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

  // Google Sheets SUBMISSION
  const postToGoogleSheets = async (stId: string) => {
    const data = {
      studentId: stId,
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

    try {
      console.log("Submitting Data to Sheets:", data);
      
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data),
      });

      // With no-cors, we can't read the result JSON, so we assume success if fetch didn't throw
      return { status: "success" };
    } catch (err) {
      console.error("Google Sheets POST failed:", err);
      throw err;
    }
  };

  // Submit handler
  const handleSubmit = async () => {
    if (!form.agreed || isSubmitting) return;

    if (!form.billId) {
      alert("Please enter Bill Number");
      return;
    }

    setIsSubmitting(true);
    setSheetError(null);

    try {
      await postToGoogleSheets(studentId);
      
      const newReg: Registration = {
        center: form.center,
        program: form.program,
        slot: form.slot,
      };
      const updated = [...registrations, newReg];
      setRegistrations(updated);
      try {
        localStorage.setItem("apsa_registrations", JSON.stringify(updated));
      } catch {
        console.warn("localStorage quota exceeded");
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
      alert("✅ Registration Successful");

      // Render canvas after state settles
      setTimeout(async () => {
        if (canvasRef.current) {
          await drawIdCard(canvasRef.current, form, studentId);
          setCardReady(true);
        }
      }, 300);
    } catch (error) {
      setIsSubmitting(false);
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

  // ── STYLES ──
  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-white/10 bg-[#071222] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm";
  const labelCls =
    "block text-[11px] font-bold tracking-[2px] text-cyan-400 uppercase mb-2";

  // ── PROGRAMS for current center ──
  const availablePrograms = form.center ? PROGRAM_OPTIONS[form.center] || [] : [];

  // ─── SUCCESS / ID CARD VIEW ────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#020c1b]">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            {/* Pro-Level Sucess Badge */}
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
                className="text-3xl md:text-5xl font-black tracking-tighter mb-2"
                style={{ 
                  color: "#FFFFFF", 
                  fontFamily: "'Inter', sans-serif",
                  textShadow: "0 0 20px rgba(34,211,238,0.4)"
                }}
              >
                REGISTRATION <span className="text-cyan-400">SUCCESSFUL!</span>
              </h1>
              <p className="text-slate-300 text-base">
                Welcome to Aqua Pulse Swimming Academy,{" "}
                <span className="text-white font-semibold">{form.studentName}</span>!
              </p>
              {sheetError && (
                <p className="mt-2 text-amber-400 text-sm">{sheetError}</p>
              )}
            </div>

            {/* Canvas ID Card */}
            <div
              className="mx-auto rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.2)] border border-cyan-500/40"
              style={{ maxWidth: 420 }}
            >
              <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

              {/* Save Options Button + Dropdown */}
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
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-50"
                    style={{ background: "#071e36" }}
                  >
                    {/* close on outside click */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowSaveMenu(false)}
                    />
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
                onClick={() => {
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
                  const newId = generateStudentId("", "");
                  setStudentId(newId);
                }}
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white border border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
              >
                Register Another Student
              </button>
            </div>

            <p className="mt-4 text-slate-500 text-xs">
              📱 On mobile: tap Save → <strong>Share / Save to Gallery</strong> to save directly
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ─── FORM VIEW ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "#020c1b" }}>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4">

          {/* ── LOGO & TITLE HEADER ── */}
          <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}>
              <img 
                src={logoImg} 
                alt="Aqua Pulse Logo"
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "contain",
                  borderRadius: "50%"
                }}
              />
              
              <div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  letterSpacing: "2px",
                  color: "#22D3EE"
                }}>
                  AQUA PULSE
                </div>

                <div style={{
                  fontSize: "12px",
                  color: "#7ab8cc",
                  letterSpacing: "1px"
                }}>
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

          {/* ── STEPPER ── */}
          <div className="flex items-start justify-center gap-2 sm:gap-4 mb-10 px-1 overflow-x-auto no-scrollbar py-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                      i < step
                        ? "bg-cyan-500 border-cyan-500 text-white"
                        : i === step
                        ? "border-cyan-500 text-cyan-400 bg-transparent shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                        : "border-slate-700 text-slate-500 bg-transparent"
                    }`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-[10px] mt-1.5 font-medium transition-all duration-300 ${
                      i === step
                        ? "text-cyan-400 opacity-100 scale-100 block"
                        : i < step
                        ? "text-cyan-500 md:block hidden opacity-60"
                        : "text-slate-500 md:block hidden opacity-40"
                    } whitespace-nowrap md:whitespace-normal text-center max-w-[60px] md:max-w-none`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-[2px] mx-1 sm:mx-2 mt-[-18px] transition-all duration-500 sm:block hidden ${
                      i < step ? "bg-cyan-500" : "bg-slate-700/60"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── STEP 0: STUDENT INFO ── */}
          {step === 0 && (
            <div>
              <h2
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
              >
                STUDENT INFORMATION
              </h2>
              <div className="h-px bg-cyan-500/30 mb-8" />

              <div className="space-y-6">
                {/* Student Name */}
                <div>
                  <label className={labelCls}>
                    STUDENT FULL NAME <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    value={form.studentName}
                    onChange={(e) => updateForm("studentName", e.target.value)}
                    className={inputCls}
                    placeholder="Enter full name"
                  />
                </div>

                {/* Bill ID notice */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
                  <span className="text-lg shrink-0 mt-0.5">🧾</span>
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-amber-400 uppercase mb-1">
                      OFFLINE PAYMENT BILL NUMBER
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      After paying fees at the academy, enter your bill / receipt
                      number here. This links your payment to your registration.
                    </p>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>
                    BILL / RECEIPT NUMBER <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="billNumber"
                    type="text"
                    className={inputCls}
                    value={form.billId}
                    onChange={(e) => updateForm("billId", e.target.value)}
                    placeholder="Enter Bill/Receipt Number"
                  />
                </div>

                {/* DOB + Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      DATE OF BIRTH <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={form.dob}
                      onChange={(e) => updateForm("dob", e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>AGE</label>
                    <input
                      id="age"
                      type="text"
                      value={form.age}
                      readOnly
                      className={`${inputCls} opacity-50 cursor-not-allowed`}
                      placeholder="Auto calculated"
                    />
                  </div>
                </div>

                {/* Gender + Photo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>
                      GENDER <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="gender"
                      value={form.gender}
                      onChange={(e) => updateForm("gender", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>UPLOAD STUDENT PHOTO</label>
                    <label
                      className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-[#071222] text-slate-400 text-sm cursor-pointer hover:border-cyan-500/40 transition-all"
                    >
                      <span>🖼</span>
                      <span>
                        {form.photoUrl ? "Photo selected ✓" : "Click to upload photo"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </label>
                    {form.photoUrl && (
                      <img
                        src={form.photoUrl}
                        alt="Preview"
                        className="mt-3 w-16 h-16 object-cover rounded-full border-2 border-cyan-500/40"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 1: CONTACT INFO ── */}
          {step === 1 && (
            <div>
              <h2
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
              >
                PARENT / CONTACT DETAILS
              </h2>
              <div className="h-px bg-cyan-500/30 mb-8" />

              <div className="space-y-5">
                <div>
                  <label className={labelCls}>
                    PARENT / GUARDIAN NAME <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    value={form.parentName}
                    onChange={(e) => updateForm("parentName", e.target.value)}
                    className={inputCls}
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                  <div>
                    <label className={labelCls}>
                      MOBILE NUMBER <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={(e) => updateForm("mobile", e.target.value)}
                      className={inputCls}
                      placeholder="10-digit mobile number"
                    />
                  </div>

                <div>
                  <label className={labelCls}>
                    EMAIL ADDRESS <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    className={inputCls}
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className={labelCls}>FULL ADDRESS</label>
                  <textarea
                    id="address"
                    value={form.address}
                    onChange={(e) => updateForm("address", e.target.value)}
                    className={`${inputCls} min-h-[80px] resize-none`}
                    placeholder="Door no., Street, Area"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>CITY</label>
                    <input
                      id="city"
                      type="text"
                      value={form.city}
                      onChange={(e) => updateForm("city", e.target.value)}
                      className={inputCls}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className={labelCls}>STATE</label>
                    <input
                      id="state"
                      type="text"
                      value={form.state}
                      onChange={(e) => updateForm("state", e.target.value)}
                      className={inputCls}
                      placeholder="State"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>POSTAL CODE</label>
                  <input
                    id="postalCode"
                    type="text"
                    value={form.postal}
                    onChange={(e) => updateForm("postal", e.target.value)}
                    className={`${inputCls} w-full sm:w-48`}
                    placeholder="6-digit postal code"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2: TRAINING DETAILS ── */}
          {step === 2 && (
            <div>
              {/* Added consistent terminology */}
              <h2
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
              >
                TRAINING DETAILS
              </h2>
              <div className="h-px bg-cyan-500/30 mb-8" />

              <div className="space-y-8">
                {/* Training Center */}
                <div>
                  <label className={labelCls}>
                    TRAINING CENTER <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="trainingCenter"
                    value={form.center}
                    onChange={(e) => updateForm("center", e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select Training Center</option>
                    {CENTERS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Program */}
                {form.center && (
                  <div>
                    <label className={labelCls}>
                      PROGRAM <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="program"
                      value={form.program}
                      onChange={(e) => updateForm("program", e.target.value)}
                      className={inputCls}
                    >
                      <option value="">Select Program</option>
                      {availablePrograms.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Batch Type */}
                {form.program && (
                  <div>
                    <label className={labelCls}>
                      BATCH TYPE <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {BATCH_TYPES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => updateForm("batchType", b)}
                          className={`px-5 py-2.5 rounded-xl border font-bold text-sm transition-all ${
                            form.batchType === b
                              ? "border-cyan-500 bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                              : "border-slate-700 bg-transparent text-slate-300 hover:border-cyan-500/40 hover:bg-white/5"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Time Slots */}
                {form.batchType && (
                  <div>
                    <label className={labelCls}>
                      PREFERRED TIME SLOT <span className="text-red-400">*</span>
                    </label>
                    <div className="space-y-6">
                      {Object.entries(TIME_SLOTS).map(([cat, slots]) => (
                        <div key={cat}>
                          <h4 className="text-base font-bold text-cyan-400 mb-3">
                            {cat}
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {slots.map((slot) => {
                              const count = getBatchCount(
                                form.center,
                                form.program,
                                slot
                              );
                              const isFull = count >= SLOT_LIMIT;
                              const isSelected = form.slot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  disabled={isFull}
                                  onClick={() =>
                                    !isFull && updateForm("slot", slot)
                                  }
                                  className={`w-[200px] text-left px-4 py-3.5 rounded-xl border transition-all ${
                                    isFull
                                      ? "border-slate-700/50 bg-transparent opacity-50 cursor-not-allowed"
                                      : isSelected
                                      ? "border-cyan-500 bg-cyan-500 text-white font-bold shadow-[0_0_25px_rgba(34,211,238,0.6)] scale-[1.02]"
                                      : "border-slate-700 bg-transparent text-slate-300 hover:border-cyan-500/50 hover:bg-white/5"
                                  }`}
                                >
                                  <p className={`font-bold text-[14px] ${isSelected ? "text-white" : ""}`}>
                                    {slot}
                                  </p>
                                  <span
                                    className={`block text-[11px] mt-1 font-bold ${
                                      isFull
                                        ? "text-red-400"
                                        : isSelected ? "text-white/90" : "text-green-400"
                                    }`}
                                  >
                                    {isFull
                                      ? "Batch Full"
                                      : `Limited seats`}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 3: MEDICAL & EXPERIENCE ── */}
          {step === 3 && (
            <div>
              <h2
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
              >
                MEDICAL &amp; EXPERIENCE
              </h2>
              <div className="h-px bg-cyan-500/30 mb-8" />

              {/* Student ID Preview */}
              {form.center && form.program && form.slot && (
                <div className="flex items-center gap-4 p-4 rounded-xl border border-cyan-500/40 bg-cyan-500/5 mb-7">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    <span className="text-cyan-400 text-lg">🪪</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[2px] text-slate-400 uppercase mb-0.5">
                      YOUR STUDENT ID (PREVIEW)
                    </p>
                    <p className="text-xl font-black text-cyan-400 tracking-wider font-mono">
                      {previewId}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      This ID is generated based on your selected training center and will be finalized after submission.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className={labelCls}>MEDICAL CONDITIONS (IF ANY)</label>
                  <textarea
                    id="medicalConditions"
                    value={form.medical}
                    onChange={(e) => updateForm("medical", e.target.value)}
                    className={`${inputCls} min-h-[100px] resize-none`}
                    placeholder="e.g. Asthma, Heart condition, Epilepsy… or 'None'"
                  />
                </div>

                <div>
                  <label className={labelCls}>ALLERGIES (IF ANY)</label>
                  <input
                    id="allergies"
                    type="text"
                    value={form.allergies}
                    onChange={(e) => updateForm("allergies", e.target.value)}
                    className={inputCls}
                    placeholder="e.g. Chlorine allergy, Dust… or 'None'"
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    SWIMMING EXPERIENCE <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => updateForm("experience", lvl)}
                        className={`px-6 py-3 rounded-full border font-bold text-sm transition-all ${
                          form.experience === lvl
                            ? "border-cyan-500 bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                            : "border-slate-700 bg-transparent text-slate-300 hover:border-cyan-500/40 hover:bg-white/5"
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4: TERMS & SUBMIT ── */}
          {step === 4 && (
            <div>
              <h2
                className="text-2xl font-black tracking-wider mb-1"
                style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
              >
                TERMS &amp; CONDITIONS
              </h2>
              <div className="h-px bg-cyan-500/30 mb-8" />

              {/* Terms list */}
              <div className="rounded-xl border border-slate-700/60 bg-[#071222] p-5 mb-6">
                <ol className="space-y-3">
                  {[
                    "Students must strictly follow all academy safety rules and guidelines at all times.",
                    "Batch timing must be followed strictly. Late arrivals may not be accommodated.",
                    "Fees once paid are non-refundable under any circumstances.",
                    "All medical conditions must be disclosed to the coach before commencement.",
                    "Academy reserves the right to modify batch timings if operationally required.",
                    "Students must wear appropriate swimwear as per academy guidelines.",
                    "Parents/guardians are responsible for student safety outside pool premises.",
                    "Academy is not responsible for loss of personal belongings.",
                  ].map((term, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="shrink-0 w-5 h-5 rounded-sm bg-cyan-500/20 text-cyan-400 text-[11px] font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-300 leading-relaxed">
                        {term}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Registration Summary */}
              <div className="rounded-xl border border-slate-700/60 bg-[#071222] p-5 mb-6">
                <p className="text-[10px] font-bold tracking-[2px] text-cyan-400 uppercase mb-4">
                  REGISTRATION SUMMARY
                </p>
                {[
                  { label: "Center", value: form.center },
                  { label: "Program", value: form.program },
                  { label: "Batch", value: form.batchType },
                  { label: "Slot", value: form.slot },
                  { label: "Student", value: form.studentName },
                  { label: "Bill / Receipt No.", value: form.billId || "—" },
                  { label: "Parent", value: form.parentName },
                  { label: "Mobile", value: form.mobile },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between py-2 border-b border-slate-800 last:border-0"
                  >
                    <span className="text-slate-400 text-sm">{label}</span>
                    <span className="text-white text-sm font-semibold text-right max-w-[55%] truncate">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Agreement checkbox */}
              <label className="flex items-center gap-3 cursor-pointer group mb-2">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) => updateForm("agreed", e.target.checked)}
                  className="w-5 h-5 rounded accent-cyan-500"
                />
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                  I have read and agree to the Terms &amp; Conditions of Aqua
                  Pulse Swimming Academy
                </span>
              </label>
            </div>
          )}

          {/* ── NAVIGATION BUTTONS ── */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-700/50">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                style={{
                  background: canProceed()
                    ? "linear-gradient(135deg,#22D3EE,#0ea5e9)"
                    : "#334155",
                }}
              >
                Next Step →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full font-bold text-sm text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(34,197,94,0.25)]"
                style={{
                  background:
                    canProceed() && !isSubmitting
                      ? "linear-gradient(135deg,#22c55e,#16a34a)"
                      : "#334155",
                }}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
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
