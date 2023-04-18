import AnasayfaNavbar from "../../navbar/AnasayfaNavbar"
import AnasayfaTextArea from "./AnasayfaTextArea"
import CreateTweet from "./templates/CreateTweet"
import AnasayfaContext from "../../context/AnasayfaContext"
import { useContext } from "react"
// tweet paylaşıldığında ekranda yavaşça ortaya çıkabilisin diye
import { motion, AnimatePresence } from "framer-motion"

function Anasayfa(props) {
  const { tweets } = useContext(AnasayfaContext)
  return (
    <div className="border-x-[1px] border-gray-100 ml-[50px] md:ml-[100px] xl:ml-[265px] block w-[650px] mx-4">
      <AnasayfaNavbar />
      <div className="mt-32">
        <AnasayfaTextArea profilePhoto={props.profilePhoto} />
        <AnimatePresence>
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CreateTweet
                tweet={tweet}
                profilePhoto={props.profilePhoto}
                name={props.name}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Anasayfa
