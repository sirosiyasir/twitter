import { useState } from "react"
import XMark from "../components/XMark"
import { useNavigate } from "react-router-dom"
import FirstStep from "../components/forgot-password-step/FirstStep"

function ForgotPassword() {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [firstStep, setFirstStep] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const navigate = useNavigate()
  const xMarkOnCLick = () => {
    navigate("/")
  }
  const eMailOnChange = (e) => {
    setUserEmail(e.target.value)
    if (e.target.value !== "") {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }
  }
  if (!firstStep) {
    return (
      <div className="bg-gray-300 grid h-screen place-items-center">
        <div className="card bg-white w-[37rem] h-[38rem] relative px-20">
          <div className="m-2 text-center">
            <XMark onClick={xMarkOnCLick} />
            <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
          </div>
          <div className="">
            <h1 className="text-black text-left mt-8 pr-10 text-3xl font-bold">
              Twitter Hesabınızı bulun
            </h1>
            <p className="text-gray-500 text-left mb-8 mt-2">
              Şifrenizi değiştirmek için hesabınızla ilişkili e-posta, telefon
              numarası veya kullanıcı adını girin.
            </p>
            <div className="mt-2 mb-1 text-center">
              <input
                onChange={eMailOnChange}
                value={userEmail}
                type="email"
                className="bg-white text-black border border-gray-300 w-full mx-auto h-14 pl-3 rounded focus:outline-none focus:placeholder:text-blue-400 focus:border-blue-400 block"
                placeholder="Telefon numarası, e-posta veya kullanıcı adı"
              />
            </div>
            <div className="text-center mt-60">
              <button
                onClick={() => {
                  setFirstStep(true)
                }}
                disabled={!buttonDisabled}
                className="bg-black w-full rounded-3xl my-6 py-4 text-white font-bold disabled:bg-gray-500"
              >
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (firstStep) {
    return <FirstStep userEmail={userEmail} setUserEmail={setUserEmail} />
  }
}

export default ForgotPassword
