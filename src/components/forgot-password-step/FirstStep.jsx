import { useNavigate } from "react-router-dom"
import { useState } from "react"
import XMark from "../XMark"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { toast } from "react-toastify"

function FirstStep(props) {
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const navigate = useNavigate()
  const xMarkOnCLick = () => {
    navigate("/")
    props.setUserEmail(null)
  }
  const radioOnChecked = (e) => {
    if (e.target.checked) {
      setButtonDisabled(true)
    }
  }

  const sendEmail = async () => {
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, props.userEmail)
      toast.success("E-mail gönderildi")
      navigate("/")
    } catch (error) {
      toast.error("E-mail gönderilemedi")
      navigate("/")
    }
  }

  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative px-20">
        <div className="m-2 text-center">
          <XMark onClick={xMarkOnCLick} />
          <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
        </div>
        <div>
          <h1 className="text-black text-left mt-4 pr-10 text-3xl font-bold">
            Onay kodunu nereye göndermeliyiz?
          </h1>
          <p className="text-gray-500 text-left mt-3">
            Parolanızı değiştirebilmeniz için önce gerçekten siz olduğunuzdan
            emin olmamız gerekiyor.
          </p>
          <p className="text-gray-500 text-left mb-6 mt-3">
            Onay kodunun nereye gönderileceğini seçerek başlayın.
          </p>
          <div className="mb-1">
            <p className="inline text-left font-bold text-[15px]">
              {props.userEmail.slice(0, 2) +
                "*****" +
                props.userEmail.slice(-12)}{" "}
              adresine bir e-posta gönderin{" "}
            </p>
            <input
              onChange={radioOnChecked}
              className="inline ml-4"
              type="radio"
            />
            <p className="mt-6 font-semibold">
              Erişiminiz yoksa{" "}
              <a
                href="https://help.twitter.com/en/forms/account-access/regain-access"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                Twitter Destek
              </a>{" "}
              ile iletişime geçin .
            </p>
          </div>
          <div className="text-center mt-24">
            <button
              onClick={sendEmail}
              disabled={!buttonDisabled}
              className="bg-black w-full rounded-3xl my-5 py-4 text-white font-bold disabled:bg-gray-500"
            >
              Sonraki
            </button>
            <button
              onClick={xMarkOnCLick}
              className="bg-white w-full rounded-3xl  py-4 border text-black font-bold "
            >
              İptal et
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
