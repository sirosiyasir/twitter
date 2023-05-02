// Home.jsx'te kurduğum context sayesinde anasayfayı ilgilendiren tüm jsx'lere ulaşabiliyorum
import { useContext, useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AnasayfaContext from "../../../context/AnasayfaContext"

//firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { db } from "../../../../firebase.config"
import { getStorage, ref, getDownloadURL } from "firebase/storage"

function ProgressBarArea({
  setTweet,
  tweet,
  textAreaValueCheck,
  progressBar,
  textValueLength,
  overText,
  addMoreTweetClick,
  setTextValueLength,
}) {
  const { setTweets } = useContext(AnasayfaContext)
  const [profilePhoto, setProfilePhoto] = useState("")
  const [formData, setFormData] = useState({
    share: 0,
    retweet: 0,
    nickname: "sirosiyasir",
    like: 15,
    interaction: 0,
    comment: 10,
  })

  const auth = getAuth()
  const navigate = useNavigate()
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const storage = getStorage()
          getDownloadURL(ref(storage, `images/${"profilePhoto" + user.uid}`))
            .then((url) => {
              setProfilePhoto(url)
            })
            .catch((error) => {
              console.log(error)
            })
          setFormData({
            ...formData,
            userRef: user.uid,
            name: user.reloadUserInfo.displayName,
          })
        } else {
          navigate("/")
        }
      })
    }
    return () => {
      isMounted.current = false
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const shareTweet = async () => {
    // Tweet'leri array'e kaydediyor ve daha sonra .map yöntemiyle her birine kolayca bir jsx oluşturuyorum(CreateTweet.js)
    setTweets((prevState) => {
      return [...prevState, tweet.slice(0, 280)]
    })
    // kullanıcı tweet'ini paylaştıktan sonra tweet area'dan yazdığı tweet'i siliyorum
    setTweet("")
    setTextValueLength("")

    //Firebase Cloud Store'a gerekli bilgileri ekliyorum
    const formDataCopy = {
      ...formData,
      profilePhoto: profilePhoto,
      userTweet: tweet.slice(0, 280),
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, "listings"), formDataCopy)
  }

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
