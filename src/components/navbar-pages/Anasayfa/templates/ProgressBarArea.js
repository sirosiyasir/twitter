// Home.jsx'te kurduğum context sayesinde anasayfayı ilgilendiren tüm jsx'lere ulaşabiliyorum
import { useContext } from "react"
import AnasayfaContext from "../../../context/AnasayfaContext"

function ProgressBarArea({
  textAreaValueCheck,
  progressBar,
  textValueLength,
  overText,
  addMoreTweetClick,
}) {
  const { shareTweet } = useContext(AnasayfaContext)

  return (
    <div>
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
                    background: `conic-gradient(rgba(84, 157, 206, 0.867) ${textValueLength}, #ededed 0deg)`,
                  }
                : {
                    background: "transparent",
                  }
            }
            className={
              textAreaValueCheck
                ? `w-7 h-7 absolute top-[3px] rounded-3xl border text-center ${overText}`
                : "hidden"
            }
          >
            {!progressBar && textValueLength - 280}
          </div>
          <div className="inline ml-[32px]">
            <div className={textAreaValueCheck ? "inline" : "hidden"}>
              <div className="border mx-2 border-gray-200 inline"></div>
              <i
                onClick={addMoreTweetClick}
                className="fa-solid fa-plus cursor-pointer ml-2 mr-3 rounded-3xl border pl-[5px] py-1 pr-[3px] border-gray-300 text-sky-400"
              ></i>
            </div>
            <button
              onClick={shareTweet}
              disabled={!textAreaValueCheck}
              className="text-md bg-sky-500 text-white font-semibold rounded-3xl px-[14px] py-[6px] disabled:bg-sky-300"
            >
              Tweetle
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBarArea
