import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchSend = createAsyncThunk('oder/fetchSend', async (userData, {rejectWithValue}) => {
   const {data} = await axios.post('/request', userData)
   console.log(data)
   if(data.error){
      return rejectWithValue(data)
   }
   return data;
})


const initialState = {
   items: {},
   condition: 'loading'
}

const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchSend.pending, (state, {payload}) => {
         state.items = {},
         state.condition = 'loading'
      })
      builder.addCase(fetchSend.fulfilled, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'uploading'
      })
      builder.addCase(fetchSend.rejected, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'errors'
      })
   }
})

export const userRedusers = userSlice.reducer;
export const {logout} = userSlice.actions;