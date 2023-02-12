function SecondStep(props) {
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative">
        <i
          className="text-black fa-solid fa-arrow-left absolute left-4 top-4 cursor-pointer"
          onClick={() => {
            props.setFirstStep(true)
            props.setSecondStep(false)
          }}
        ></i>
        <h2 className="text-black absolute left-12 top-2 font-semibold text-xl">
          Adım 2/5
        </h2>
        <div className="w-[29.5rem] mx-auto">
          <h1 className="text-black text-left mx-auto mt-16 mb-8 pr-10 text-3xl font-bold w-[29.5rem]">
            Deneyimini özelleştir
          </h1>
          <h6 className="text-black my-4 font-bold text-xl w-[28rem]">
            Twitter içeriğini web'de nerede gördüğünü takip et
          </h6>
          <div className="relative">
            <p className="text-gray-600 w-[26rem] ">
              Twitter bu verileri deneyimini kişiselleştirmek için kullanır. Bu
              web gezintisi geçmişi hiçbir zaman adın, e-posta adresin veya
              telefon numaranla saklanmayacaktır.
            </p>
            <input
              type="checkbox"
              className="bg-white absolute right-3 top-6 w-5 h-5"
            />
            <p className="text-gray-500 mt-8 mb-18">
              Kaydolarak Koşullarımızı, Gizlilik Politikamızı ve Çerez
              Kullanımımızı kabul etmiş olursun. Twitter, e-posta adresin ve
              telefon numaran dahil olmak üzere iletişim bilgilerini Gizlilik
              Politikamızda belirtilen amaçlar doğrultusunda kullanabilir. Daha
              fazla bilgi al
            </p>
          </div>
        </div>

        <button
          className="bg-black w-[28rem] h-12 rounded-3xl mx-auto mt-20 mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500"
          onClick={() => {
            props.setSecondStep(false)
            props.setThirdStep(true)
          }}
        >
          İleri
        </button>
      </div>
    </div>
  )
}

export default SecondStep
