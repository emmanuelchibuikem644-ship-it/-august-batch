"use client"
import Forms from '@/components/Forms';
import Navbar from '@/components/Navbar'
import { useState } from "react";

import React from 'react'

export default function About() {
  const [value, setValue] = useState(0)
  // function to handle addition
  const handleAdd = () => {
    setValue(value + 1)
  }
  // function to handle subraction
  const handleSub = () => {
    if (value < 1) return
    setValue(value - 1)
  }
  const handleReset = () => {
    setValue(0);
  }

  return (
    <div>
      <Navbar />
     <Forms />
      <div className="flex gap-x-4 justify-center">
        <button onClick={handleSub} className="px-3 py-2 bg-red-400 text-white">-</button>
        <p>{value}</p>
        <button onClick={handleAdd} className="px-3 py-2 bg-green-400 text-white">+</button>
        <button onClick={handleReset} className="px-3 py-2 bg-blue-400 text-white">+</button>
      </div>
      </div >
    
  )
}
