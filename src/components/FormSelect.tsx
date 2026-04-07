import { SelectHTMLAttributes, forwardRef } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: (string | { value: string; label: string })[];
  placeholder?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, id, options, placeholder = "Selecione...", ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
          {label} {props.required !== false && "*"}
        </label>
        <select
          id={id}
          ref={ref}
          className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground focus:outline-none focus:border-secondary transition-colors"
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => {
            const value = typeof opt === "string" ? opt : opt.value;
            const label = typeof opt === "string" ? opt : opt.label;
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
