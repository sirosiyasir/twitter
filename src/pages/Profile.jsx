import React, { useState } from "react"

function Profile() {
  const [menuItems, setMenuItems] = useState({
    bell: false,
    envope: false,
    hashtag: false,
    bookmark: false,
    clipboard: false,
    profile: false,
  })
  const onClick = (e) => {
    setMenuItems((prevState) => ({
      ...!prevState,
      [e.target.id]: prevState,
    }))
  }

  return (
    <div>
      <div className="flex px-80">
        <div className="flex-1 w-28 mt-4 relative border-r-[1px] border-gray-100">
          <div className="pl-2">
            <i className="fa-brands fa-twitter text-blue-400 text-2xl block cursor-pointer"></i>
            <i className="fa-solid fa-house text-2xl mt-7 block cursor-pointer"></i>
            <i
              id="hashtag"
              onClick={onClick}
              className={
                menuItems.hashtag
                  ? "fa-solid fa-hashtag text-2xl mt-7 block cursor-pointer"
                  : "fa-solid fa-hashtag text-2xl mt-7 block cursor-pointer font-light"
              }
            ></i>
            <i
              id="bell"
              onClick={onClick}
              className={
                menuItems.bell
                  ? "fa-solid fa-bell text-2xl mt-7 block cursor-pointer"
                  : "fa-regular fa-bell text-2xl mt-7 block cursor-pointer"
              }
            ></i>
            <i
              id="envope"
              onClick={onClick}
              className={
                menuItems.envope
                  ? "fa-solid fa-envelope text-2xl mt-7 block cursor-pointer"
                  : "fa-regular fa-envelope text-2xl mt-7 block cursor-pointer"
              }
            ></i>
            <i
              id="bookmark"
              onClick={onClick}
              className={
                menuItems.bookmark
                  ? "fa-solid fa-bookmark text-2xl mt-7 block cursor-pointer"
                  : "fa-regular fa-bookmark text-2xl mt-7 block cursor-pointer"
              }
            ></i>
            <i
              id="clipboard"
              onClick={onClick}
              className={
                menuItems.clipboard
                  ? "fa-solid fa-clipboard text-2xl mt-7 block cursor-pointer"
                  : "fa-regular fa-clipboard text-2xl mt-7 block cursor-pointer"
              }
            ></i>
            <i
              id="profile"
              onClick={onClick}
              className={
                menuItems.profile
                  ? "fa-solid fa-user text-2xl mt-7 block cursor-pointer"
                  : "fa-regular fa-user text-2xl mt-7 block cursor-pointer"
              }
            ></i>
            <i className="fa-solid fa-ellipsis text-2xl mt-5 block cursor-pointer"></i>
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
