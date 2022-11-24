import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <StyledButton onClick={()=> navigate('/hooks-use-case')}>Hook Use Cases </StyledButton>
        <br />
        <TailwindButton onClick={()=> navigate('/redux-use-case')}>Redux Use Cases </TailwindButton>
        <br />
        <ConditionalButton onClick={()=> navigate('/login-example')} isRed={false} >Login Examples</ConditionalButton>
      </div>

    </div>
  )
}

// still works despite importing from twin.macro
const StyledButton = styled.button`
      background: red;
      color: white;
      font-size: 1em;
      text-align: center;
      padding: 0.25em 1em;
      border: 2px solid black;
    `;

const TailwindButton = tw.button`
      bg-red-500
      hover:bg-red-700
      text-white
      font-bold
      py-2
      px-4
      border
      border-black
      rounded
    `;

const ConditionalButton = styled.button(({ isRed }: any) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-primary hover:bg-secondary`,
  tw`
        text-white
        font-bold
        py-2
        px-4
        border
        border-black
        rounded
      `,
]);

export default Home