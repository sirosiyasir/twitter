// Redux için gerekli function'ları import ediyorum
import { useDispatch } from "react-redux"
// reducer'ları import ediyorum
import { setFirstStep, setSecondStep, setThirdStep } from "../stores/steps"
function SecondStep() {
  const dispatch = useDispatch()
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative sign-up-card">
        <i
          className="text-black fa-solid fa-arrow-left absolute left-4 top-4 cursor-pointer"
          onClick={() => {
            dispatch(setFirstStep(true))
            dispatch(setSecondStep(false))
          }}
        ></i>
        <h2 className="text-black absolute left-12 top-2 font-semibold text-xl">
          Adım 2/5
        </h2>
        <div className="w-[29.5rem] mx-auto sign-up-divs">
          <h1 className="text-black text-left mx-auto mt-16 mb-8 pr-10 text-3xl font-bold sign-up-divs">
            Deneyimini özelleştir
          </h1>
          <h6 className="text-black my-4 font-bold text-xl sign-up-divs">
            Twitter içeriğini web'de nerede gördüğünü takip et
          </h6>
          <div className="relative">
            <p className="text-gray-600 w-[26rem] sign-up-divs sign-up-checkmark-div">
              Twitter bu verileri deneyimini kişiselleştirmek için kullanır. Bu
              web gezintisi geçmişi hiçbir zaman adın, e-posta adresin veya
              telefon numaranla saklanmayacaktır.
            </p>
            <input type="checkbox" className="absolute right-3 top-6 w-5 h-5" />
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
          className="bg-black w-[28rem] sign-up-divs h-12 rounded-3xl mx-auto mt-20 mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500"
          onClick={() => {
            dispatch(setSecondStep(false))
            dispatch(setThirdStep(true))
          }}
        >
          İleri
        </button>
      </div>
    </div>
  )
}

export default SecondStep
