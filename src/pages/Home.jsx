// navbar
import { useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Anasayfa from "../components/navbar-pages/Anasayfa/Anasayfa"
import Keşfet from "../components/navbar-pages/Keşfet"
function Profile() {
  const [navbarClick, setNavbarClick] = useState("home")
  return (
    <div className="bg-white h-screen">
      <div className="flex 2xl:px-80 md:px-40">
        <Navbar setNavbarClick={setNavbarClick} />
        {/* <div className="flex-auto w-64">{[navbarClick]}</div> */}
        {navbarClick === "home" && <Anasayfa />}
        {navbarClick === "hashtag" && <Keşfet />}
        <div className="flex-auto w-32 bg-gray-100 2xl:mx-14 md:mx-4">3</div>
      </div>
    </div>
  )
}

export default Profile
