import React, { useState, useEffect } from "react"

const Timer = () => {
  const [{ days, hours, minutes, seconds }, setTimeUnit] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isCountdownEnd, setIsCountdownEnd] = useState(false)
  const finalDate = new Date("Jun 24, 2019 09:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(function() {
      const now = new Date().getTime()

      const interval = finalDate - now

      if (interval === 0) {
        setIsCountdownEnd(true)
        this.clearInterval(timer)
      }

      const d = Math.floor(interval / (1000 * 60 * 60 * 24))
      const h = Math.floor(
        (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const m = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((interval % (1000 * 60)) / 1000)

      setTimeUnit({ days: d, hours: h, minutes: m, seconds: s })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return !isCountdownEnd ? (
    <div>
      {days}d {hours}h {minutes}m {seconds}s
    </div>
  ) : (
    <div>Gruby w robocie</div>
  )
}

export default Timer
