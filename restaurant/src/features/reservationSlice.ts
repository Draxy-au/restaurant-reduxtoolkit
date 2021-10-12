import { createSlice, PayloadAction } from "@reduxjs/toolkit"

//typescript wants to know the type of object initialState is, so we make an interface with typing for this
interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        //typescript wants to know the type of action, toolkit has the type PayloadAction, and we use string
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)    
        }
    }
})

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;