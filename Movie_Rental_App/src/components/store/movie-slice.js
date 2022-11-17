import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieslice",
  initialState: {items: [
    {
      id: "p1",
      image: "https://tse3.mm.bing.net/th?id=OIP.Ddm7ith2lEELb7ZGtQkTTgHaKj&pid=Api&P=0",
      rating: "1/5",
      title: "Titanic",
      description: "Jack and Rose travel together on a ship and find love.",
      fee: 4
    },
    {
      id: "p2",
      image: "https://tse2.mm.bing.net/th?id=OIP.nujhrxL6gAZsUqJtviNxpQHaLH&pid=Api&P=0",
      rating: "4/5",
      title: "American Gangster",
      description: "Denzel with an amazing performance again playing as the drug lord.",
      fee: 5,
    },
    {
      id: "p3",
      image: "https://tse2.mm.bing.net/th?id=OIP.Bcvo6jDFy14gJaGJiYfRHQHaLH&pid=Api&P=0",
      rating: "4/5",
      title: "Click",
      description: "Adam sandler plays a father trying to provide the best for his family.",
      fee: 5,
    },
    {
      id: "p4",
      image: "https://tse2.mm.bing.net/th?id=OIP.TPz6IcgC37QKZjQObQ2E-AHaLH&pid=Api&P=0",
      rating: "4/5",
      title: "Heat",
      description: "An incredible movie filled with action until the end.",
      fee: 6,
    },
    {
      id: "p5",
      image: "https://tse3.mm.bing.net/th?id=OIP.evf0RE0PPIFbd-LeLMwSSgHaLk&pid=Api&P=0",
      rating: "4/5",
      title: "Scarface",
      description: "Al Pacino the great, plays tony montana with an amazing performance again.",
      fee: 5,
    },
    {
      id: "p6",
      image: "https://tse1.mm.bing.net/th?id=OIP.1W9lK2PZXEi-xxM5P1cNqwHaKZ&pid=Api&rs=1&c=1&qlt=95&w=68&h=96",
      rating: "4/5",
      title: "Training Day",
      description: "Denzel plays a corrupt cop in this thriller action movie.",
      fee: 5,
    },
  ]},
  reducers: {
    
  },
});

// export the actions.
export const movieSliceAction = movieSlice.actions; 
// export the reducer.
export const movieSliceReducer = movieSlice.reducer;
