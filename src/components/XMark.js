function XMark(props) {
  return (
    <div>
      <i
        onClick={props.onClick}
        className="fa-solid fa-xmark absolute left-1 top-[7px] text-black cursor-pointer rounded-full hover:bg-gray-200 p-2"
      ></i>
    </div>
  )
}

export default XMark
