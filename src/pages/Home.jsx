// navbar
import Navbar from "../navbar/Navbar"
function Profile() {
  return (
    <div className="bg-white h-screen">
      <div className="flex 2xl:px-60 md:px-40">
        <Navbar />
        <div className="flex-auto w-64">2</div>
        <div className="flex-auto w-32 bg-gray-100">3</div>
      </div>
    </div>
  )
}

export default Profile
