import React from "react"

function SignUp() {
  return (
    <div className="bg-gray-300 grid h-screen place-items-center">
      <div className="card bg-white relative">
        <div className="m-2 text-center">
          <i class="fa-solid fa-xmark absolute left-4"></i>
          <i class="fa-brands fa-twitter text-blue-400 text-4xl"></i>
        </div>
        <h1 className="text-center m-4 text-3xl font-bold">
          Twitter'a Giriş Yap
        </h1>
        <div className="border-gray-500 border-2 w-72 rounded-3xl mx-auto my-3 px-4 py-2">
          <p className="text-center">
            <i class="fa-brands fa-google pr-2"></i>Google ile oturum açın
          </p>
        </div>
        <div className="border-gray-500 border-2 w-72 rounded-3xl mx-auto my-3 px-4 py-2">
          <p className="text-center">
            <i class="fa-brands fa-apple pr-2"></i>Apple ile giriş yapın
          </p>
        </div>
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          <div className="w-36 bg-gray-300 h-1 text-center mx-auto my-1"></div>
          <p className="text-center">veya</p>
          <div className="w-36 bg-gray-300 h-1 text-center mx-auto my-1"></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
