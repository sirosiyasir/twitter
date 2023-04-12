import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import XMark from "../components/XMark"
import FirstStep from "../components/sign-in-step/FirstStep"
import Oauth from "../components/Oauth"

function SignIn() {
  const [email, setEmail] = useState("")
  const [signIn, setSignIn] = useState(true)
  const [firstStep, setFirstStep] = useState(false)
  const navigate = useNavigate()

  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (email.length > 10) {
      setSignIn(false)
      setFirstStep(true)
    } else {
      toast.error("Lütfen geçerli bir e-mail giriniz")
    }
  }
  if (signIn) {
    return (
      <div className="bg-gray-300 grid h-screen place-items-center">
        <div className="card bg-white w-[37rem] h-[38rem] relative sign-in-card">
          <div className="m-2 text-center">
            <XMark />
            <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
          </div>
          <h1 className="text-black text-center mt-8 mb-4 pr-10 text-3xl font-bold">
            Twitter'a Giriş Yap
          </h1>
          <Oauth />
          <div className="border-gray-400 border w-[19rem] rounded-3xl mx-auto my-2 px-4 py-2 cursor-pointer ">
            <p className="text-black text-center font-bold">
              <i className="fa-brands fa-apple pr-2 "></i>Apple ile giriş yap
            </p>
          </div>
          <div className="relative">
            <div className="w-32 bg-gray-300 h-px absolute left-36 top-3"></div>
            <p className="text-black text-center">veya</p>
            <div className="w-32 bg-gray-300 h-px absolute right-36 top-3"></div>
          </div>
          <form onSubmit={onSubmit} className="mx-auto mt-2 mb-1 text-center">
            <input
              value={email}
              onChange={emailChange}
              type="email"
              className="bg-white text-black border border-gray-300 w-[19rem] h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block"
              placeholder="Telefon numarası, e-posta veya kullanıcı adı"
            />
            <button className="bg-black w-[19rem] rounded-3xl mx-auto my-6 px-4 py-2 text-white font-bold">
              İleri
            </button>
          </form>
          <button
            onClick={() => {
              navigate("/forgot-password")
            }}
            className="text-black border border-gray-300 w-[19rem] rounded-3xl mx-auto mb-3 px-4 py-2 font-bold"
          >
            Şifreni mi unuttun ?
          </button>
          <p className="text-gray-500 text-center mt-7 pr-10">
            Henüz bir hesabın yok mu?{" "}
            <span
              className="text-sky-500 hover:underline cursor-pointer"
              onClick={() => {
                navigate("/sign-up")
              }}
            >
              Kaydol
            </span>
          </p>
        </div>
      </div>
    )
  }
  if (firstStep) {
    return (
      <FirstStep
        setSignIn={setSignIn}
        setFirstStep={setFirstStep}
        email={email}
      />
    )
  }
}

export default SignIn
