import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
import useComponentVisible from "../toggle-component/useComponentVisible"
// firebase'den kullanıcı bilgilerini almak için getAuth'u import ediyorum
import { getAuth } from "firebase/auth"
function Navbar(props) {
  const [name, setName] = useState("")
  const [menuItems, setMenuItems] = useState({
    bell: false,
    envelope: false,
    hashtag: false,
    bookmark: false,
    clipboard: false,
    profile: false,
    home: true,
  })

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const navigate = useNavigate()

  const navbarOnCLick = (e) => {
    props.setNavbarClick(e.target.id)
    setMenuItems((prevState) => ({
      ...!prevState,
      [e.target.id]: prevState,
    }))
  }
  const menuMoreOnClick = () => {
    setIsComponentVisible(true)
  }
  // eğer kullanıcı sayfayı yenilerse tekrar sign-in yapabilmesi için onu "/"a yönlendiriyorum. Bunu yapmamın başlıca
  // sebebi, kullanıcıyla ilgili bilgileri firebase'den alıp yansıtmam.
  useEffect(() => {
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
      setName(user.reloadUserInfo.displayName)
    } else if (!user) {
      navigate("/")
    }
  }, [navigate])
  return (
    <div className="fixed flex-1 pt-4 h-screen">
      <div className="text-black">
        <i className="fa-brands fa-twitter text-blue-500 text-2xl ml-2 inline-block cursor-pointer"></i>

        <button
          onClick={navbarOnCLick}
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-36 h-12 mt-4 relative"
        >
          <i className="fa-solid fa-house text-2xl cursor-pointer absolute top-2 left-3"></i>
          <span
            id="home"
            className={
              menuItems.home
                ? "absolute top-[10px] right-[18px] text-lg font-semibold"
                : "absolute top-[10px] right-[18px] text-lg"
            }
          >
            Anasayfa
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="hashtag"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-32 h-12 mt-3 relative"
        >
          <i
            id="hashtag"
            className={
              menuItems.hashtag
                ? "fa-solid fa-hashtag text-2xl cursor-pointer absolute top-2 left-[14px]"
                : "fa-regular fa-hashtag text-2xl cursor-pointer absolute top-2 left-[14px]"
            }
          ></i>
          <span
            id="hashtag"
            className={
              menuItems.hashtag
                ? "absolute top-[10px] right-6 text-lg font-semibold"
                : "absolute top-[10px] right-6 text-lg"
            }
          >
            Keşfet
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="bell"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-40 h-12 mt-3 relative"
        >
          <i
            id="bell"
            className={
              menuItems.bell
                ? "fa-solid fa-bell text-2xl cursor-pointer absolute top-2 left-[14px]"
                : "fa-regular fa-bell text-2xl cursor-pointer absolute top-2 left-[14px]"
            }
          ></i>
          <span
            id="bell"
            className={
              menuItems.bell
                ? "absolute top-[10px] right-[24px] text-lg font-semibold"
                : "absolute top-[10px] right-[24px] text-lg"
            }
          >
            Bildirimler
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="envelope"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-36 h-12 mt-3 relative"
        >
          <i
            id="envelope"
            className={
              menuItems.envelope
                ? "fa-solid fa-envelope text-2xl cursor-pointer absolute top-2 left-3"
                : "fa-regular fa-envelope text-2xl cursor-pointer absolute top-2 left-3"
            }
          ></i>
          <span
            id="envelope"
            className={
              menuItems.envelope
                ? "absolute top-[10px] right-5 text-lg font-semibold"
                : "absolute top-[10px] right-5 text-lg"
            }
          >
            Mesajlar
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="bookmark"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-44 h-12 mt-3 relative"
        >
          <i
            id="bookmark"
            className={
              menuItems.bookmark
                ? "fa-solid fa-bookmark text-2xl cursor-pointer absolute top-2 left-[14px]"
                : "fa-regular fa-bookmark text-2xl cursor-pointer absolute top-2 left-[14px]"
            }
          ></i>
          <span
            id="bookmark"
            className={
              menuItems.bookmark
                ? "absolute top-[10px] right-[22px] text-lg font-semibold"
                : "absolute top-[10px] right-[22px] text-lg"
            }
          >
            Yer İşaretleri
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="clipboard"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-32 h-12 mt-3 relative"
        >
          <i
            id="clipboard"
            className={
              menuItems.clipboard
                ? "fa-solid fa-clipboard text-2xl cursor-pointer absolute top-2 left-[14px]"
                : "fa-regular fa-clipboard text-2xl cursor-pointer absolute top-2 left-[14px]"
            }
          ></i>
          <span
            id="clipboard"
            className={
              menuItems.clipboard
                ? "absolute top-[10px] right-[13px] text-lg font-semibold"
                : "absolute top-[10px] right-[13px] text-lg"
            }
          >
            Listeler
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="profile"
          className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-32 h-12 mt-3 relative"
        >
          <i
            id="profile"
            className={
              menuItems.profile
                ? "fa-solid fa-user text-2xl cursor-pointer absolute top-2 left-[12px]"
                : "fa-regular fa-user text-2xl cursor-pointer absolute top-2 left-[12px]"
            }
          ></i>
          <span
            id="profile"
            className={
              menuItems.profile
                ? "absolute top-[10px] right-[27px] text-lg font-semibold"
                : "absolute top-[10px] right-[27px] text-lg"
            }
          >
            Profil
          </span>
        </button>

        <div className="relative mt-2 h-[50px] inline-block" ref={ref}>
          {!isComponentVisible && (
            <button
              onClick={menuMoreOnClick}
              className="hover:bg-slate-200 rounded-3xl w-44 h-12 relative"
            >
              <i className="fa-solid fa-ellipsis text-md cursor-pointer p-[2px] border-2 border-black rounded-3xl absolute top-[12px] left-3"></i>
              <span className="text-md text-lg font-sans font-normal absolute top-2 right-[34px]">
                Daha fazla
              </span>
            </button>
          )}
          {isComponentVisible && (
            <div className="card bg-white w-[318px] h-auto shadow-lg absolute -top-60">
              <div className="flex flex-col">
                <div className="mr-auto mt-2">
                  <i className="fa-brands fa-rocketchat inline text-left ml-5 text-xl"></i>
                  <p className="inline font-semibold text-xl ml-6">Konular</p>
                </div>

                <div className="mr-auto my-5">
                  <i className="fa-solid fa-user-check inline text-left ml-5 text-xl"></i>
                  <p className="inline font-semibold text-xl ml-[22px]">
                    Twitter Çevresi
                  </p>
                </div>
                <hr />
                <details className="mt-5 mb-6 ml-5">
                  <summary className="list-none font-semibold relative">
                    İçerik Üreticisi Stüdyosu
                    <i className="fa-solid fa-angle-down absolute top-2 right-4"></i>
                  </summary>
                  <div className="mt-4">
                    <i className="fa-solid fa-chart-simple inline"></i>
                    <p className="inline ml-4">İstatistikler</p>
                  </div>
                </details>
                <details className="mb-6 ml-5">
                  <summary className="list-none font-semibold relative">
                    Profesyonel Araçlar
                    <i className="fa-solid fa-angle-down absolute top-2 right-4"></i>
                  </summary>
                  <div className="mt-4">
                    <i className="fa-solid fa-rocket inline"></i>
                    <p className="inline ml-4">Profesyoneller İçin Twitter</p>
                  </div>
                  <div className="my-3">
                    <i className="fa-solid fa-arrow-up-right-from-square inline"></i>
                    <p className="inline ml-4">Twitter Reklamları</p>
                  </div>
                  <div>
                    <div className="transform rotate-180 inline">
                      <i className="fa-solid fa-money-bills"></i>
                    </div>
                    <p className="inline ml-3">Para kazanma</p>
                  </div>
                </details>
                <details className="mb-5 ml-5">
                  <summary className="list-none font-semibold relative">
                    Ayarlar ve Destek
                    <i className="fa-solid fa-angle-down absolute top-2 right-4"></i>
                  </summary>
                  <div className="mt-4">
                    <i className="fa-solid fa-gear inline"></i>
                    <p className="inline ml-4">Ayarlar</p>
                  </div>
                  <div className="my-3">
                    <i className="fa-regular fa-circle-question inline"></i>
                    <p className="inline ml-4">Yardım Merkezi</p>
                  </div>
                  <div>
                    <i className="fa-solid fa-paintbrush inline"></i>
                    <p className="inline ml-4">Görünüm</p>
                  </div>
                  <div className="mt-3">
                    <i className="fa-solid fa-universal-access inline"></i>
                    <p className="inline ml-4">Klavye kısayolları</p>
                  </div>
                </details>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="bg-sky-500 w-auto h-14 rounded-3xl mr-auto mt-7 mb-0 px-20 py-2 text-white font-bold block hover:bg-sky-600">
        Tweetle
      </button>
      <button className="absolute hover:bg-slate-200 rounded-3xl px-2 w-auto h-[60px] text-right bottom-3 right-2">
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
                  className="w-10 h-auto rounded-3xl"
                  alt="twitterProfilePhoto"
                />
              </td>
              <td className="pl-3">
                <p className="text-center font-bold pl-1">{name}</p>
                <p className="text-left">@sirosiyasir</p>
              </td>
              <td>
                <i className="fa-solid fa-ellipsis text-2xl cursor-pointer pl-10"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </button>
    </div>
  )
}

export default Navbar
