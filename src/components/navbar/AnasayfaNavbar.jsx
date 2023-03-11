import React from "react"
import { useState } from "react"

function AnasayfaNavbar() {
  const [firstBarUnderLine, setFirstBarUnderLine] = useState("block")
  const [secondBarUnderLine, setSecondBarUnderLine] = useState("hidden")
  const secondBarOnClick = () => {
    setSecondBarUnderLine("block")
    setFirstBarUnderLine("hidden")
  }
  const firstBarOnClick = () => {
    setSecondBarUnderLine("hidden")
    setFirstBarUnderLine("block")
  }
  return (
    <div className="my-background-color fixed z-10">
      <h1 className="text-2xl font-bold p-2">Anasayfa</h1>
      <div className="grid grid-cols-6 gap-4 mt-5 cursor-pointer px-[132px]">
        <div
          onClick={firstBarOnClick}
          className="col-start-1 col-end-3 relative text-center hover:bg-slate-200 pt-3"
        >
          <p
            className={`inline text-center ${
              firstBarUnderLine === "block" && "font-bold"
            }`}
          >
            Sana Özel
          </p>
          <div
            className={`w-16 h-1 bg-sky-600 mx-auto mt-3 rounded-3xl ${firstBarUnderLine}`}
          ></div>
        </div>

        <div
          onClick={secondBarOnClick}
          className="col-end-7 col-span-2 relative text-center hover:bg-slate-200 pt-3"
        >
          <p
            className={`inline text-center ${
              secondBarUnderLine === "block" && "font-bold"
            }`}
          >
            Takip Edilenler
          </p>
          <div
            className={`w-[90px] h-1 bg-sky-600 mx-auto mt-3 rounded-3xl ${secondBarUnderLine}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default AnasayfaNavbar
