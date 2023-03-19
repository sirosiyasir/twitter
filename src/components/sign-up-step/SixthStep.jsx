// useNavigate kullanarak, bir event sayesinde bir sayfadan başka bir sayfaya geçişi sağlayabiliyorum
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SixthStep() {
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()
  const onChangeInput = (e) => {
    setUserName(e.target.value)
  }
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative">
        <div className="m-2 text-center">
          <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
        </div>
        <div className="mx-auto mt-1 mb-0 pb-0 text-center">
          <h1 className="text-black text-left mx-auto mt-16 text-3xl font-bold w-[29.5rem]">
            Kullanıcı adın ne olsun?
          </h1>
          <p className="text-gray-500 text-left mb-8 mt-1">
            kullanıcı_adın eşsizdir. Daha sonra burada her zaman
            değiştirebilirsin.
          </p>
          <div className="relative">
            <p
              className="absolute top-3 left-1 text-lg font-semibold"
              autofocus
            >
              @
            </p>
            <input
              onChange={onChangeInput}
              value={userName}
              type="text"
              className="bg-white text-black border border-gray-300 w-[29rem] h-14 pl-5 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400"
              min="8"
            />
            <i className="fa-solid fa-circle-check absolute right-8 top-6 cursor-pointer"></i>
          </div>
          <button
            className="bg-white w-[28rem] mt-32 h-12 rounded-3xl mx-auto mb-0 px-4 py-2 border border-gray-300 text-black font-bold block hover:bg-gray-300"
            onClick={() => {
              navigate("/")
            }}
          >
            Şimdilik atla
          </button>
        </div>
      </div>
    </div>
  )
}

export default SixthStep
