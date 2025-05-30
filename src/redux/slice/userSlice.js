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

export const fetchLogin= createAsyncThunk('user/fetchLogin', async (userData, {rejectWithValue}) => {
   const {data} = await axios.post('/login', userData)
   console.log(data)
   if(data.error){
      return rejectWithValue(data)
   }
   return data;
})

export const fetchCurrent = createAsyncThunk('user/fetchCurrent', async () => {
   const {data} = await axios.get('/current')
   console.log(data)
   // if(data.error){
   //    return rejectWithValue(data)
   // }
   return data;
})

const initialState = {
   items: {},
   condition: 'loading'
}

const userSlice = createSlice({
   name: 'userSlice',
   initialState,
   reducers: {
      logout: (state) => {
         state.items = {};
         window.localStorage.removeItem('token')
         console.log('cdscsdcdscd')
      }
   },
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

      builder.addCase(fetchLogin.pending, (state, {payload}) => {
         state.items = {},
         state.condition = 'loading'
      })
      builder.addCase(fetchLogin.fulfilled, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'uploading'
      })
      builder.addCase(fetchLogin.rejected, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'errors'
      })

      builder.addCase(fetchCurrent.pending, (state, {payload}) => {
         state.items = {},
         state.condition = 'loading'
      })
      builder.addCase(fetchCurrent.fulfilled, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'uploading'
      })
      builder.addCase(fetchCurrent.rejected, (state, {payload}) => {
         console.log(payload)
         state.items = payload,
         state.condition = 'errors'
      })
   }
})

export const userRedusers = userSlice.reducer;
export const {logout} = userSlice.actions;