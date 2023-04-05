import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// error vb kutucuklar oluşturmak için toastify'ı kullanıyorum
import { toast } from "react-toastify"
import XMark from "../XMark"
function FirstStep(props) {
  const navigate = useNavigate()
  const [passwordCorrect, setPasswordCorrect] = useState(true)
  const [password, setPassword] = useState("")

  const passwordOnClick = () => {
    setPasswordCorrect((prevState) => {
      return !prevState
    })
  }
  const xMarkOnCLick = () => {
    props.setFirstStep(false)
    props.setSignIn(true)
  }
  const onChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        props.email,
        password
      )
      if (userCredential.user) {
        navigate("/home")
      }
    } catch (error) {
      toast.error(
        "Giriş yaparken bir sorun oluştu. Lütfen bilgilerinizi kontrol ediniz"
      )
    }
  }
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative">
        <div className="m-2 text-center">
          <XMark onClick={xMarkOnCLick} />
          <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
        </div>
        <h1 className="text-black text-left mx-auto mt-6 pr-10 text-3xl font-bold w-[29.5rem]">
          Şifreni Gir
        </h1>
        <div className="mx-auto mt-2 mb-0 pb-0 text-center">
          <div className="bg-gray-50 border border-gray-100 w-[29rem] h-14 pl-2 pt-5 text-left my-7 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400 relative">
            <p className="text-gray-300">{props.email}</p>
            <p className="text-gray-300 text-xs absolute top-1">
              Kullanıcı adı
            </p>
          </div>
          <form onSubmit={onSubmit} className="relative">
            <input
              onChange={onChange}
              type={passwordCorrect ? "password" : "text"}
              className="bg-white text-black border border-gray-300 mt-6 w-[29rem] h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400"
              placeholder="Şifre"
            />
            <i
              onClick={passwordOnClick}
              className="fa-regular fa-eye absolute right-5 top-7 cursor-pointer"
            ></i>
            <p
              onClick={() => {
                navigate("/forgot-password")
              }}
              className="text-sky-500 hover:underline cursor-pointer text-left ml-1 my-1 text-xs"
            >
              Şifreni mi unuttun?
            </p>
            <button className="bg-black w-[28rem] mt-44 h-14 rounded-3xl mx-auto mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500">
              Giriş yap
            </button>
          </form>

          <p className="text-gray-400 text-left ml-1 mt-5 text-xs">
            Henüz bir hesabın yok mu?{" "}
            <span
              onClick={() => {
                navigate("/sign-up")
              }}
              className="text-sky-500 hover:underline cursor-pointer"
            >
              Kaydol
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
