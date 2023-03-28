// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component url'sinden alıntıdır. Açılır kapanır bir component yapmak için kullandım
import { useState, useEffect, useRef } from "react"

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const reference = useRef(null)

  const handleClickOutside = (event) => {
    if (reference.current && !reference.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return { reference, isComponentVisible, setIsComponentVisible }
}
