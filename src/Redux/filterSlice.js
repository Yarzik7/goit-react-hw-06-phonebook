import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterContacts: (_, { payload }) => payload,
  },
});

export const { changeFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
