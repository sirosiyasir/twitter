function ThirdStep(props) {
  const birthday =
    props.userInformation.day +
    " " +
    props.userInformation.month +
    " " +
    props.userInformation.year
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative sign-up-card">
        <h2 className="text-black absolute left-12 top-2 font-semibold text-xl">
          Adım 3/4
        </h2>
        <i
          className="text-black fa-solid fa-arrow-left absolute left-4 top-4 cursor-pointer"
          onClick={() => {
            props.setThirdStep(false)
            props.setSecondStep(true)
          }}
        ></i>
        <h1 className="text-black text-left mx-auto mt-16 text-3xl font-bold w-[29.5rem] sign-up-divs">
          Hesabını oluştur
        </h1>
        <div className="mx-auto mt-8 mb-0 pb-0 text-center third-step-divs">
          <div
            onClick={() => {
              props.setThirdStep(false)
              props.setFirstStep(true)
            }}
            className="text-black border border-gray-300 w-[29rem] sign-up-divs h-14 pl-2 pt-4 text-left rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400 relative"
          >
            {props.userInformation.name}
            <i className="fa-solid fa-circle-check absolute right-3 bottom-2 text-green-800"></i>
          </div>
          <div
            onClick={() => {
              props.setThirdStep(false)
              props.setFirstStep(true)
            }}
            className="text-black border border-gray-300 w-[29rem] sign-up-divs h-14 pl-2 pt-4 text-left my-7 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400 relative"
          >
            {props.userInformation.eMailOrPhone}
            <i className="fa-solid fa-circle-check absolute right-3 bottom-2 text-green-800"></i>
          </div>
          <div
            onClick={() => {
              props.setThirdStep(false)
              props.setFirstStep(true)
            }}
            className="text-black border border-gray-300 w-[29rem] sign-up-divs h-14 pl-2 pt-4 text-left rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400 relative"
          >
            {birthday}
            <i className="fa-solid fa-circle-check absolute right-3 bottom-2 text-green-800"></i>
          </div>
        </div>
        <button
          className="bg-black w-[28rem] sign-up-divs h-12 rounded-3xl mx-auto mt-16 mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500"
          onClick={() => {
            props.setThirdStep(false)
            props.setFourthStep(true)
          }}
        >
          İleri
        </button>
      </div>
    </div>
  )
}

export default ThirdStep
