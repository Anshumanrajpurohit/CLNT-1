import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      category: 'Spa',
      partner: 'Relax Studio',
      oldPrice: 1200,
      newPrice: 900,
    },
    {
      id: 2,
      category: 'Salon',
      partner: 'Beauty Hub',
      oldPrice: 800,
      newPrice: 600,
    },
    {
      id: 3,
      category: 'Gym',
      partner: 'Power House',
      oldPrice: 1500,
      newPrice: 1100,
    },
  ],
};

const recommendedSlice = createSlice({
  name: 'recommended',
  initialState,
  reducers: {
    addRecommendation: (state, action) => {
      state.items.push(action.payload);
    },
    removeRecommendation: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addRecommendation, removeRecommendation } = recommendedSlice.actions;

export default recommendedSlice.reducer;
