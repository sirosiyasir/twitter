import CreateKimiTakipEtmeli from "./layout/CreateKimiTakipEtmeli"
import img from "../../images/profile-picture.png"
function KimiTakipEtmeli() {
  return (
    <div className="mt-10 pt-4 bg-gray-100 rounded-3xl">
      <h1 className="px-4 mb-2 font-bold text-[18px]">Kimi Takip Etmeli</h1>
      <CreateKimiTakipEtmeli
        img={img}
        userName={"@sirosiyasir"}
        name={"Yasir Çeşmeci"}
      />
      <CreateKimiTakipEtmeli
        img={img}
        userName={"@sirosiyasir"}
        name={"Yasir Çeşmeci"}
      />
      <CreateKimiTakipEtmeli
        img={img}
        userName={"@sirosiyasir"}
        name={"Yasir Çeşmeci"}
      />
      <button
        type="button"
        className="text-left p-4 text-sky-400 w-full hover:bg-gray-200 rounded-b-2xl"
      >
        Daha fazla
      </button>
    </div>
  )
}

export default KimiTakipEtmeli
