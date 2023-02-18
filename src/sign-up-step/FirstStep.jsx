import { useState, useEffect } from "react"
// context
// useNavigate kullanarak, bir event sayesinde bir sayfadan başka bir sayfaya geçişi sağlayabiliyorum
import { useNavigate } from "react-router-dom"
// props'ları kullanarak function'ları bir sayfadan başka bir sayfaya aktarıyorum
function FirstStep(props) {
  const [buttonActive, setButtonActive] = useState(true)
  const [MailOrPhone, setMailOrPhone] = useState(true)
  const [information, setInformation] = useState({
    /* name: "",
    eMailOrPhone: "",
    day: "",
    month: "",
    year: "", */
  })
  /* const { eMailOrPhone, name } = information */
  const date = new Date()
  const year = date.getFullYear()
  const navigate = useNavigate()

  const onChange = (e) => {
    setInformation((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
    if (("name" in information) & ("day" in information)) {
      setButtonActive(false)
    } else if (!("name" in information)) {
      setButtonActive(true)
    }
  }

  const useEmailOrPhone = () => {
    setMailOrPhone((prevState) => {
      return !prevState
    })
  }

  // iyi bir state paylaşımı için useEffect kullanıyorum. Bu sayede yalnızca information değiştiğinde render edilecek
  useEffect(() => {
    props.setUserInformation(information)
  }, [information, props])

  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white w-[37rem] h-[38rem] relative">
        <i
          onClick={() => {
            navigate("/")
          }}
          className="text-black fa-solid fa-xmark absolute left-4 top-4 cursor-pointer"
        ></i>
        <h2 className="text-black absolute left-12 top-2 font-semibold text-xl">
          Adım 1/4
        </h2>
        <h1 className="text-black text-left mx-auto mt-16 pr-10 text-3xl font-bold w-[29.5rem]">
          Hesabını oluştur
        </h1>
        <div className="mx-auto mt-8 mb-0 pb-0 text-center">
          <input
            type="text"
            onChange={onChange}
            id="name"
            className="text-black bg-white border border-gray-300 w-[29rem] h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400"
            placeholder="İsim"
          />
          <input
            type={MailOrPhone ? "email" : "number"}
            onChange={onChange}
            id="eMailOrPhone"
            className="text-black bg-white border border-gray-300 mt-6 w-[29rem] h-14 pl-1 rounded focus:outline-none focus:border-blue-400 block focus:placeholder-blue-400"
            placeholder={MailOrPhone ? "E-posta" : "Telefon"}
          />
          <p
            className="text-sky-500 hover:underline cursor-pointer text-right my-3 w-28 ml-auto"
            onClick={useEmailOrPhone}
          >
            {!MailOrPhone ? "E-posta" : "Telefon"} kullan
          </p>
          <p className="text-black font-bold text-left">Doğum tarihi</p>
          <p className="text-gray-500 text-left w-96 text-sm mt-1 mb-4">
            Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil
            hayvan veya başka bir şey için olsa bile kendi yaşını doğrulaman
            gerekir.
          </p>
          <div className="inline relative">
            <select
              onChange={onChange}
              id="month"
              className="text-black bg-white border border-gray-300 pl-2 pt-4 w-48 h-14 rounded focus:outline-none focus:border-blue-400 cursor-pointer appearance-none"
            >
              <option value=""></option>
              <option value="Ocak">Ocak</option>
              <option value="Şubat">Şubat</option>
              <option value="Mart">Mart</option>
              <option value="Nisan">Nisan</option>
              <option value="Mayıs">Mayıs</option>
              <option value="Haziran">Haziran</option>
              <option value="Temmuz">Temmuz</option>
              <option value="Ağustos">Ağustos</option>
              <option value="Eylül">Eylül</option>
              <option value="Ekim">Ekim</option>
              <option value="Kasım">Kasım</option>
              <option value="Aralık">Aralık</option>
            </select>
            <p className="text-gray-600 text-xs absolute bottom-6 left-2">Ay</p>
            <i className="fa-solid fa-angle-down absolute bottom-[-0.2rem] right-4 text-xl text-gray-500"></i>
          </div>
          <div className="inline relative">
            <select
              onChange={onChange}
              id="day"
              className="text-black bg-white border border-gray-300 mx-3 pl-2 pt-4 w-28 h-14 rounded focus:outline-none focus:border-blue-400 cursor-pointer appearance-none"
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
            <p className="text-gray-600 text-xs absolute bottom-6 left-[20px]">
              Gün
            </p>
            <i className="fa-solid fa-angle-down absolute bottom-[-0.2rem] right-6 text-xl text-gray-500"></i>
          </div>
          <div className="inline relative">
            <select
              onChange={onChange}
              id="year"
              className="text-black bg-white border border-gray-300 pl-2 pt-4 w-36 h-14 rounded focus:outline-none focus:border-blue-400 cursor-pointer appearance-none"
            >
              <option value=""></option>
              <option value={year}>{year}</option>
              <option value={year - 1}>{year - 1}</option>
              <option value={year - 2}>{year - 2}</option>
              <option value={year - 3}>{year - 3}</option>
              <option value={year - 4}>{year - 4}</option>
              <option value={year - 5}>{year - 5}</option>
              <option value={year - 6}>{year - 6}</option>
              <option value={year - 7}>{year - 7}</option>
              <option value={year - 8}>{year - 8}</option>
              <option value={year - 9}>{year - 9}</option>
              <option value={year - 10}>{year - 10}</option>
              <option value={year - 11}>{year - 11}</option>
              <option value={year - 12}>{year - 12}</option>
              <option value={year - 13}>{year - 13}</option>
              <option value={year - 14}>{year - 14}</option>
              <option value={year - 15}>{year - 15}</option>
              <option value={year - 16}>{year - 16}</option>
              <option value={year - 17}>{year - 17}</option>
              <option value={year - 18}>{year - 18}</option>
              <option value={year - 19}>{year - 19}</option>
              <option value={year - 20}>{year - 20}</option>
              <option value={year - 21}>{year - 21}</option>
              <option value={year - 22}>{year - 22}</option>
              <option value={year - 23}>{year - 23}</option>
              <option value={year - 24}>{year - 24}</option>
              <option value={year - 25}>{year - 25}</option>
              <option value={year - 26}>{year - 26}</option>
              <option value={year - 27}>{year - 27}</option>
              <option value={year - 28}>{year - 28}</option>
              <option value={year - 29}>{year - 29}</option>
              <option value={year - 30}>{year - 30}</option>
              <option value={year - 31}>{year - 31}</option>
              <option value={year - 32}>{year - 32}</option>
              <option value={year - 33}>{year - 33}</option>
              <option value={year - 34}>{year - 34}</option>
              <option value={year - 35}>{year - 35}</option>
              <option value={year - 36}>{year - 36}</option>
              <option value={year - 37}>{year - 37}</option>
              <option value={year - 38}>{year - 38}</option>
              <option value={year - 39}>{year - 39}</option>
              <option value={year - 40}>{year - 40}</option>
              <option value={year - 41}>{year - 41}</option>
              <option value={year - 42}>{year - 42}</option>
              <option value={year - 43}>{year - 43}</option>
              <option value={year - 44}>{year - 44}</option>
              <option value={year - 45}>{year - 45}</option>
              <option value={year - 46}>{year - 46}</option>
              <option value={year - 47}>{year - 47}</option>
              <option value={year - 48}>{year - 48}</option>
            </select>
            <p className="text-gray-600 text-xs absolute bottom-6 left-2">
              Yıl
            </p>
            <i className="fa-solid fa-angle-down absolute bottom-[-0.2rem] right-5 text-xl text-gray-500"></i>
          </div>

          <button
            className="bg-black w-[28rem] h-12 rounded-3xl mx-auto mt-16 mb-0 px-4 py-2 text-white font-bold block hover:bg-slate-800 disabled:bg-gray-500"
            disabled={buttonActive}
            onClick={() => {
              props.setFirstStep(false)
              props.setSecondStep(true)
            }}
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  )
}

export default FirstStep
