import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Anasayfa from "../components/navbar-pages/Anasayfa/Anasayfa"
import Keşfet from "../components/navbar-pages/Keşfet"
import AnasayfaAddMoreTweet from "../components/navbar-pages/Anasayfa/AnasayfaAddMoreTweet"
//context
import AnasayfaContext from "../components/context/AnasayfaContext"

function Profile() {
  const [navbarClick, setNavbarClick] = useState("home")
  // Eğer Ek tweet eklemek istenirse pencere(addMoreTweet bar) açıldığı zaman arka planın desabled olması için
  const [homePageOpacity, setHomePageOpacity] = useState(true)
  const [textValue, setTextValue] = useState("")

  return (
    <AnasayfaContext.Provider
      value={{ homePageOpacity, setHomePageOpacity, textValue, setTextValue }}
    >
      <div>
        <div
          className={`bg-white h-screen ${
            !homePageOpacity && "bg-white h-screen overflow-hidden"
          }`}
        >
          <div className={`flex 2xl:px-80 md:px-40`}>
            <Navbar setNavbarClick={setNavbarClick} />
            {/* <div className="flex-auto w-64">{[navbarClick]}</div> */}
            {navbarClick === "home" && <Anasayfa />}
            {navbarClick === "hashtag" && <Keşfet />}
            <div className="flex-auto w-32 bg-gray-100 2xl:mx-14 md:mx-4">
              3
            </div>
          </div>
        </div>
        <div
          className={`${
            homePageOpacity
              ? "hidden"
              : "fixed top-0 left-0 z-50 h-full w-full backdrop"
          }`}
        >
          <AnasayfaAddMoreTweet textValue={textValue} />
        </div>
      </div>
    </AnasayfaContext.Provider>
  )
}

export default Profile
