import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()

  const month = date.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()

  const day = date.getDate()

  const time = date
    .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit',  })
     .replace(' ', '')
    .toLowerCase()

  return `${weekday} ${month} ${day} ${time}`
}

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(() => formatDateTime(new Date()))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <div>{currentDateTime}</div>
}

export default DateTime