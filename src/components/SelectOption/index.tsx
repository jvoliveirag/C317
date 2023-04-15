import React from 'react';

type SelectOptionProps = {
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, selectedValue, onSelect }) => {
  const isSelected = value === selectedValue;

  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer font-semibold ${
        isSelected ? 'bg-orange-400' : 'bg-white text-black'
      }`}
      onClick={() => onSelect(value)}
    >
      {value}
    </div>
  );
};

export default SelectOption;
