import React, { useState } from 'react';

interface RangeSliderProps {
    minYear: number;
    maxYear: number;
    onChange: (value: number) => void;
}

const YearSelector: React.FC<RangeSliderProps> = ({ minYear, maxYear, onChange }) => {
  const [value, setValue] = useState<number>(minYear);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  const min = String(minYear)
  const max = String(maxYear)

  return (
    <div>
      <input className='rounded-lg bg-purple-400 font-bold' type="number" min={min} max={max} step="1" value={value} onChange={handleChange} />
    </div>
  );
};

export { YearSelector };
