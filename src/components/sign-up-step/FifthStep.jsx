import { useState } from "react"
import profilePicture from "../../images/profile-picture.png"
function FifthStep(props) {
  const [userProfilePicture, setUserProfilePicture] = useState("")

  const loadFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUserProfilePicture(URL.createObjectURL(e.target.files[0]))
      props.setUserPhoto(e.target.files[0])
    }
  }
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative sign-up-card">
        <div className="m-2 text-center">
          <i className="fa-brands fa-twitter text-blue-400 text-3xl"></i>
        </div>
        <div className="mx-auto mb-0 pb-0 text-center">
          <h1 className="text-black text-left mx-auto mt-5 text-3xl font-bold w-[29.5rem] sign-up-divs">
            Profil fotoğrafı seç
          </h1>
          <p className="text-gray-500 text-left mb-8 mt-1">
            Çok sevdiğin bir selfie'n var mı? Hemen yükle.
          </p>
          <div className="mt-20">
            <div className="relative inline-block">
              <img
                className="rounded-full m-auto w-[192px] h-[192px]"
                src={
                  userProfilePicture === ""
                    ? profilePicture
                    : userProfilePicture
                }
                alt=""
              />
              <input
                onChange={loadFile}
                type="file"
                active="image/*"
                className="hidden"
                name="image"
                id="file"
              />
              <label htmlFor="file" className="absolute top-[70px] left-[70px]">
                <div className=" bg-slate-800 rounded-full  hover:bg-gray-600">
                  <i className="fa-regular fa-image text-3xl font-bold text-white py-2 px-3 cursor-pointer"></i>
                </div>
              </label>
            </div>
          </div>
          <button
            className="bg-white w-[28rem] sign-up-divs mt-32 h-12 rounded-3xl mx-auto mb-0 px-4 py-2 border border-gray-300 text-black font-bold block hover:bg-gray-300"
            onClick={() => {
              props.setFifthStep(false)
              props.setSixthStep(true)
            }}
          >
            {userProfilePicture === "" ? "Şimdilik geç" : "Devam et"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FifthStep
