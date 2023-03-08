// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component url'sinden alıntıdır. Açılır kapanır bir component yapmak için kullandım
import { useState, useEffect, useRef } from "react"

export default function useComponentVisible2(initialIsVisible) {
  const [isComponentVisible2, setIsComponentVisible2] =
    useState(initialIsVisible)
  const ref2 = useRef(null)

  const handleClickOutside = (event) => {
    if (ref2.current && !ref2.current.contains(event.target)) {
      setIsComponentVisible2(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return { ref2, isComponentVisible2, setIsComponentVisible2 }
}
