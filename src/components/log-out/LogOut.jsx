import { getAuth, signOut } from "firebase/auth"
import { toast } from "react-toastify"

function LogOut({ setHomePageOpacityTwo }) {
  const closeLogOut = () => {
    setHomePageOpacityTwo(true)
  }

  const auth = getAuth()
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Çıkış yapıldı")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="position">
      <div className="bg-white w-[320px] h-auto shadow-2xl rounded-2xl p-7 flex flex-col">
        <i className="fa-brands fa-twitter text-sky-500 text-[36px] text-center mt-1 mb-3"></i>
        <p className="font-bold text-xl">Twitter oturumu kapatılsın mı?</p>
        <p className="mt-3 text-gray-500">
          İstediğiniz zaman tekrar giriş yapabilirsiniz. Yalnızca hesaplar
          arasında geçiş yapmak istiyorsanız, bunu mevcut bir hesabı ekleyerek
          yapabilirsiniz.
        </p>
        <button
          onClick={logOut}
          className="bg-black px-20 py-[10px] mt-6 text-white rounded-3xl font-bold"
        >
          Çıkış Yap
        </button>
        <button
          onClick={closeLogOut}
          className="bg-white border border-gray-300 px-20 py-[10px] mt-6 text-black rounded-3xl font-bold"
        >
          İptal et
        </button>
      </div>
    </div>
  )
}

export default LogOut
