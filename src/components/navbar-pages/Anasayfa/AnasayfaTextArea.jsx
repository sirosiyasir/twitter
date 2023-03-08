import { useState } from "react"
// div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
import useComponentVisible from "../../toggle-component/useComponentVisible"
/* aynı jsx'te iki div'de aynı anda kullanılamadığından bir tane daha useComponentVisible oluşturdum(alternatif: burada 
  kullanılan 2. div ayrı bir .jsx olarak oluşturulup o .jsx'te useComponent'ı kullanabilir ve buraya da .jsx'i import ederdik) */
import useComponentVisible2 from "../../toggle-component/useComponentVisible2"

function AnasayfaTextArea() {
  // Tweet yazma bölgesine tıklandığında gerekli bazı yerlerin ortaya çıkması için openTextArea
  const [openTextArea, setOpenTextArea] = useState(false)
  // Textarea'ya yazılan değeri yakalamak için textValue
  const [textValue, setTextValue] = useState("")
  // 280 kelimelik sınırın aşıldığını belirtmek için overText
  const [overText, setOverText] = useState("")
  // Progress Bar'ın text area'daki durumunu değiştirebilmek için
  const [progressBar, setProgressBar] = useState(true)
  // Progress Bar ve onunla birlikte açılacak olanların text area'daki value'ye göre belirlenmesi için
  const [textAreaValue, setTextAreaValue] = useState(false)

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const { ref2, isComponentVisible2, setIsComponentVisible2 } =
    useComponentVisible2(false)

  // herkese açık seçeneği'de div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
  const everyoneClick = () => {
    setIsComponentVisible(true)
  }
  const everyoneCommentClick = () => {
    setIsComponentVisible2(true)
  }
  //Text area'ya tıklandığı zaman o bölgedeki bazı etkileşimleri hidden'dan görünür hale geçirmek için
  const textAreaOnClick = () => {
    setOpenTextArea(true)
  }
  //Text area'ya girilen değerler için progress bar'ı etkinleştirmek ve button'ı disabled'dan çekmek vb için
  const textAreaChange = (e) => {
    if (e.target.value !== "") {
      setTextAreaValue(true)
    } else if (e.target.value === "") {
      setTextAreaValue(false)
    }
    if (e.target.value.length <= 280) {
      setTextValue(`${e.target.value.length * 1.28}deg`)
      setProgressBar(true)
      setOverText("")
    } else if (e.target.value.length > 280) {
      setTextValue(e.target.value.length)
      setOverText("border-red-500 bg-white")
      setProgressBar(false)
    }
  }
  return (
    <div className="grid grid-cols-8 w-auto border-y-[1px] border-gray-100 h-auto">
      <div>
        <img
          className="rounded-3xl m-3"
          src="https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
          width="40px"
          height="40px"
          alt=""
        />
      </div>

      <div className="col-span-7 mt-2">
        <div className="relative">
          <p
            onClick={everyoneClick}
            ref={ref}
            className={`${
              openTextArea ? "inline-block" : "hidden"
            } inline-block rounded-3xl border px-3 text-sky-500 font-semibold cursor-pointer hover:bg-sky-100`}
          >
            Herkese açık
            <i className="fa-solid fa-angle-down text-sm text-sky-400 ml-2"></i>
          </p>
          {isComponentVisible && (
            <div className="card bg-white w-[260px] h-[192px] shadow-lg absolute -left-16">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold my-3 ml-3">
                  Hedef kitle seç
                </h1>
                <div className="mt-2">
                  <i className="fa-solid fa-earth-americas inline text-left ml-5 text-xl"></i>
                  <p className="inline font-semibold text-lg ml-6">
                    Herkese açık
                  </p>
                </div>

                <div className="my-5 relative">
                  <i className="fa-solid fa-user-check absolute top-3 left-5 text-xl"></i>
                  <div className="inline-block">
                    <p className=" font-semibold text-lg ml-[66px]">
                      Twitter Çevresi
                    </p>
                    <p className="ml-[66px]">
                      0 People
                      <span className="underline cursor-pointer ml-4 font-semibold">
                        Edit
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <textarea
          onChange={textAreaChange}
          onClick={textAreaOnClick}
          className="block w-full resize-none outline-none mt-5 placeholder:text-xl"
          placeholder="Neler oluyor?"
        ></textarea>
        <div
          onClick={everyoneCommentClick}
          className={openTextArea ? "block mt-3" : "hidden"}
          ref={ref2}
        >
          {isComponentVisible2 && (
            <div className="relative">
              <div className="card bg-white w-[260px] h-[192px] shadow-lg absolute -left-16">
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold my-3 ml-3">
                    Hedef kitle seç
                  </h1>
                </div>
              </div>
            </div>
          )}
          <p className="inline-block mb-3 rounded-3xl px-3 text-sky-500 font-semibold cursor-pointer hover:bg-sky-100">
            <i className="fa-solid fa-earth-americas text-sm text-sky-400 mr-1"></i>
            Herkes yorum yapabilir
          </p>
          <hr width="90%" />
        </div>

        <div className="mt-4 mb-2 grid grid-cols-2 gap-16">
          <div className="">
            <i className="fa-regular fa-image text-sky-400"></i>
            <i className="fa-regular fa-file-video ml-4 text-sky-400"></i>
            <i className="fa-solid fa-server ml-4 text-sky-400"></i>
            <i className="fa-regular fa-face-smile ml-4 text-sky-400"></i>
            <i className="fa-regular fa-calendar-days ml-4 text-sky-400"></i>
            <i className="fa-solid fa-location-dot ml-4 text-sky-400"></i>
          </div>
          <div className="relative mx-auto">
            <div
              style={
                progressBar
                  ? {
                      background: `conic-gradient(rgba(84, 157, 206, 0.867) ${textValue}, #ededed 0deg)`,
                    }
                  : {
                      background: "transparent",
                    }
              }
              className={
                textAreaValue
                  ? `w-7 h-7 absolute top-[3px] rounded-3xl border text-center ${overText}`
                  : "hidden"
              }
            >
              {!progressBar && textValue - 280}
            </div>
            <div className="inline ml-[32px]">
              <div className={textAreaValue ? "inline" : "hidden"}>
                <div className="border mx-2 border-gray-200 inline"></div>
                <i className="fa-solid fa-plus ml-2 mr-3 rounded-3xl border pl-1 py-1 pr-[3px] border-gray-300 text-sky-400"></i>
              </div>
              <button
                disabled={!textAreaValue}
                className="text-md bg-sky-500 text-white font-semibold rounded-3xl px-[14px] py-[6px] disabled:bg-sky-300"
              >
                Tweetle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnasayfaTextArea
