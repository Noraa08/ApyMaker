import { Link, Outlet } from 'react-router-dom';
import tw from 'twin.macro';


const Layout = () => {

  return (
    <Container>
      <Nav>
        <Link className="mx-10 text-red-400" to="/">Go Back</Link>
        <Link to='/login-example/'>Website HomePage</Link>
        <Link to='/login-example/sign-up'>Sign Up</Link>
        <Link to='/login-example/sign-in'>Sign In</Link>
        <Link to='/login-example/admin'>Admin </Link>
        <Link to='/login-example/client'>Client</Link>
      </Nav>
      <Outlet />
    </Container>
  )
}

export default Layout

const Container = tw.div`
  w-full h-full 
  flex flex-col 
  items-center justify-center 
`

const Nav = tw.div`
  w-full 
  flex gap-5
  justify-center 
  py-3 
`

