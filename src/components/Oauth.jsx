import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"

function Oauth() {
  const navigate = useNavigate()
  const location = useLocation()

  const googleOnClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check for user
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      // If user doesn't exist, create user
      // eğer kullanıcı database de mevcut değilse aşağıdaki parametlerle kullanıcı oluşturuyoruz
      // db: database , "users": collection ismi, user.uid: kullanıcıya özel uid
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestap: serverTimestamp(),
        })
      }
      navigate("/home")
    } catch (error) {
      toast.error("Could not authorize with Google")
    }
  }
  return (
    <div
      onClick={googleOnClick}
      className="border-gray-400 border w-[19rem] rounded-3xl mx-auto mt-5 mb-4 px-4 py-2  cursor-pointer"
    >
      <p className="text-black text-center">
        <i className="fa-brands fa-google pr-2"></i>
        <span className="text-gray-500">
          Google ile {location.pathname === "/" ? "oturum açın" : "kaydolun"}
        </span>
      </p>
    </div>
  )
}

export default Oauth
