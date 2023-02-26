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
    <div className="my-background-color">
      <h1 className="text-2xl font-bold p-2">Anasayfa</h1>
      <div className="grid grid-cols-2 mt-5 cursor-pointer">
        <div
          onClick={firstBarOnClick}
          className="relative text-center hover:bg-slate-200 pt-3"
        >
          <p className="inline text-center font-bold">Sana Özel</p>
          <div
            className={`w-16 h-1 bg-sky-600 mx-auto mt-3 rounded-3xl ${firstBarUnderLine}`}
          ></div>
        </div>

        <div
          onClick={secondBarOnClick}
          className="relative text-center hover:bg-slate-200 pt-3"
        >
          <p className="inline text-center">Takip Edilenler</p>
          <div
            className={`w-[90px] h-1 bg-sky-600 mx-auto mt-3 rounded-3xl ${secondBarUnderLine}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default AnasayfaNavbar
