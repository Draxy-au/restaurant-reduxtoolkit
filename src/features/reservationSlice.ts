import { createSlice, PayloadAction } from "@reduxjs/toolkit"

//typescript wants to know the type of object initialState is, so we make an interface with typing for this
interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: ["Selena"]
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        //typescript wants to know the type of action, toolkit has the type PayloadAction, and we use string
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)    
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)    
        }
    }
})

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;