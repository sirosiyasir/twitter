import { useState } from "react"

function AnasayfaTextArea() {
  const [openTextArea, setOpenTextArea] = useState(false)
  const textAreaOnClick = () => {
    setOpenTextArea(true)
  }
  return (
    <div className="grid grid-cols-8 w-auto border-y-[1px] border-gray-100 h-auto">
      <div className="">
        <img
          className="rounded-3xl m-3"
          src="https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
          width="40px"
          height="40px"
          alt=""
        />
      </div>

      <div className="col-span-7 mt-2">
        <p
          className={`${
            openTextArea ? "inline-block" : "hidden"
          } inline-block rounded-3xl border px-3 text-sky-500 font-semibold cursor-pointer hover:bg-sky-100`}
        >
          Herkese açık
          <i className="fa-solid fa-angle-down text-sm text-sky-400 ml-2"></i>
        </p>
        <textarea
          onClick={textAreaOnClick}
          className="block w-full resize-none outline-none mt-5 placeholder:text-xl"
          name=""
          id=""
          placeholder="Neler oluyor?"
        ></textarea>
        <div className={openTextArea ? "block" : "hidden"}>
          <p className="inline-block mb-3 rounded-3xl px-3 text-sky-500 font-semibold cursor-pointer hover:bg-sky-100">
            <i className="fa-solid fa-earth-americas text-sm text-sky-400 mr-1"></i>
            Herkes yorum yapabilir
          </p>
          <hr width="90%" />
        </div>

        <div className="mt-4 mb-2">
          <i className="fa-regular fa-image text-sky-400"></i>
          <i class="fa-regular fa-file-video ml-4 text-sky-400"></i>
          <i className="fa-solid fa-server ml-4 text-sky-400"></i>
          <i className="fa-regular fa-face-smile ml-4 text-sky-400"></i>
          <i className="fa-regular fa-calendar-days ml-4 text-sky-400"></i>
          <i class="fa-solid fa-location-dot ml-4 text-sky-400"></i>
        </div>
      </div>
    </div>
  )
}

export default AnasayfaTextArea
