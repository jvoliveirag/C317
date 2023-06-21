import React from 'react'
import SelectOption from '../SelectOption'

type SelectProps = {
  options: string[]
  selectedValue: string
  onSelect: (value: string) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <SelectOption
          key={option}
          value={option}
          selectedValue={selectedValue}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export { Select }
