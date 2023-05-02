import { useState, useEffect } from "react"
import Navbar from "../components/navbar/Navbar"
import Anasayfa from "../components/navbar-pages/Anasayfa/Anasayfa"
import Keşfet from "../components/navbar-pages/Keşfet/Keşfet"
import AnasayfaAddMoreTweet from "../components/navbar-pages/Anasayfa/AnasayfaAddMoreTweet"
//navigate
import { useNavigate } from "react-router-dom"
//context
import AnasayfaContext from "../components/context/AnasayfaContext"
// firebase'den kullanıcı bilgilerini almak için getAuth'u import ediyorum
import { getAuth } from "firebase/auth"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import HomePageRightSide from "../components/home-page-right-side/HomePageRightSide"

function Profile() {
  const [navbarClick, setNavbarClick] = useState("home")
  // Eğer Ek tweet eklemek istenirse pencere(addMoreTweet bar) açıldığı zaman arka planın disabled olması için
  const [homePageOpacity, setHomePageOpacity] = useState(true)
  const [textValue, setTextValue] = useState("")
  const [name, setName] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [tweets, setTweets] = useState([])

  const navigate = useNavigate()
  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      setName(user.reloadUserInfo.displayName)

      const storage = getStorage()
      getDownloadURL(ref(storage, `images/${"profilePhoto" + user.uid}`))
        .then((url) => {
          setProfilePhoto(url)
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (!user) {
      navigate("/")
    }
  }, [navigate])

  return (
    <AnasayfaContext.Provider
      value={{
        homePageOpacity,
        setHomePageOpacity,
        textValue,
        setTextValue,
        setTweets,
        tweets,
        profilePhoto,
        name,
      }}
    >
      <div>
        <div
          className={`bg-white h-screen ${
            !homePageOpacity && "bg-white h-screen overflow-hidden"
          }`}
        >
          <div className="flex home-page">
            <Navbar
              setNavbarClick={setNavbarClick}
              name={name}
              profilePhoto={profilePhoto}
            />
            {/* <div className="flex-auto w-64">{[navbarClick]}</div> */}
            {navbarClick === "home" && (
              <Anasayfa profilePhoto={profilePhoto} name={name} />
            )}
            {navbarClick === "hashtag" && <Keşfet />}
            <HomePageRightSide />
          </div>
        </div>
        <div
          className={`${
            homePageOpacity
              ? "hidden"
              : "fixed top-0 left-0 z-50 h-full w-full backdrop"
          }`}
        >
          <AnasayfaAddMoreTweet name={name} profilePhoto={profilePhoto} />
        </div>
      </div>
    </AnasayfaContext.Provider>
  )
}

export default Profile
