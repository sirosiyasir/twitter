import { useState, useContext } from "react"
/* aynı jsx'te iki div'de aynı anda kullanılamadığından bir tane daha useComponentVisible oluşturdum(alternatif: burada 
  kullanılan 2. div ayrı bir .jsx olarak oluşturulup o .jsx'te useComponent'ı kullanabilir ve buraya da .jsx'i import ederdik) */
import useComponentVisible from "../../toggle-component/useComponentVisible"
import useComponentVisible2 from "../../toggle-component/useComponentVisible2"
// Context
import AnasayfaContext from "../../context/AnasayfaContext"
// Tweet Area'daki alt kısım
import ProgressBarArea from "./templates/ProgressBarArea"

function AnasayfaAddMoreTweet(props) {
  //context
  const { setHomePageOpacity, textValue, setTextValue } =
    useContext(AnasayfaContext)
  // Tweet yazma bölgesine tıklandığında gerekli bazı yerlerin ortaya çıkması için openTextArea
  const [openTextArea, setOpenTextArea] = useState(false)
  // Textarea'ya yazılan değeri yakalayıp progress bar'da kullanmak için textValue
  const [tweetTextValue, setTweetTextValue] = useState("")
  // Textarea'ya yazılan değeri yakalamak için
  const [tweetValue, setTweetValue] = useState("")
  // 280 kelimelik sınırın aşıldığını belirtmek için overText
  const [overText, setOverText] = useState("")
  // Progress Bar'ın text area'daki durumunu değiştirebilmek için
  const [progressBar, setProgressBar] = useState(true)
  // Progress Bar ve onunla birlikte açılacak olanların text area'daki value'ye göre belirlenmesi için
  const [textAreaValue, setTextAreaValue] = useState(false)
  // Yeni tweet'teki x mark'a tıklanıldığı zaman
  const [closeAddNewTweet, setCloseAddNewTweet] = useState(true)
  // İlk Tweet için 280 kelimelik sınırın aşıldığını belirtmek için overText
  const [prevOverText, setPrevOverText] = useState("")
  // İlk Tweet için Progress Bar'ın text area'daki durumunu değiştirebilmek için
  const [prevProgressBar, setPrevProgressBar] = useState(true)
  // ilk tweet opacity ayarı,
  const [tweetOpacity, setTweetOpacity] = useState(true)
  // ilk tweet'in value'si var mı
  const [textAreaValueCheck, setTextAreaValueCheck] = useState(true)
  // İlk tweet için progress bar deg ayarı
  const [textValueLength, setTextValueLength] = useState("")

  // açılır kapanır toggle
  const { reference, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const { ref2, isComponentVisible2, setIsComponentVisible2 } =
    useComponentVisible2(false)
  const everyoneCommentClick = () => {
    setIsComponentVisible2(true)
  }

  //Text area'ya tıklandığı zaman o bölgedeki bazı etkileşimleri hidden'dan görünür hale geçirmek için
  const textAreaOnClick = () => {
    setOpenTextArea(true)
  }
  // İkinci eklenen Text area'ya girilen değerler için progress bar'ı etkinleştirmek ve button'ı disabled'dan çekmek vb için
  const textAreaChange = (e) => {
    setTweetValue(e.target.value)
    if (e.target.value !== "") {
      setTextAreaValue(true)
    } else if (e.target.value === "") {
      setTextAreaValue(false)
    }
    if (e.target.value.length <= 280) {
      setTweetTextValue(`${e.target.value.length * 1.28}deg`)
      setProgressBar(true)
      setOverText("")
    } else if (e.target.value.length > 280) {
      setTweetTextValue(e.target.value.length)
      setOverText("border-red-500 bg-white")
      setProgressBar(false)
    }
  }

  // yeni tweet eklemeyi kaldırmak için
  const closeNewTweet = () => {
    setCloseAddNewTweet(false)
  }

  // Yeni tweet eklemeye tıklanıldığı zaman
  const addMoreTweetClick = () => {
    setCloseAddNewTweet(true)
  }

  // ekstra olarak açılan yeni tweetbarı kapatmak için
  const closeTextBarClick = () => {
    setHomePageOpacity(true)
    setTweetValue("")
  }

  // yazılan eski tweet'e tıklanıldığında o alanın aktif edilmesi için
  const lastTweetClick = () => {
    setTweetOpacity(false)
  }
  // yazılan yeni tweet'e tıklanıldığı zaman o alanın aktif edilmesi için
  const newTweetClick = () => {
    setTweetOpacity(true)
  }
  // ilk tweet textarea onChange'i
  const textAreaOnChange = (e) => {
    if (e.target.value !== "") {
      setTextValue(e.target.value)
      setTextAreaValueCheck(true)
    } else if (e.target.value === "") {
      setTextAreaValueCheck(false)
    }
    if (e.target.value.length <= 280) {
      setTextValueLength(`${e.target.value.length * 1.28}deg`)
      setPrevProgressBar(true)
      setPrevOverText("")
    } else if (e.target.value.length > 280) {
      setTextValueLength(e.target.value.length)
      setPrevOverText("border-red-500 bg-white")
      setPrevProgressBar(false)
    }
  }
  // herkese açık seçeneği'de div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
  const everyoneClick = () => {
    setIsComponentVisible(true)
  }
  return (
    <div className="position">
      <div className="bg-white shadow-2xl w-[600px] h-auto rounded-3xl">
        <i
          onClick={closeTextBarClick}
          className="fa-solid fa-xmark mt-2 ml-4 cursor-pointer"
        ></i>

        <div
          onClick={lastTweetClick}
          className={`grid grid-cols-8 ${
            tweetOpacity ? "opacity-60" : "opacity-100"
          }`}
        >
          <img
            className="rounded-full m-3 w-12 h-12"
            src={
              props.profilePhoto !== ""
                ? props.profilePhoto
                : "https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
            }
            width="40px"
            height="40px"
            alt=""
          />
          <div className="col-span-7">
            <div className={tweetOpacity ? "hidden" : "relative z-50"}>
              <p
                onClick={everyoneClick}
                ref={reference}
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
                    <div className="cursor-pointer hover:bg-gray-100 py-4">
                      <i className="fa-solid fa-earth-americas inline text-left ml-5 text-xl"></i>
                      <p className="inline font-semibold text-lg ml-6">
                        Herkese açık
                      </p>
                    </div>

                    <div className="mt-1 relative cursor-pointer hover:bg-gray-100">
                      <i className="fa-solid fa-user-check absolute top-3 left-5 text-xl"></i>
                      <div className="inline-block">
                        <p className=" font-semibold text-lg ml-[66px]">
                          Twitter Çevresi
                        </p>
                        <p className="ml-[66px]">
                          <span className="font-semibold">0</span> People
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
              className={`block w-full resize-none outline-none ${
                !tweetOpacity && "pb-5"
              } mt-5 placeholder:text-xl col-span-7`}
              placeholder="Neler oluyor?"
              value={textValue}
              onChange={textAreaOnChange}
            ></textarea>
            <div className={tweetOpacity ? "hidden" : "block"}>
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
            {!tweetOpacity && (
              <ProgressBarArea
                progressBar={prevProgressBar}
                textValueLength={textValueLength}
                textAreaValueCheck={textAreaValueCheck}
                overText={prevOverText}
                addMoreTweetClick={addMoreTweetClick}
              />
            )}
          </div>
        </div>
        {!tweetOpacity & closeAddNewTweet ? (
          <div className="h-[160px] w-[2px] bg-gray-300 absolute top-[90px] left-[35px]"></div>
        ) : null}
        <div
          onClick={newTweetClick}
          className={`grid grid-cols-8 w-auto border-gray-100 h-auto ${
            closeAddNewTweet ? "block" : "hidden"
          } ${tweetOpacity ? "opacity-100" : "opacity-60"}`}
        >
          <div>
            <img
              className="rounded-full m-3 w-12 h-12"
              src={
                props.profilePhoto !== ""
                  ? props.profilePhoto
                  : "https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
              }
              alt=""
            />
          </div>

          <div className="col-span-7 mt-2">
            {tweetOpacity && (
              <i
                onClick={closeNewTweet}
                className={`fa-solid fa-xmark cursor-pointer absolute right-[60px] text-sky-400 text-sm ${
                  tweetValue !== "" ? "hidden" : "block"
                }`}
              ></i>
            )}
            <textarea
              onChange={textAreaChange}
              onClick={textAreaOnClick}
              value={tweetValue}
              className="block w-full resize-none outline-none mt-5 placeholder:text-xl"
              placeholder="Bir tweet daha ekle"
            ></textarea>
            <div className={`${tweetOpacity ? "block" : "hidden"}`}>
              <div
                onClick={everyoneCommentClick}
                className={openTextArea ? "block mt-3" : "hidden"}
                ref={ref2}
              >
                {isComponentVisible2 && (
                  <div className="relative">
                    <div className="card bg-white w-[320px] h-[284px] shadow-lg absolute -left-16">
                      <div className="pt-[16px] px-[16px]">
                        <h1 className="text-xl font-semibold">
                          Hedef kitle seç
                        </h1>
                        <p className="text-[15px] text-gray-500">
                          Choose who can reply to this Tweet. Anyone mentioned
                          can always reply.
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
                            background: `conic-gradient(rgba(84, 157, 206, 0.867) ${tweetTextValue}, #ededed 0deg)`,
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
                    {!progressBar && tweetTextValue - 280}
                  </div>
                  <div className="inline ml-[32px]">
                    <div className={textAreaValue ? "inline" : "hidden"}>
                      <div className="border mx-2 border-gray-200 inline"></div>
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
    </div>
  )
}

export default AnasayfaAddMoreTweet
