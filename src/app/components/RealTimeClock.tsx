'use client'

import { useState, useEffect } from 'react'

export default function RealTimeClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#021024] text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">Real-time Clock (CSR)</h3>
      <div className="text-2xl font-mono">
        {time.toLocaleTimeString()}
      </div>
      <div className="text-sm opacity-75 mt-1">
        {time.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
      <p className="text-xs mt-3 opacity-75">
        This component updates every second using Client-Side Rendering
      </p>
    </div>
  )
}