import React, { useState } from 'react'

interface RangeSliderProps {
  initialValue: number
  minValue: number
  maxValue: number
  onChange: (value: number) => void
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  initialValue,
  minValue,
  maxValue,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <>
      <input
        id="range-input"
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleChange}
      />
    </>
  )
}

export { RangeSlider }
