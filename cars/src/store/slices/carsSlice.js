import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    searchTermChange(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption
      // action.payload === {name: String, 'cost': Number}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption
      // action.payload === the id of the car we want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { searchTermChange, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
