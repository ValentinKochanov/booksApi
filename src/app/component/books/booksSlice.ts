import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { booksState } from "../../type/typeBooks"

const URL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = 'AIzaSyCs5FvM_Ahb8ns4__vwkSnts2ioFej8va8'
let apiUrl: string

const initialState: booksState = {
  setBooks: [],
  error: "",
  totalItems: -1,
  status: "idle",
  startIndex: 0,
}

interface queryData {
  q: string;
  category: string;
  sortedBy: string; 
}

export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async (data:queryData, { rejectWithValue }) => {
    let {q, category, sortedBy} = data
    try {
      if (category === 'all') {
        apiUrl = URL + q  + "&orderBy=" + sortedBy + "&maxResults=30" + 
          "&key=" + APIKEY
      } else {
          apiUrl = URL + q + "+subject:" + category + "&orderBy=" + 
            sortedBy + "&maxResults=30&key=" + APIKEY
      }
      const response = await axios.get(apiUrl)
      return response.data
    } catch(e:any) {
        return rejectWithValue(e.message)
    }
})

export const loadMoreBooks = createAsyncThunk('books/loadMoreBooks', 
  async (_, { rejectWithValue, getState }) => {
    try {
      let state: any = getState()
      let startIndex = state.books.startIndex
      let copyApiUrl = apiUrl
      copyApiUrl = copyApiUrl + "&startIndex=" + startIndex
      const response = await axios.get(copyApiUrl)
      return response.data
    } catch(e:any) {
      return rejectWithValue(e.message)
    }
  })

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    incrementStartIndex(state) {
      state.startIndex = state.startIndex + 30
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
        state.error = ''
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const data = action.payload
        state.setBooks = data.items
        state.totalItems = data.totalItems
        state.status = 'idle'
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'error'
      })
      .addCase(loadMoreBooks.pending, (state) => {
        state.status = 'loading'
        state.error = ''
      })
      .addCase(loadMoreBooks.fulfilled, (state, action) => {
        const data = action.payload
        state.setBooks.push(...data.items)
        state.totalItems = data.totalItems
        state.status = 'idle'
      })
      .addCase(loadMoreBooks.rejected, (state, action) => {
        state.error = action.payload
        state.status = 'error'
      })
  }
})

export const { incrementStartIndex } = booksSlice.actions
export default booksSlice.reducer