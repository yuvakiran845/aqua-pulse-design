import { FormState } from "@/types/registration";

interface Props {
  form: FormState;
  updateForm: (field: keyof FormState, value: string | boolean) => void;
  previewId: string;
  inputCls: string;
  labelCls: string;
}

export const MedicalExperienceStep = ({ form, updateForm, previewId, inputCls, labelCls }: Props) => {
  return (
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
                className={`px-6 py-3 rounded-full border font-bold text-sm transition-all ${form.experience === lvl
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
  );
};
