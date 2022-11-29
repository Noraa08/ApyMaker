import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import Header from './Header';

const BlogLayout = () => {
    return (
        <Container >
            <Header />
            <Outlet />
        </Container>
    )
}

export default BlogLayout

const Container = tw.div`
    w-full 
    h-full
    flex flex-col items-center
`;