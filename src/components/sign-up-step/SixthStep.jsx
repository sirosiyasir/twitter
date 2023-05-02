// Redux için gerekli function'ları import ediyorum
import { useSelector } from "react-redux"
// useNavigate kullanarak, bir event sayesinde bir sayfadan başka bir sayfaya geçişi sağlayabiliyorum
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ref, uploadBytes, getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
// error vb kutucuklar oluşturmak için toastify'ı kullanıyorum
import { toast } from "react-toastify"

function SixthStep(props) {
  const [autoNames, setAutoNames] = useState({
    firstName: "",
    secondName: "",
  })
  const [userName, setUserName] = useState("")
  const [realName, setRealName] = useState("")
  const [inputFocus, setInputFocus] = useState(false)
  const navigate = useNavigate()
  const { userInformations } = useSelector((state) => state.userInformations)

  const onChangeInput = (e) => {
    setUserName(e.target.value)
  }
  useEffect(() => {
    setAutoNames(() => {
      return {
        firstName: Math.floor(Math.random() * 1500),
        secondName: Math.floor(Math.random() * 1000),
      }
    })
    setRealName(userInformations.name)
  }, [userInformations.name])

  const uploadUserPhoto = () => {
    const auth = getAuth()
    const user = auth.currentUser

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      if (props.userPhoto !== undefined || "" || null) {
        const storage = getStorage()
        const imageRef = ref(storage, `images/${"profilePhoto" + user.uid}`)
        uploadBytes(imageRef, props.userPhoto)
        navigate("/")
        toast.success("Kayıt işlemi başarıyla gerçekleştirildi")
      } else {
        toast.error("Kayıt işlemiyle ilgili bir problem gerçekleşti")
      }
    }
  }

  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative sign-up-card">
        <div className="m-2 text-center">
          <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
        </div>
        <div className="mx-auto mt-3 mb-0 pb-0 text-center">
          <h1 className="text-black text-left text-3xl font-bold w-[29.5rem] sign-up-divs">
            Kullanıcı adın ne olsun?
          </h1>
          <p className="text-gray-500 text-left mb-8 mt-2">
            kullanıcı_adın eşsizdir. Daha sonra burada her zaman
            değiştirebilirsin.
          </p>
          <div className="relative w-[29rem] sign-up-divs">
            <p
              className={`absolute top-2 left-2 text-sm font-semibold ${
                inputFocus ? "text-sky-400" : null
              }`}
            >
              Kullanıcı adı
            </p>
            <p
              className={`absolute top-6 left-[6px] text-md font-semibold ${
                inputFocus ? "text-sky-400" : null
              }`}
            >
              @
            </p>
            <input
              onChange={onChangeInput}
              onFocus={() => {
                setInputFocus(true)
              }}
              maxLength="20"
              value={userName}
              autoFocus
              type="text"
              className={`"bg-white text-black border border-gray-300 w-full sixth-step-input sign-up-divs first-step-inputs h-14 pt-[18px] pl-6 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400 focus:${() => {
                setInputFocus(true)
              }}"`}
              min="8"
            />
            <i
              className={`fa-solid fa-circle-check absolute right-8 top-6 cursor-pointer sixth-step-verified ${
                userName.length >= 4 ? "text-green-700" : null
              }`}
            ></i>
            <div className="flex gap-1 text-left text-sm text-sky-400 mt-5">
              <p>@{realName.slice(0, 3) + autoNames.firstName},</p>
              <p>@{realName.slice(0, 3) + autoNames.secondName}</p>
            </div>

            <p className="text-left text-sky-400 mt-5 text-sm">
              Daha fazla göster
            </p>
          </div>
        </div>
        <button
          className="bg-white w-[28rem] p-2 mt-60 sign-up-divs h-12 rounded-3xl mx-auto border border-gray-300 text-black font-bold block hover:bg-gray-300"
          onClick={() => {
            uploadUserPhoto()
          }}
        >
          {userName.length < 4 ? "Şimdilik atla" : "Devam et"}
        </button>
      </div>
    </div>
  )
}

export default SixthStep
