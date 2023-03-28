import React from "react"

function CreateTweet(props) {
  return (
    <div>
      <div className="flex flex-row">
        <img
          className="rounded-full m-5 h-12 w-12 flex-none"
          src={
            props.profilePhoto !== ""
              ? props.profilePhoto
              : "https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
          }
          alt=""
        />
        <div className="pt-3">
          <p className="font-semibold relative">
            Yasirovski{" "}
            <span className="text-sm text-gray-400">@sirosiyasir</span>
            <i className="fa-solid fa-ellipsis absolute right-3 top-1"></i>
          </p>
          <p>
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </p>
          <div className="flex justify-between pl-0 pr-10 py-4 text-gray-500 text-sm">
            <div>
              <i className="fa-regular fa-comment"></i>
              <p className="inline ml-2">10</p>
            </div>
            <div className="">
              <i className="fa-solid fa-retweet"></i>
              <p className="inline ml-2">0</p>
            </div>
            <div className="">
              <i className="fa-regular fa-heart"></i>
              <p className="inline ml-2">0</p>
            </div>
            <div className="">
              <i className="fa-solid fa-chart-simple inline"></i>
              <p className="inline ml-2">0</p>
            </div>
            <div className="">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <p className="inline ml-2">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTweet
