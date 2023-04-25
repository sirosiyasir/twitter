function CreateKimiTakipEtmeli({ img, userName, name }) {
  return (
    <div className="hover:bg-gray-200 w-full p-4 cursor-pointer">
      <div className=" hover:bg-slate-200 rounded-full px-2 w-auto block">
        <div className="flex flex-row">
          <div>
            <img
              src={img}
              className="w-10 h-10 rounded-3xl mt-1"
              alt="twitterProfilePhoto"
            />
          </div>
          <div className="px-5">
            <p className="text-center font-bold w-auto">{name}</p>
            <p className="text-left">{userName}</p>
          </div>
          <div className="mt-2">
            <button className="bg-black text-white px-4 py-1 rounded-2xl font-semibold">
              Takip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateKimiTakipEtmeli
