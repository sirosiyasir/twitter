import { createSlice } from "@reduxjs/toolkit"

// createSlice function'nının zorunlu paramatresi olan initialState'i ayrı bir variable'da tutuyorum
const initialState = {
  userInformations: null,
}
const userInformations = createSlice({
  name: "userInformations",
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.userInformations = action.payload
    },
  },
})

export const { setUserInformation } = userInformations.actions
export default userInformations.reducer
