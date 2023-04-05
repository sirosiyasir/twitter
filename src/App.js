// react router dom kullanarak, sayfalar arasında kolayca geçiş yapabilmeyi sağlıyorum
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Toastify'ı import ediyorum
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
