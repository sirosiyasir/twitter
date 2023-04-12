import { useState } from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase.config"
// error vb kutucuklar oluşturmak için toastify'ı kullanıyorum
import { toast } from "react-toastify"
function FourthStep(props) {
  const [password, setPassword] = useState("")
  const [passwordCorrect, setPasswordCorrect] = useState(true)

  const passwordOnClick = () => {
    setPasswordCorrect((prevState) => {
      return !prevState
    })
  }
  const onChangeInput = (e) => {
    setPassword(e.target.value)
  }

  // Sign-up sayfalarının tamamından aldığım kullanıcı bilgilerini son kayıt aşamasında Firebase'e gönderiyorum
  const createUser = async () => {
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        props.userInformation.eMailOrPhone,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: props.userInformation.name,
      })

      const userInformationCopy = {
        ...props.userInformation,
        password,
      }
      delete userInformationCopy.password
      userInformationCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, "users", user.uid), userInformationCopy)

      props.setFourthStep(false)
      props.setFifthStep(true)
    } catch (error) {
      toast.error("Something went wrong with registration")
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative sign-up-card">
        <h2 className="text-black absolute left-4 top-2 font-semibold text-xl">
          Adım 4/4
        </h2>
        <div className="mx-auto mt-1 mb-0 pb-0 text-center">
          <h1 className="text-black text-left mx-auto mt-16 text-3xl font-bold w-[29.5rem] sign-up-divs">
            Bir şifre girmen gerek
          </h1>
          <p className="text-gray-500 text-left mb-8 mt-1">
            8 veya daha fazla karakter olmasına dikkat et.
          </p>
          <div className="relative">
            <input
              onChange={onChangeInput}
              value={password}
              type={passwordCorrect ? "password" : "text"}
              id="name"
              className="bg-white text-black border border-gray-300 w-[29rem] sign-up-divs first-step-inputs h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400"
              placeholder="Şifre"
              min="8"
            />
            <i
              onClick={passwordOnClick}
              className="fa-regular fa-eye absolute right-5 top-7 cursor-pointer fourth-step-password-eye"
            ></i>
          </div>
          <button
            className="bg-black w-[28rem] sign-up-divs mt-80 h-12 rounded-3xl mx-auto mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500"
            onClick={() => {
              createUser()
            }}
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  )
}

export default FourthStep
