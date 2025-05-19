import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchRegister = createAsyncThunk('user/fetchRegister', async (userData, {rejectWithValue}) => {
   const {data} = await axios.post('/register', userData)
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
   reducer: {},
   extraReducers: builder => {
      builder.addCase(fetchRegister.pending, (state, {payload}) => {
         state.items = {},
         state.condition = 'loading'
      })
      builder.addCase(fetchRegister.fulfilled, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'uploading'
      })
      builder.addCase(fetchRegister.rejected, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'errors'
      })
   }
})

export const userRedusers = userSlice.reducer;