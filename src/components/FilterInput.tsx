const FilterInput = ({
  label,
  value,
  onChange,
  additionalClassName,
}: {
  label: string;
  value: string | undefined;
  onChange: (newValue: string | undefined) => void;
  additionalClassName: string | undefined;
}) => {
  return (
    <div className={`flex flex-row ${additionalClassName}`}>
      <span className="mr-4">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="px-1 border border-black"
      />
    </div>
  );
};

export default FilterInput;
