import Hashtags from "./Hashtags"
import SearchTwitter from "./SearchTwitter"

function RightSide() {
  return (
    <div className="2xl:mx-14 mx-4 home-page-trend-hashtags w-[350px] ">
      <SearchTwitter />
      <Hashtags />
    </div>
  )
}

export default RightSide
