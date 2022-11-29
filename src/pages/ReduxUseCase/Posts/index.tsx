import tw from 'twin.macro';

import { Marginer } from '../../../ui/atoms/Marginer';
import Layout from '../components/Layout';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';



const Posts = () => {
    return (
            <Container>
                <Marginer direction="vertical" margin="5em" />
                <AddPostForm />
                <PostsList />
            </Container>
    )
}

export default Posts


const Container = tw.div`
    w-full 
    h-full
    flex flex-col items-center
`;
