import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar/Navbar"
import Anasayfa from "../components/navbar-pages/Anasayfa/Anasayfa"
import Keşfet from "../components/navbar-pages/Keşfet/Keşfet"
import AnasayfaAddMoreTweet from "../components/navbar-pages/Anasayfa/AnasayfaAddMoreTweet"
//navigate
import { useNavigate } from "react-router-dom"
//context
import AnasayfaContext from "../components/context/AnasayfaContext"
//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import HomePageRightSide from "../components/home-page-right-side/HomePageRightSide"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"

function Profile() {
  const [navbarClick, setNavbarClick] = useState("home")
  // Eğer Ek tweet eklemek istenirse pencere(addMoreTweet bar) açıldığı zaman arka planın disabled olması için
  const [homePageOpacity, setHomePageOpacity] = useState(true)
  const [textValue, setTextValue] = useState("")
  const [name, setName] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")
  const [tweets, setTweets] = useState()
  const [textValueLength, setTextValueLength] = useState()

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

  const [userProfilePhoto, setUserProfilePhoto] = useState("")
  const [formData, setFormData] = useState({
    share: 0,
    retweet: 0,
    nickname: "sirosiyasir",
    like: 15,
    interaction: 0,
    comment: 10,
  })

  const auth = getAuth()
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const storage = getStorage()
          getDownloadURL(ref(storage, `images/${"profilePhoto" + user.uid}`))
            .then((url) => {
              setUserProfilePhoto(url)
            })
            .catch((error) => {
              console.log(error)
            })
          setFormData({
            ...formData,
            userRef: user.uid,
            name: user.reloadUserInfo.displayName,
          })
        } else {
          navigate("/")
        }
      })
    }
    return () => {
      isMounted.current = false
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const shareTweet = async () => {
    setTextValueLength("")

    //Firebase Cloud Store'a gerekli bilgileri ekliyorum
    const formDataCopy = {
      ...formData,
      profilePhoto: userProfilePhoto,
      userTweet: tweets.slice(0, 280),
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, "listings"), formDataCopy)
    // kullanıcı tweet'ini paylaştıktan sonra tweet area'dan yazdığı tweet'i siliyorum
    setTweets("")
  }

  return (
    <AnasayfaContext.Provider
      value={{
        homePageOpacity,
        setHomePageOpacity,
        textValue,
        setTextValue,
        setTweets,
        setTextValueLength,
        textValueLength,
        tweets,
        profilePhoto,
        name,
        shareTweet,
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
              <Anasayfa
                profilePhoto={profilePhoto}
                name={name}
                shareTweet={shareTweet}
              />
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
