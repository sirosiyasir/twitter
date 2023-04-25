// div dışında herhangi yere tıklanıldığı zaman açılır-kapanır bir div oluşturmak için
import useComponentVisible from "../toggle-component/useComponentVisible"

function SearchTwitter() {
  const { reference, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const onSubmit = (e) => {
    e.preventDefault()
  }
  const openSearch = () => {
    setIsComponentVisible(true)
  }
  return (
    <div
      className={`p-3 mt-2 mb-5 rounded-3xl bg-gray-100 ${
        isComponentVisible && "border border-sky-400"
      }`}
      ref={reference}
    >
      <form onClick={openSearch} onSubmit={onSubmit} className="flex">
        <button className="pl-3 pr-5">
          <i
            className={`fa-solid fa-magnifying-glass text-gray-400 ${
              isComponentVisible ? "text-sky-400" : "text-gray-400"
            }`}
          ></i>
        </button>
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-transparent outline-none"
        />
      </form>
    </div>
  )
}

export default SearchTwitter
