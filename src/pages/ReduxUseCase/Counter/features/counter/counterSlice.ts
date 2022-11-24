import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface ConterState {
    number: number
}

const initialState = { number: 0 } as ConterState

const counterSlice = createSlice({
    name: 'yuCounter',
    initialState,
    reducers: { 
        increment(state){
            state.number += 1
        },
        decrement(state){
            state.number--
        },
        reset(state){
            state.number = 0
        },
        incrementByAmount(state, action: PayloadAction<number>){
            state.number += action.payload 
        }
    }
})

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer