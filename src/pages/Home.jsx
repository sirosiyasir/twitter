import { useState, useEffect, useRef } from "react"
// .jsx
import Navbar from "../components/navbar/Navbar"
import Anasayfa from "../components/navbar-pages/Anasayfa/Anasayfa"
import Keşfet from "../components/navbar-pages/Keşfet/Keşfet"
import AnasayfaAddMoreTweet from "../components/navbar-pages/Anasayfa/AnasayfaAddMoreTweet"
import HomePageRightSide from "../components/home-page-right-side/HomePageRightSide"
import LogOut from "../components/log-out/LogOut"
//navigate
import { useNavigate } from "react-router-dom"
//context
import AnasayfaContext from "../components/context/AnasayfaContext"
//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore"
import { db } from "../firebase.config"

function Profile() {
  const [navbarClick, setNavbarClick] = useState("home")
  // Eğer Ek tweet eklemek istenirse pencere(addMoreTweet bar) açıldığı zaman arka planın disabled olması için
  const [homePageOpacity, setHomePageOpacity] = useState(true)
  // Eğer log out yapılmak istenirse pencere(LogOut.jsx) açıldığı zaman arka planın disabled olması için
  const [homePageOpacityTwo, setHomePageOpacityTwo] = useState(true)
  // addMoreTweet'i toggle olarak ekranda göstermek için
  const [addMoreTweet, setAddMoreTweet] = useState(false)
  // logOut toggle olarak ekranda göstermek için
  const [logOut, setLogOut] = useState(false)
  // daha fazla tweet (mevcut tweet'e) eklenmek istediğinde tweeti kaydetmek için textValue state'i
  const [textValue, setTextValue] = useState("")
  // kullanının ad ve soyadını kaydetmek için name ve setName
  const [name, setName] = useState("")
  // kullanının kayıt olurken seçtiği fotoğrafı kaydetmek için profilePhoto state'i
  const [profilePhoto, setProfilePhoto] = useState("")
  // Tweetl'leri firebase'e göndermek ve tweet değerini kaydetmek için setTweets ve tweets
  const [tweets, setTweets] = useState()
  // yazılan tweet'in uzunluğunu kaydetmek (progressbar için) için setTextValueLength ve textValueLength
  const [textValueLength, setTextValueLength] = useState()
  // Yeni tweet'teki x mark'a tıklanıldığı zaman
  const [closeAddNewTweet, setCloseAddNewTweet] = useState(true)
  // ilk tweet opacity ayarı,
  const [tweetOpacity, setTweetOpacity] = useState(true)
  // kullanıcının ekranı kaydırmasını kaydediyorum
  const [scrollTop, setScrollTop] = useState(0)
  // kullanıcının seçtiği nickname
  const [nickName, setNickName] = useState(null)
  // kullanıcının default bilgilerini formData'ya kaydediyorum
  const [formData, setFormData] = useState({
    share: 0,
    retweet: 0,
    like: 15,
    interaction: 0,
    comment: 10,
  })
  const auth = getAuth()
  const isMounted = useRef(true)

  const navigate = useNavigate()

  // Firebase'den kullanıcı bilgilerini ve daha önce eklemiş olduğum kullanıcıya özel profil fotosunu alıyorum
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
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
          setFormData({
            ...formData,
            userRef: user.uid,
            name: user.reloadUserInfo.displayName,
          })

          if (user.uid) {
            const getNickNames = async () => {
              const querySnapshot = await getDocs(collection(db, "nicknames"))
              querySnapshot.forEach((doc) => {
                // Eğer aşağıdaki if statement'ını kullanmasaydım, collection'daki hangi nickname'in auth edilen hesapla eşleştiğini anlayamazdım
                if (
                  (doc.id, " => ", (doc.data().userRef === user.uid) === true)
                ) {
                  setNickName(doc.data().userName)
                }
              })
            }
            getNickNames()
          }
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

  // kullanıcı tweet paylaşmak istediğinde, tweet'e dair bilgileri firebase cloud firestore'a kaydediyorum
  const shareTweet = async () => {
    setTextValueLength("")

    //Firebase Cloud Store'a gerekli bilgileri ekliyorum
    const formDataCopy = {
      ...formData,
      nickname: nickName,
      profilePhoto: profilePhoto,
      userTweet: tweets.slice(0, 280),
      timestamp: serverTimestamp(),
    }

    await addDoc(collection(db, "listings"), formDataCopy)
    // kullanıcı tweet'ini paylaştıktan sonra tweet area'dan yazdığı tweet'i siliyorum
    setTweets("")
  }

  // homePageOpacity ayarı
  useEffect(() => {
    if (homePageOpacity) {
      setAddMoreTweet(true)
    } else {
      setAddMoreTweet(false)
    }
  }, [homePageOpacity])
  useEffect(() => {
    if (homePageOpacityTwo) {
      setLogOut(true)
    } else {
      setLogOut(false)
    }
  }, [homePageOpacityTwo])

  return (
    <AnasayfaContext.Provider
      value={{
        setHomePageOpacity,
        setHomePageOpacityTwo,
        textValue,
        setTextValue,
        setTweets,
        setTextValueLength,
        textValueLength,
        tweets,
        profilePhoto,
        name,
        shareTweet,
        nickName,
        closeAddNewTweet,
        setCloseAddNewTweet,
        tweetOpacity,
        setTweetOpacity,
        scrollTop,
      }}
    >
      <div
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        className="overflow-auto"
      >
        <div
          className={`bg-white h-screen ${
            !homePageOpacity && "bg-white h-screen overflow-hidden"
          }${!homePageOpacityTwo && "bg-white h-screen overflow-hidden"}`}
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
                nickName={nickName}
                shareTweet={shareTweet}
                scrollTop={scrollTop}
              />
            )}
            {navbarClick === "hashtag" && <Keşfet />}
            <HomePageRightSide />
          </div>
        </div>
        <div
          className={`${
            addMoreTweet
              ? "hidden"
              : "fixed top-0 left-0 z-50 h-full w-full backdrop"
          }`}
        >
          <AnasayfaAddMoreTweet name={name} profilePhoto={profilePhoto} />
        </div>
        <div
          className={`${
            logOut
              ? "hidden"
              : "fixed top-0 left-0 z-50 h-full w-full bg-gray-400"
          }`}
        >
          <LogOut setHomePageOpacityTwo={setHomePageOpacityTwo} />
        </div>
      </div>
    </AnasayfaContext.Provider>
  )
}

export default Profile
