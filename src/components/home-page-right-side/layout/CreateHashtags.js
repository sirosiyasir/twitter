// div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
import useComponentVisible from "../../toggle-component/useComponentVisible"

function CreateHashtags({ trendTitle, trendHashtag, hashtagsNumber }) {
  const { reference, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const openHashtagMenu = () => {
    setIsComponentVisible(true)
  }
  return (
    <div className="hover:bg-gray-200 w-full px-4 py-3 cursor-pointer">
      <div ref={reference} className="relative">
        <p className="text-[13px] text-gray-500">{trendTitle}</p>
        <i
          onClick={openHashtagMenu}
          className="fa-solid fa-ellipsis text-md cursor-pointer text-gray-500 absolute -top-1 right-0 hover:bg-[#1d9bf01a] hover:text-sky-500 p-2 rounded-full"
        ></i>
        {isComponentVisible && (
          <div className="rounded-2xl bg-white absolute top-0 shadow-3xl z-10">
            <p className="font-semibold rounded-t-2xl hover:bg-gray-100 p-2">
              <i class="fa-regular fa-face-smile mr-2"></i>İlgimi çekmiyor
            </p>
            <p className="font-semibold rounded-b-2xl hover:bg-gray-100 p-2">
              <i className="fa-regular fa-face-frown mr-2"></i>Bu gündem başlığı
              zararlı veya spam içeriyor
            </p>
          </div>
        )}
      </div>
      <h3 className="font-bold text-[15px]">{trendHashtag}</h3>
      <p className="text-[13px] text-gray-500">{hashtagsNumber}</p>
    </div>
  )
}

export default CreateHashtags
