import { InputHTMLAttributes, forwardRef } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
          {label} {props.required !== false && "*"}
        </label>
        <input
          id={id}
          ref={ref}
          className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
          {...props}
        />
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
