import React from "react"

function CreateTweet() {
  return (
    <div className="w-auto h-auto">
      <div className="flex flex-column">
        <img
          className="rounded-3xl m-3 h-max"
          src="https://pbs.twimg.com/media/FRynXImUcAAGFWk.png"
          width="40px"
          height="40px"
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
