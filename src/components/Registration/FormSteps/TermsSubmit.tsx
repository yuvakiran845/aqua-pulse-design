import { FormState } from "@/types/registration";

interface Props {
  form: FormState;
  updateForm: (field: keyof FormState, value: string | boolean) => void;
}

export const TermsSubmitStep = ({ form, updateForm }: Props) => {
  return (
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
  );
};
