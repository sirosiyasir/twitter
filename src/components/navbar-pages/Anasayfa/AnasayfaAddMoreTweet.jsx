import { useState, useContext } from "react"
import useComponentVisible2 from "../../toggle-component/useComponentVisible2"
import AnasayfaContext from "../../context/AnasayfaContext"

function AnasayfaAddMoreTweet() {
  //context
  const { setHomePageOpacity } = useContext(AnasayfaContext)
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

  const { ref2, isComponentVisible2, setIsComponentVisible2 } =
    useComponentVisible2(false)
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

  // Yeni tweet eklemeye tıklanıldığı zaman
  const addMoreTweetClick = () => {}
  const closeTextBarClick = () => {
    setHomePageOpacity(true)
  }
  return (
    <div className="fixed top-[20%] left-[30%]">
      <div className="bg-white shadow-2xl w-[623px] h-auto rounded-3xl">
        <i
          onClick={closeTextBarClick}
          className="fa-solid fa-xmark mt-2 ml-4 cursor-pointer"
        ></i>
        <div className="grid grid-cols-8 w-auto border-gray-100 h-auto ">
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
                  <div className="card bg-white w-[320px] h-[284px] shadow-lg absolute -left-16">
                    <div className="pt-[16px] px-[16px]">
                      <h1 className="text-xl font-semibold">Hedef kitle seç</h1>
                      <p className="text-[15px] text-gray-500">
                        Choose who can reply to this Tweet. Anyone mentioned can
                        always reply.
                      </p>
                    </div>
                    <div className="grid grid-row-3">
                      <div className="cursor-pointer hover:bg-gray-100 py-4">
                        <i className="fa-solid fa-earth-americas inline text-left ml-5 text-xl"></i>
                        <p className="inline font-semibold text-md ml-6">
                          Herkese açık
                        </p>
                      </div>
                      <div className="cursor-pointer hover:bg-gray-100 py-4">
                        <i className="fa-solid fa-user-check inline text-left ml-5 text-xl"></i>
                        <p className="inline font-semibold text-md ml-6">
                          Takip ettiğin kişiler
                        </p>
                      </div>
                      <div className="cursor-pointer hover:bg-gray-100 py-4">
                        <i className="fa-solid fa-at inline text-left ml-5 text-xl"></i>
                        <p className="inline font-semibold text-md ml-6">
                          Yalnızca bahsettiğin kişiler
                        </p>
                      </div>
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
                    <i
                      onClick={addMoreTweetClick}
                      className="fa-solid fa-plus cursor-pointer ml-2 mr-3 rounded-3xl border pl-[5px] py-1 pr-[3px] border-gray-300 text-sky-400"
                    ></i>
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
      </div>
    </div>
  )
}

export default AnasayfaAddMoreTweet
