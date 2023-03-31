import InputRange from 'react-input-range'
//import 'react-input-range/lib/css/index.css'

export default function InputRangeSlider({currentValue, updateMainValue, minValue, maxValue}) {
    
    const updateValue = updatedValue => {
        updateMainValue(updatedValue)
    }

    return (
        <InputRange
            minValue={minValue}
            maxValue={maxValue}
            value={currentValue}
            onChange={value => updateValue(value)}
        />
    )
}