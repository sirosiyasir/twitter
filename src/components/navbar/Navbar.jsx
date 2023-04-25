import { useState } from "react"
// div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
import useComponentVisible from "../toggle-component/useComponentVisible"

function Navbar(props) {
  const [menuItems, setMenuItems] = useState({
    bell: false,
    envelope: false,
    hashtag: false,
    bookmark: false,
    clipboard: false,
    profile: false,
    home: true,
  })

  const { reference, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

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

  return (
    <div className="fixed pt-4 h-screen w-auto grid grid-rows-1">
      <div className="text-black">
        <i className="fa-brands fa-twitter text-blue-500 text-2xl ml-[14px] inline-block cursor-pointer"></i>

        <button
          onClick={navbarOnCLick}
          id="home"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-4 relative"
        >
          <i
            id="home"
            className="fa-solid fa-house text-2xl cursor-pointer "
          ></i>
          <span
            id="home"
            className={
              menuItems.home ? "ml-4 text-lg font-semibold" : "ml-4 text-lg"
            }
          >
            Anasayfa
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="hashtag"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 relative"
        >
          <i
            id="hashtag"
            className={
              menuItems.hashtag
                ? "fa-solid fa-hashtag text-2xl cursor-pointer"
                : "fa-regular fa-hashtag text-2xl cursor-pointer"
            }
          ></i>
          <span
            id="hashtag"
            className={
              menuItems.hashtag
                ? " ml-6 text-lg font-semibold"
                : " ml-6 text-lg"
            }
          >
            Keşfet
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="bell"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 relative"
        >
          <i
            id="bell"
            className={
              menuItems.bell
                ? "fa-solid fa-bell text-2xl cursor-pointer"
                : "fa-regular fa-bell text-2xl cursor-pointer"
            }
          ></i>
          <span
            id="bell"
            className={
              menuItems.bell ? "ml-6 text-lg font-semibold" : "ml-6 text-lg"
            }
          >
            Bildirimler
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="envelope"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 relative"
        >
          <i
            id="envelope"
            className={
              menuItems.envelope
                ? "fa-solid fa-envelope text-2xl cursor-pointer "
                : "fa-regular fa-envelope text-2xl cursor-pointer "
            }
          ></i>
          <span
            id="envelope"
            className={
              menuItems.envelope
                ? "ml-[22px] text-lg font-semibold"
                : "ml-[22px] text-lg"
            }
          >
            Mesajlar
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="bookmark"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 ml-[2px] relative"
        >
          <i
            id="bookmark"
            className={
              menuItems.bookmark
                ? "fa-solid fa-bookmark text-2xl cursor-pointer "
                : "fa-regular fa-bookmark text-2xl cursor-pointer "
            }
          ></i>
          <span
            id="bookmark"
            className={
              menuItems.bookmark ? "ml-7 text-lg font-semibold" : "ml-7 text-lg"
            }
          >
            Yer İşaretleri
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="clipboard"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 ml-[2px] relative"
        >
          <i
            id="clipboard"
            className={
              menuItems.clipboard
                ? "fa-solid fa-clipboard text-2xl cursor-pointer"
                : "fa-regular fa-clipboard text-2xl cursor-pointer"
            }
          ></i>
          <span
            id="clipboard"
            className={
              menuItems.clipboard
                ? "ml-[30px] text-lg font-semibold"
                : "ml-[30px] text-lg"
            }
          >
            Listeler
          </span>
        </button>

        <button
          onClick={navbarOnCLick}
          id="profile"
          className="block hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 mt-3 relative"
        >
          <i
            id="profile"
            className={
              menuItems.profile
                ? "fa-solid fa-user text-2xl cursor-pointer "
                : "fa-regular fa-user text-2xl cursor-pointer "
            }
          ></i>
          <span
            id="profile"
            className={
              menuItems.profile ? "ml-7 text-lg font-semibold" : "ml-7 text-lg"
            }
          >
            Profil
          </span>
        </button>

        <div className="relative mt-2 h-[50px] inline-block" ref={reference}>
          {!isComponentVisible && (
            <button
              onClick={menuMoreOnClick}
              className="hover:bg-slate-200 rounded-full px-3 py-2 w-auto h-12 relative"
            >
              <i className="fa-solid fa-ellipsis text-md cursor-pointer p-[2px] border-2 border-black rounded-full"></i>
              <span className="text-md text-lg font-sans font-normal navbar-more ml-[26px]">
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
        <button className="bg-sky-500 w-auto h-14 rounded-full mr-auto mt-7 mb-0 px-[90px] py-2 text-white font-bold block hover:bg-sky-600 navbar-tweet-button">
          Tweetle
        </button>
        <button className="bg-sky-500 mt-5 py-2 rounded-full px-3 ml-1 text-2xl text-white block xl:hidden">
          <i className="fa-solid fa-feather-pointed"></i>
        </button>
      </div>
      <div className="-ml-1 mb-4 hover:bg-slate-200 rounded-full px-2 pt-2 w-auto block h-[60px]">
        <div className="flex flex-row">
          <div>
            <img
              src={
                props.profilePhoto !== ""
                  ? props.profilePhoto
                  : "https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
              }
              className="w-10 h-10 rounded-3xl mt-1"
              alt="twitterProfilePhoto"
            />
          </div>
          <div className="px-5 navbar-hesap-bilgileri">
            <p className="text-center font-bold w-auto">{props.name}</p>
            <p className="text-left">@sirosiyasir</p>
          </div>
          <div className="mt-2 navbar-hesap-bilgileri">
            <i className="fa-solid fa-ellipsis text-lg cursor-pointer ml-5"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
