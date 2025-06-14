import { useState } from "react";

const formInitialValue = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

function ContactForm() {
  const [formValue, setFormValue] = useState(formInitialValue);

  const handleForm = (e) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formValue);
    setFormValue(formInitialValue);
  };

  return (
    <form action="" onSubmit={onFormSubmit} className="w-full space-y-5">
      <div className="flex justify-between gap-2.5">
        <div className="flex flex-col items-start gap-2 w-1/2 ">
          <label htmlFor="" className="font-semibold text-xs text-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-1.5 bg-surface-input border border-transparent focus:border-accent-primary outline-0 rounded-compact"
            value={formValue.name}
            onChange={handleForm}
            required
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-1/2">
          <label htmlFor="" className="font-semibold text-xs text-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            className="w-full p-1.5 bg-surface-input border border-transparent focus:border-accent-primary outline-0 rounded-compact"
            value={formValue.email}
            onChange={handleForm}
            required
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="" className="font-semibold text-xs text-label">
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full p-1.5 bg-surface-input border border-transparent focus:border-accent-primary outline-0 rounded-compact"
          value={formValue.budget}
          onChange={handleForm}
          required
        >
          <option value="" disabled>
            Select...
          </option>
          <option value="<3k">&lt;$3k</option>
          <option value="3k ~ 5k">$3k ~ $5k</option>
          <option value="5k ~ 10k">$5k ~ $10k</option>
          <option value=">10k">&gt;$10k</option>
        </select>
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="" className="font-semibold text-xs text-label">
          Message
        </label>
        <textarea
          name="message"
          id=""
          rows="5"
          placeholder="Message"
          className="w-full p-1.5 bg-surface-input border border-transparent focus:border-accent-primary outline-0 rounded-compact"
          value={formValue.message}
          onChange={handleForm}
          required
        ></textarea>
      </div>

      <div className="">
        <input
          type="submit"
          value="Submit"
          className="w-full p-1.5 font-semibold hover:text-accent-primary bg-accent-primary hover:bg-surface-light rounded-compact cursor-pointer"
        />
      </div>
    </form>
  );
}

export default ContactForm;
