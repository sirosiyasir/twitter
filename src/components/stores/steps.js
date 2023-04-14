import { createSlice } from "@reduxjs/toolkit"

// createSlice function'nının zorunlu paramatresi olan initialState'i ayrı bir variable'da tutuyorum
const initialState = {
  firstStep: false,
  secondStep: false,
  thirdStep: false,
  fourthStep: false,
  fifthStep: false,
}

const steps = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setFirstStep: (state, action) => {
      state.firstStep = action.payload
    },
    setSecondStep: (state, action) => {
      state.secondStep = action.payload
    },
    setThirdStep: (state, action) => {
      state.thirdStep = action.payload
    },
    setFourthStep: (state, action) => {
      state.fourthStep = action.payload
    },
    setFifthStep: (state, action) => {
      state.fifthStep = action.payload
    },
  },
})

export const {
  setFirstStep,
  setSecondStep,
  setThirdStep,
  setFourthStep,
  setFifthStep,
} = steps.actions
export default steps.reducer
