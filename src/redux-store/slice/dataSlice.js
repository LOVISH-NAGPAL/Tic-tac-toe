import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value1: [],
    value2:[],
  },
  reducers: {
    setData1: (state, action) => {
      state.value1.push(action.payload) ;
    },
    setData2: (state, action) => {
        state.value2.push(action.payload) ;
    },
    clearData: (state) => {
      state.value1 = [];
      state.value2 = [];
    },
  },
});

// Export actions and reducer
export const { setData1,setData2 ,clearData } = dataSlice.actions;
export default dataSlice.reducer;
