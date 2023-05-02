import AnasayfaNavbar from "../../navbar/AnasayfaNavbar"
import AnasayfaTextArea from "./AnasayfaTextArea"
import CreateTweet from "./templates/CreateTweet"
/* import AnasayfaContext from "../../context/AnasayfaContext"
import { useContext } from "react" */
// tweet paylaşıldığında ekranda yavaşça ortaya çıkabilisin diye
import { motion, AnimatePresence } from "framer-motion"
// firebase cloud store'dan bilgileri getiriyorum
import { useEffect, useState } from "react"
/* import { useParams } from "react-router-dom" */
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../../firebase.config"
import { toast } from "react-toastify"

function Anasayfa(props) {
  /* const { tweets } = useContext(AnasayfaContext)
  const [createTweet, setCreateTweet] = useState(null) */
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  /*  const params = useParams() */

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Cloud Store'deki collection'ı getiriyorum ve data'ları listings dizisine kaydediyorum
        const listingsRef = collection(db, "listings")

        const listings = []

        // Query oluituruyorum
        const q = query(listingsRef)

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
  }, [loading])

  return (
    <div className="border-x-[1px] border-gray-100 ml-[50px] md:ml-[100px] xl:ml-[265px] block w-[650px] mx-4">
      <AnasayfaNavbar />
      <div className="mt-32">
        <AnasayfaTextArea profilePhoto={props.profilePhoto} />
        {loading ? null : (
          <AnimatePresence>
            {listings.map((listing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CreateTweet
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default Anasayfa
