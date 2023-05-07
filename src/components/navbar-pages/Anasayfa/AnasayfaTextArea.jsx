import { useState, useContext } from "react"
// props kullanarak iletemediklerimi context yapısı kullanarak iletiyorum
import AnasayfaContext from "../../context/AnasayfaContext"
/* aynı jsx'te iki div'de aynı anda kullanılamadığından bir tane daha useComponentVisible oluşturdum(alternatif: burada 
  kullanılan 2. div ayrı bir .jsx olarak oluşturulup o .jsx'te useComponent'ı kullanabilir ve buraya da .jsx'i import ederdik) */
import useComponentVisible from "../../toggle-component/useComponentVisible"
import useComponentVisible2 from "../../toggle-component/useComponentVisible2"
// Tweet Area'nın alt kısmı
import ProgressBarArea from "./templates/ProgressBarArea"

function AnasayfaTextArea({ profilePhoto }) {
  // Tweetl'leri firebase'e göndermek ve tweet değerini kaydetmek için setTweets ve tweets
  // yazılan tweet'in uzunluğunu kaydetmek (progressbar için) için setTextValueLength ve textValueLength
  // addMoreTweet çalıştırıldığında sayfanın tamamı erişilemez(ekranda çıkan daha fazla tweet ekle card'ı hariç) ve soluk renkte olsun diye setHomePageOpacity
  const {
    setHomePageOpacity,
    setTweets,
    tweets,
    setTextValueLength,
    textValueLength,
  } = useContext(AnasayfaContext)
  // Tweet yazma bölgesine tıklandığında gerekli bazı yerlerin ortaya çıkması için openTextArea
  const [openTextArea, setOpenTextArea] = useState(false)
  const [overText, setOverText] = useState("")
  // Progress Bar'ın text area'daki durumunu değiştirebilmek için
  const [progressBar, setProgressBar] = useState(true)
  // Progress Bar ve onunla birlikte açılacak olanların text area'daki value'ye göre belirlenmesi için
  const [textAreaValueCheck, setTextAreaValueCheck] = useState(false)

  const { reference, isComponentVisible, setIsComponentVisible } =
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
    setTweets(e.target.value.slice(0, 280))
    if (e.target.value !== "") {
      setTextAreaValueCheck(true)
    } else if (e.target.value === "") {
      setTextAreaValueCheck(false)
    }
    if (e.target.value.length <= 280) {
      setTextValueLength(`${e.target.value.length * 1.28}deg`)
      setProgressBar(true)
      setOverText("")
    } else if (e.target.value.length > 280) {
      setTextValueLength(e.target.value.length)
      setOverText("border-red-500 bg-white")
      setProgressBar(false)
    }
  }
  // Yeni tweet eklemeye tıklanıldığı zaman
  const addMoreTweetClick = () => {
    setHomePageOpacity((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="grid grid-cols-8 w-auto border-y-[1px] border-gray-100 h-auto">
      <div>
        <img
          className="rounded-full m-3 w-12 h-12"
          src={
            profilePhoto !== ""
              ? profilePhoto
              : "https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
          }
          alt=""
        />
      </div>

      <div className="col-span-7 mt-2">
        <div className="relative">
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
          onChange={textAreaChange}
          onClick={textAreaOnClick}
          value={tweets}
          className="block w-full h-auto resize-none outline-none mt-5 placeholder:text-xl break-words"
          placeholder="Neler oluyor?"
        ></textarea>
        <div
          onClick={everyoneCommentClick}
          className={openTextArea ? "block mt-3" : "hidden"}
          ref={ref2}
        >
          {isComponentVisible2 && (
            <div className="relative z-50">
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

        <ProgressBarArea
          progressBar={progressBar}
          textValueLength={textValueLength}
          setTextValueLength={setTextValueLength}
          textAreaValueCheck={textAreaValueCheck}
          overText={overText}
          addMoreTweetClick={addMoreTweetClick}
        />
      </div>
    </div>
  )
}

export default AnasayfaTextArea
