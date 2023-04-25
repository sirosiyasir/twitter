import Hashtags from "./Hashtags"
import SearchTwitter from "./SearchTwitter"
import KimiTakipEtmeli from "./KimiTakipEtmeli"
import TwitterRules from "./layout/TwitterRules"

function RightSide() {
  return (
    <div className="2xl:mx-14 mx-4 home-page-trend-hashtags w-[350px] ">
      <SearchTwitter />
      <Hashtags />
      <KimiTakipEtmeli />
      <div className="mt-4 mb-20 px-4">
        <TwitterRules />
      </div>
    </div>
  )
}

export default RightSide
