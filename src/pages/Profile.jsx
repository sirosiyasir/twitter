import React, { useState } from "react"

function Profile() {
  const [menuItems, setMenuItems] = useState({
    bell: false,
    envelope: false,
    hashtag: false,
    bookmark: false,
    clipboard: false,
    profile: false,
    home: false,
  })
  const [more, setMore] = useState(true)

  const navbarOnCLick = (e) => {
    console.log(e.target.className)
    setMenuItems((prevState) => ({
      ...!prevState,
      [e.target.id]: prevState,
    }))
  }

  const menuMoreOnClick = () => {
    setMore((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="bg-white h-screen">
      <div className="flex 2xl:px-80 md:px-52">
        <div className="flex-1 pt-4 relative border-r-[1px] border-gray-100">
          <div className="text-black">
            <i className="fa-brands fa-twitter text-blue-500 text-2xl ml-2 block cursor-pointer"></i>

            <button
              onClick={navbarOnCLick}
              className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-32 h-12 mt-4 relative"
            >
              <i className="fa-solid fa-house text-2xl cursor-pointer absolute top-2 left-3"></i>
              <span
                id="home"
                className={
                  menuItems.home
                    ? "absolute top-[10px] right-5 text-lg font-semibold"
                    : "absolute top-[10px] right-5 text-lg"
                }
              >
                Home
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
                    ? "fa-solid fa-hashtag text-2xl cursor-pointer absolute top-2 left-3"
                    : "fa-regular fa-hashtag text-2xl cursor-pointer absolute top-2 left-3"
                }
              ></i>
              <span
                id="hashtag"
                className={
                  menuItems.hashtag
                    ? "absolute top-[10px] right-3 text-lg font-semibold"
                    : "absolute top-[10px] right-3 text-lg"
                }
              >
                Explore
              </span>
            </button>

            <button
              onClick={navbarOnCLick}
              id="bell"
              className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-44 h-12 mt-3 relative"
            >
              <i
                id="bell"
                className={
                  menuItems.bell
                    ? "fa-solid fa-bell text-2xl cursor-pointer absolute top-2 left-3"
                    : "fa-regular fa-bell text-2xl cursor-pointer absolute top-2 left-3"
                }
              ></i>
              <span
                id="bell"
                className={
                  menuItems.bell
                    ? "absolute top-[10px] right-4 text-lg font-semibold"
                    : "absolute top-[10px] right-4 text-lg"
                }
              >
                Notifications
              </span>
            </button>

            <button
              onClick={navbarOnCLick}
              id="envelope"
              className="block hover:bg-slate-200 rounded-3xl pl-0 p-2 w-44 h-12 mt-3 relative"
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
                    ? "absolute top-[10px] right-10 text-lg font-semibold"
                    : "absolute top-[10px] right-10 text-lg"
                }
              >
                Messages
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
                    ? "fa-solid fa-bookmark text-2xl cursor-pointer absolute top-2 left-3"
                    : "fa-regular fa-bookmark text-2xl cursor-pointer absolute top-2 left-3"
                }
              ></i>
              <span
                id="bookmark"
                className={
                  menuItems.bookmark
                    ? "absolute top-[10px] right-8 text-lg font-semibold"
                    : "absolute top-[10px] right-8 text-lg"
                }
              >
                Bookmarks
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
                    ? "fa-solid fa-clipboard text-2xl cursor-pointer absolute top-2 left-3"
                    : "fa-regular fa-clipboard text-2xl cursor-pointer absolute top-2 left-3"
                }
              ></i>
              <span
                id="clipboard"
                className={
                  menuItems.clipboard
                    ? "absolute top-[10px] right-9 text-lg font-semibold"
                    : "absolute top-[10px] right-9 text-lg"
                }
              >
                Lists
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
                    ? "fa-solid fa-user text-2xl cursor-pointer absolute top-2 left-3"
                    : "fa-regular fa-user text-2xl cursor-pointer absolute top-2 left-3"
                }
              ></i>
              <span
                id="profile"
                className={
                  menuItems.profile
                    ? "absolute top-[10px] right-5 text-lg font-semibold"
                    : "absolute top-[10px] right-5 text-lg"
                }
              >
                Profile
              </span>
            </button>

            <div className="relative mt-2">
              <button onClick={menuMoreOnClick}>
                <i className="fa-solid fa-ellipsis text-2xl block cursor-pointer hover:bg-slate-200 rounded-3xl pl-0 p-2 w-28">
                  <span className="ml-4 text-md text-lg font-sans font-normal">
                    More
                  </span>
                </i>
              </button>
              <div
                className={`${
                  more ? "hidden" : "absolute"
                } card bg-white w-[318px] h-[273px] shadow-lg -top-60`}
              >
                a
              </div>
            </div>
          </div>
          <button className="bg-sky-500 w-auto h-14 rounded-3xl mr-auto mt-12 mb-0 px-20 py-2 text-white font-bold block hover:bg-sky-600">
            Tweetle
          </button>
        </div>
        <div className="flex-auto w-64">2</div>
        <div className="flex-auto w-32 bg-gray-100">3</div>
      </div>
    </div>
  )
}

export default Profile
