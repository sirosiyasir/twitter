import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignIn() {
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const emailChange = (e) => {
    console.log(e.target.value)
  }
  const inputFormOnSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative">
        <div className="m-2 text-center">
          <i className="fa-solid fa-xmark absolute left-4"></i>
          <i className="fa-brands fa-twitter text-blue-400 text-4xl"></i>
        </div>
        <h1 className="text-center mt-8 mb-4 pr-10 text-3xl font-bold">
          Twitter'a Giriş Yap
        </h1>
        <div className="border-gray-300 border w-[19rem] rounded-3xl mx-auto mt-5 mb-4 px-4 py-2  cursor-pointer">
          <p className="text-center">
            <i className="fa-brands fa-google pr-2"></i>
            <span className="text-gray-500">Google ile oturum açın</span>
          </p>
        </div>
        <div className="border-gray-300 border w-[19rem] rounded-3xl mx-auto my-2 px-4 py-2 cursor-pointer ">
          <p className="text-center font-bold">
            <i className="fa-brands fa-apple pr-2 "></i>Apple ile giriş yap
          </p>
        </div>
        <div className="relative">
          <div className="w-32 bg-gray-300 h-px absolute left-36 top-3"></div>
          <p className="text-center">veya</p>
          <div className="w-32 bg-gray-300 h-px absolute right-36 top-3"></div>
        </div>
        <form
          onSubmit={inputFormOnSubmit}
          className="mx-auto mt-2 mb-1 text-center"
        >
          <input
            value={email}
            onChange={emailChange}
            type="email"
            className="border border-gray-300 w-[19rem] h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block"
            placeholder="Telefon numarası, e-posta veya kullanıcı adı"
          />
          <button className="bg-black w-[19rem] rounded-3xl mx-auto my-6 px-4 py-2 text-white font-bold">
            İleri
          </button>
        </form>
        <button className="border border-gray-300 w-[19rem] rounded-3xl mx-auto mb-3 px-4 py-2 font-bold">
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

export default SignIn
