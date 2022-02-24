import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (value: any) => void;
  label: string;
  id?: string;
  columnClasses?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  columnClasses,
  label,
  id,
  ...inputProps
}: InputProps) => {
  return (
    <div className={`field column ${columnClasses}`}>
      <label className="label" htmlFor={`input${label}`}>
        {label}
      </label>
      <div className="control">
        <input
          className="input"
          id={id}
          {...inputProps}
          onChange={(event) => {
            if (onChange) {
              onChange(event.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};
