import React, { useState } from 'react'
import tw from 'twin.macro';
import type { RootState } from '../store'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'

const Counter = () => {
  const [value, setValue] = useState<number>(0)

  const number = useSelector((state: RootState) => state.yumeCounter.number);
  const dispatch = useDispatch();

  const resetAll = () => {
    setValue(0)
    dispatch(reset())
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const addNumber = Number(e.target.value) || 0
    setValue(addNumber)

  }


  return (
    <Container>
      <p className="text-4xl">{number}</p>
      <br />

      <div>
        <button onClick={() => dispatch(increment())} className="text-4xl mr-4">+</button>
        <button onClick={() => dispatch(decrement())} className="text-4xl mr-4">-</button>
        <button onClick={() => dispatch(resetAll)} className="text-3xl">Reset</button>
      </div>
      <br />

      <div>
        <input type="text" value={value} onChange={onChange} className="text-black" />

        <button onClick={() => dispatch(incrementByAmount(value))} className="text-lg ml-4">Add Amount</button>
      </div>

    </Container>
  )
}

export default Counter


const Container = tw.div`
  w-screen h-screen
  flex flex-col justify-center items-center
`;