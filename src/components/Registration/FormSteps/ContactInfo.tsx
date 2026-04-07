import { FormState } from "@/types/registration";

interface Props {
  form: FormState;
  updateForm: (field: keyof FormState, value: string | boolean) => void;
  inputCls: string;
  labelCls: string;
}

export const ContactInfoStep = ({ form, updateForm, inputCls, labelCls }: Props) => {
  return (
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
  );
};
