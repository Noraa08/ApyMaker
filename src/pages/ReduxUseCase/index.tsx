import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/atoms/Button'
import Counter from './Counter'

const ReduxUseCase = () => {
  const navigate = useNavigate()

  return (
    <>
    <Button theme={'outlined'} text="Counter" onClick={()=> navigate('/redux-use-case/counter')}/>
    <Counter />
    </>
  )
}

export default ReduxUseCase