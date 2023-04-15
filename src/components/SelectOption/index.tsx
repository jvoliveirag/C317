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
      className={`pl-4 pr-4 pb-1 pt-1 rounded-md cursor-pointer font-semibold ${
        isSelected ? 'bg-orange-700 text-white' : 'bg-white text-gray-800'
      }`}
      onClick={() => onSelect(value)}
    >
      {value}
    </div>
  );
};

export default SelectOption;
