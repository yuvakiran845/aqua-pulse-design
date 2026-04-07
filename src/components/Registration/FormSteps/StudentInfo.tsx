import { FormState } from "@/types/registration";

interface Props {
  form: FormState;
  updateForm: (field: keyof FormState, value: string | boolean) => void;
  handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputCls: string;
  labelCls: string;
}

export const StudentInfoStep = ({ form, updateForm, handlePhotoUpload, inputCls, labelCls }: Props) => {
  return (
    <div>
      <h2
        className="text-2xl font-black tracking-wider mb-1"
        style={{ color: "#22D3EE", fontFamily: "Arial, sans-serif" }}
      >
        STUDENT INFORMATION
      </h2>
      <div className="h-px bg-cyan-500/30 mb-8" />

      <div className="space-y-6">
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
  );
};
