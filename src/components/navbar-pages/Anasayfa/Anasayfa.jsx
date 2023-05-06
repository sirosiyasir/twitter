import AnasayfaNavbar from "../../navbar/AnasayfaNavbar"
import AnasayfaTextArea from "./AnasayfaTextArea"
import CreateTweet from "./templates/CreateTweet"
// tweet paylaşıldığında ekranda yavaşça ortaya çıkabilisin diye
import { motion, AnimatePresence } from "framer-motion"
// firebase cloud store'dan bilgileri getiriyorum
import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { toast } from "react-toastify"

function Anasayfa({ profilePhoto, shareTweet }) {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Cloud Store'deki collection'ı getiriyorum ve data'ları listings dizisine kaydediyorum
        const listingsRef = collection(db, "listings")

        const listings = []

        // Firestore'daki dataları kendi belirlediğim şartlar altında burada oluşturuyorum(orderBy kullanarak dataların timestamp'e göre sırayla gelmesini sağlıyorum)
        const q = query(listingsRef, orderBy("timestamp", "desc"))

        // query'imi çağırıyorum
        const querySnap = await getDocs(q)
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error("Tweetler yüklenirken bir problem oluştu")
      }
    }
    fetchListings()
  }, [shareTweet])

  return (
    <div className="border-x-[1px] border-gray-100 ml-[50px] md:ml-[100px] xl:ml-[265px] block w-[650px] mx-4">
      <AnasayfaNavbar />
      <div className="mt-32">
        <AnasayfaTextArea profilePhoto={profilePhoto} />
        {loading ? null : (
          <AnimatePresence>
            {listings.map((listing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CreateTweet listing={listing.data} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default Anasayfa
