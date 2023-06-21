import React, { useState } from 'react'
import Image from 'next/image'

const Options = ({
  id,
  checked,
  onChange,
  img,
  width,
  height,
  children = null || <></>,
}) => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    onChange(!checked)
    setSelected(!selected)
  }

  return (
    <div
      className={`options ${
        selected
          ? 'selected bg-white rounded-lg py-3'
          : 'bg-white rounded-lg opacity-70 hover:opacity-100 py-3'
      }`}
      onClick={handleClick}
    >
      <Image src={img} alt={id} width={width} height={height} />
      {children}
    </div>
  )
}

export default Options
