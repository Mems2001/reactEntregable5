import { createSlice } from "@reduxjs/toolkit"

const trainerSlice = createSlice({

    name: 'trainerN' ,
    initialState: '',
    reducers: {
        setTrainerName: (state , action) => action.payload
    }

}
)

export const { setTrainerName } = trainerSlice.actions

export default trainerSlice.reducer