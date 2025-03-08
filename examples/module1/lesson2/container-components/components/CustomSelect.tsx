type CustomSelectProps = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

const CustomSelect = ({
  label,
  options,
  value,
  onChange,
}: CustomSelectProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <select
        className="border h-7 mt-1 indent-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CustomSelect;
