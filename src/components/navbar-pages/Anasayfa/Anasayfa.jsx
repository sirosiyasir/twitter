import AnasayfaNavbar from "../../navbar/AnasayfaNavbar"
import AnasayfaTextArea from "./AnasayfaTextArea"
import CreateTweet from "./templates/CreateTweet"

function Anasayfa() {
  return (
    <div className="border-x-[1px] border-gray-100 ml-[240px] block w-[650px] mx-4">
      <AnasayfaNavbar />
      <div className="mt-32">
        <AnasayfaTextArea />
        <CreateTweet />
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
        <div className="w-auto h-32">Hello</div>
      </div>
    </div>
  )
}

export default Anasayfa
