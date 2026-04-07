import { FormState } from "@/types/registration";
import logoImg from "@/assets/aqua-pulse-logo.png";

export const drawIdCard = async (
  canvas: HTMLCanvasElement,
  form: FormState,
  studentId: string
): Promise<void> => {
  const SCALE = 3; // Higher scale for better print quality
  const W = 420 * SCALE;
  const H = 600 * SCALE;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(SCALE, SCALE);

  const w = 420;
  const h = 600;

  // 1. Background & Border (Premium Gradient)
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, "#061826");
  bgGrad.addColorStop(1, "#020d18");
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  roundRect(ctx, 0, 0, w, h, 18);
  ctx.fill();

  // Cyan Glow Effect (Internal)
  const radialGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w);
  radialGrad.addColorStop(0, "rgba(0, 234, 255, 0.04)");
  radialGrad.addColorStop(1, "transparent");
  ctx.fillStyle = radialGrad;
  ctx.fillRect(0, 0, w, h);

  // Border
  ctx.strokeStyle = "rgba(0, 234, 255, 0.25)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // 2. Header: Logo (Full-Bleed Circular Badge)
  const logoW = 110;
  const logoX = (w - logoW) / 2;
  const logoY = 20;

  // Subtle Atmospheric Glow
  ctx.save();
  ctx.shadowColor = "rgba(0, 234, 255, 0.5)"; // Intensified glow
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(logoX + logoW / 2, logoY + logoW / 2, logoW / 2, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(2, 13, 24, 0.01)"; // Trigger shadow without showing fill
  ctx.fill();
  ctx.restore();

  ctx.save();
  // Circular clipping for absolute edge-to-edge focal fit
  ctx.beginPath();
  ctx.arc(logoX + logoW / 2, logoY + logoW / 2, logoW / 2, 0, Math.PI * 2);
  ctx.clip();

  await new Promise<void>((resolve) => {
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.onload = () => {
      // Logic to maximize logo and minimize silver border
      const iw = logo.width;
      const ih = logo.height;
      const scaleBase = Math.max(logoW / iw, logoW / ih);
      const scale = scaleBase * 1.35; // Zoom into the emblem core
      const dw = iw * scale;
      const dh = ih * scale;

      // Centering with -2% focal correction
      const dx = logoX + (logoW - dw) / 2;
      const dy = (logoY + (logoW - dh) / 2) - (dh * 0.02);

      // Enhance colors for more "shine"
      ctx.filter = "saturate(1.15) brightness(1.1) contrast(1.05)";
      ctx.drawImage(logo, dx, dy, dw, dh);
      ctx.filter = "none";
      resolve();
    };
    logo.onerror = () => resolve();
    logo.src = logoImg;
  });
  ctx.restore();

  // Header Title
  ctx.textAlign = "center";
  ctx.fillStyle = "#00eaff";
  ctx.font = "900 21px 'Inter', Arial, sans-serif";
  ctx.shadowColor = "rgba(0, 234, 255, 0.15)";
  ctx.shadowBlur = 8;
  ctx.fillText("AQUA PULSE SWIMMING ACADEMY", w / 2, 150);
  ctx.shadowBlur = 0;

  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.font = "700 9.5px 'Inter', Arial, sans-serif";
  ctx.letterSpacing = "1.8px";
  ctx.fillText("STUDENT IDENTITY CARD • 2026", w / 2, 162);
  ctx.letterSpacing = "0px";

  // 3. Center Section: Identity (Photo, Name, Badge)
  const photoR = 57.5;
  const photoCX = w / 2;
  const photoCY = 230;

  // Photo Glow Ring
  const photoGrad = ctx.createLinearGradient(photoCX - photoR, photoCY - photoR, photoCX + photoR, photoCY + photoR);
  photoGrad.addColorStop(0, "#00eaff");
  photoGrad.addColorStop(1, "#0077ff");
  ctx.strokeStyle = photoGrad;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(photoCX, photoCY, photoR + 4, 0, Math.PI * 2);
  ctx.stroke();

  if (form.photoUrl) {
    await new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(photoCX, photoCY, photoR, 0, Math.PI * 2);
        ctx.clip();

        const iw = img.width;
        const ih = img.height;
        const scale = Math.max((photoR * 2) / iw, (photoR * 2) / ih);
        const dw = iw * scale;
        const dh = ih * scale;
        ctx.drawImage(img, photoCX - dw / 2, photoCY - dh / 2, dw, dh);
        ctx.restore();
        resolve();
      };
      img.onerror = () => resolve();
      img.src = form.photoUrl;
    });
  } else {
    ctx.fillStyle = "#031424";
    ctx.beginPath();
    ctx.arc(photoCX, photoCY, photoR, 0, Math.PI * 2);
    ctx.fill();
  }

  // Name
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 25px 'Inter', Arial, sans-serif";
  ctx.fillText((form.studentName || "SRNYMJDSTU").toUpperCase(), w / 2, 312);

  // ID Badge (Courier style)
  const idText = studentId || "APSA-2026-R&R-0001";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.letterSpacing = "1.5px";
  const idW = ctx.measureText(idText).width + 32;
  const idX = (w - idW) / 2;

  ctx.fillStyle = "rgba(0, 234, 255, 0.06)";
  ctx.strokeStyle = "rgba(0, 234, 255, 0.15)";
  ctx.beginPath();
  roundRect(ctx, idX, 325, idW, 28, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#00eaff";
  ctx.fillText(idText, w / 2, 343);
  ctx.letterSpacing = "0px";

  // 4. Boxed Details Section
  const detailsY = 370;
  const detailsW = w - 40;
  const detailsX = 20;

  const infoFields = [
    { label: "PROGRAM",         value: form.experience || "Beginners Program" }, 
    { label: "TRAINING CENTER", value: form.center || "R&R Swimming Pool" },
    { label: "BATCH TIME",      value: form.slot || "6:00 AM - 7:00 AM" },
    { label: "BATCH TYPE",      value: form.batchType || "Weekday Batch" },
    { label: "ACADEMIC YEAR",   value: "2026" },
  ];

  infoFields.forEach((item, i) => {
    const boxY = detailsY + i * 42;

    // Draw Box
    ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
    ctx.beginPath();
    roundRect(ctx, detailsX, boxY, detailsW, 36, 8);
    ctx.fill();
    ctx.stroke();

    // Label
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(0, 234, 255, 0.5)";
    ctx.font = "800 7.5px 'Inter', Arial, sans-serif";
    ctx.letterSpacing = "0.8px";
    ctx.fillText(item.label, detailsX + 16, boxY + 12);

    // Value
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 14.5px 'Inter', Arial, sans-serif";
    ctx.letterSpacing = "0px";
    ctx.fillText(item.value, detailsX + 16, boxY + 27);
  });

  // 5. Footer: Signature & Contact (Firmly at the bottom)
  const footerY = 590;
  ctx.textAlign = "center";

  ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
  ctx.font = "bold 8.5px 'Inter', Arial, sans-serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("AUTHORISED SIGNATURE", w / 2, footerY - 35);

  // Cyan Signature Wave Path
  ctx.strokeStyle = "#00eaff";
  ctx.lineWidth = 1;
  ctx.shadowColor = "rgba(0, 234, 255, 0.3)";
  ctx.shadowBlur = 3;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 40, footerY - 22);
  ctx.bezierCurveTo(w / 2 - 20, footerY - 34, w / 2 + 20, footerY - 10, w / 2 + 40, footerY - 22);
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "800 13.5px 'Inter', Arial, sans-serif";
  ctx.fillText("Founder & Program Director", w / 2, footerY - 6);

  ctx.fillStyle = "rgba(0, 234, 255, 0.5)";
  ctx.font = "bold 10.5px 'Inter', Arial, sans-serif";
  ctx.fillText("Aqua Pulse Swimming Academy", w / 2, footerY + 6);

  // Contact Footer Line
  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.moveTo(30, footerY + 10);
  ctx.lineTo(w - 30, footerY + 10);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.font = "600 10px 'Inter', Arial, sans-serif";
  ctx.fillText("aquapulsehub.in  •  aquapulseswimmingacademy@gmail.com", w / 2, footerY + 28);
};

export const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
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
};
