// useState kullanarak hem toggle yapabiliyorum hem koşullu durumlar yaratabiliyorum hem de jsx'ten aldığım bilgileri function içerisinde kullanabiliyorum
import React, { useState } from "react"
// useNavigate kullanarak, bir event sayesinde bir sayfadan başka bir sayfaya geçişi sağlayabiliyorum
import { useNavigate } from "react-router-dom"
// sign-up için gerekli sayfaları import ediyorum
import FirstStep from "../components/sign-up-step/FirstStep"
import SecondStep from "../components/sign-up-step/SecondStep"
import ThirdStep from "../components/sign-up-step/ThirdStep"
import FourthStep from "../components/sign-up-step/FourthStep"
import FifthStep from "../components/sign-up-step/FifthStep"
import SixthStep from "../components/sign-up-step/SixthStep"
import XMark from "../components/XMark"
import Oauth from "../components/Oauth"

function SignUp() {
  const [signUp, setSignUp] = useState(false)
  const [firstStep, setFirstStep] = useState(false)
  const [secondStep, setSecondStep] = useState(false)
  const [thirdStep, setThirdStep] = useState(false)
  const [fourthStep, setFourthStep] = useState(false)
  const [fifthStep, setFifthStep] = useState(false)
  const [sixthStep, setSixthStep] = useState(false)
  const [userInformation, setUserInformation] = useState()
  const [userPhoto, setUserPhoto] = useState()
  const navigate = useNavigate()

  const createAccount = () => {
    setFirstStep(true)
    setSignUp(true)
  }

  const xMarkOnClick = () => {
    navigate("/")
  }

  if (!signUp) {
    return (
      <div className="bg-gray-300 grid h-screen place-items-center">
        <div className="card bg-white w-[37rem] h-[38rem] relative">
          <div className="m-2 text-center">
            <XMark onClick={xMarkOnClick} />
            <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
          </div>
          <h1 className="text-black text-left mx-auto mt-8 mb-4 pr-10 text-3xl font-bold w-72">
            Bugün Twitter'a katıl
          </h1>
          <Oauth />
          <div className="border-gray-400 border w-[19rem] rounded-3xl mx-auto my-2 px-4 py-2 cursor-pointer ">
            <p className="text-black text-center font-bold">
              <i className="fa-brands fa-apple pr-2 "></i>Apple ile kaydol
            </p>
          </div>
          <div className="relative">
            <div className="w-32 bg-gray-300 h-px absolute left-36 top-3"></div>
            <p className="text-center text-black">veya</p>
            <div className="w-32 bg-gray-300 h-px absolute right-36 top-3"></div>
          </div>
          <button
            onClick={createAccount}
            className="bg-black w-[19rem] rounded-3xl mx-auto my-4 px-4 py-2 text-white font-bold"
          >
            Hesap oluştur
          </button>
          <p className="text-gray-500 text-left mx-auto w-[19rem] text-xs mb-3">
            By signing up, you agree to the{" "}
            <a
              href="https://twitter.com/en/tos"
              target="blank"
              className="text-sky-500 hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/en/privacy"
              target="blank"
              className="text-sky-500 hover:underline"
            >
              Privacy Policy
            </a>
            , including{" "}
            <a
              href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
              target="blank"
              className="text-sky-500 hover:underline"
            >
              Cookie Use.
            </a>
          </p>
          <p className="text-gray-500 text-center mt-7 pr-10">
            Zaten bir hesabın var mı?{" "}
            <span
              className="text-sky-500 hover:underline cursor-pointer"
              onClick={() => {
                navigate("/")
              }}
            >
              Giriş yap
            </span>
          </p>
        </div>
      </div>
    )
  }
  if (firstStep) {
    return (
      <FirstStep
        setFirstStep={setFirstStep}
        setSecondStep={setSecondStep}
        setUserInformation={setUserInformation}
        userInformation={userInformation}
      />
    )
  }
  if (secondStep) {
    return (
      <SecondStep
        setFirstStep={setFirstStep}
        setSecondStep={setSecondStep}
        setThirdStep={setThirdStep}
      />
    )
  }
  if (thirdStep) {
    return (
      <ThirdStep
        setFirstStep={setFirstStep}
        setSecondStep={setSecondStep}
        setThirdStep={setThirdStep}
        setFourthStep={setFourthStep}
        userInformation={userInformation}
      />
    )
  }
  if (fourthStep) {
    return (
      <FourthStep
        setFirstStep={setFirstStep}
        setFourthStep={setFourthStep}
        setFifthStep={setFifthStep}
        userInformation={userInformation}
      />
    )
  }
  if (fifthStep) {
    return (
      <FifthStep
        setFifthStep={setFifthStep}
        setSixthStep={setSixthStep}
        setUserPhoto={setUserPhoto}
      />
    )
  }
  if (sixthStep) {
    return <SixthStep userInformation={userInformation} userPhoto={userPhoto} />
  }
}

export default SignUp
