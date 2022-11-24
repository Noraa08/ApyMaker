import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/atoms/Button';

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-full h-screen justify-center relative">
      <div className="w-full h-auto flex justify-center pt-3 absolute top-0">
        <Button theme={'outlined'} text="Counter" onClick={() => navigate('/redux-use-case')} />
        <Button theme={'outlined'} text="Blog Posts" onClick={() => navigate('/redux-use-case/posts')} />
        <Button theme={'outlined'} text="" onClick={() => navigate('/redux-use-case')} />
      </div>
      {children}
    </div>
  )
}

export default Layout