import { configureStore } from "@reduxjs/toolkit"

import steps from "./steps"
import userInformations from "./userInfo"

const store = configureStore({
  reducer: {
    steps,
    userInformations,
  },
})

export default store
