function SearchTwitter() {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="p-3 mt-2 mb-5 rounded-3xl bg-gray-100">
      <form onSubmit={onSubmit} className="flex">
        <button className="pl-3 pr-5">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
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
