import { FormState } from "@/types/registration";
import { CENTERS, PROGRAM_OPTIONS, BATCH_TYPES, TIME_SLOTS, SLOT_LIMIT } from "@/constants/registration";

interface Props {
  form: FormState;
  updateForm: (field: keyof FormState, value: string | boolean) => void;
  getBatchCount: (center: string, program: string, slot: string) => number;
  inputCls: string;
  labelCls: string;
}

export const TrainingDetailsStep = ({ form, updateForm, getBatchCount, inputCls, labelCls }: Props) => {
  const availablePrograms = form.center ? PROGRAM_OPTIONS[form.center] || [] : [];

  return (
    <div>
      <h2
        className="text-2xl font-black tracking-wider mb-1"
        style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
      >
        TRAINING DETAILS
      </h2>
      <div className="h-px bg-cyan-500/30 mb-8" />

      <div className="space-y-8">
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
                  className={`px-5 py-2.5 rounded-xl border font-bold text-sm transition-all ${form.batchType === b
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
                          className={`w-[200px] text-left px-4 py-3.5 rounded-xl border transition-all ${isFull
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
                            className={`block text-[11px] mt-1 font-bold ${isFull
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
  );
};
