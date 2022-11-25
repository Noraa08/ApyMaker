import React from 'react'
import tw from 'twin.macro';

import { useSelector, useDispatch } from "react-redux";
import { PostState, selectAllPosts } from './features/posts/postSlice';

import Layout from '../components/Layout'
import { Marginer } from '../../../ui/atoms/Marginer';
import AddPostForm from './features/posts/AddPostForm';



const Posts = () => {
    const posts = useSelector(selectAllPosts) as PostState[]

    const renderedPosts = posts.map((post) =>
        <article key={post.id} className="w-96 h-48">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    )

    return (
        <Layout>
            <Container>
                <Marginer direction="vertical" margin="5em" />
                <h2>Posts</h2>
                <PostsContainer>
                    {renderedPosts}
                </PostsContainer>

                <AddPostForm />
            </Container>
        </Layout>
    )
}

export default Posts


const Container = tw.div`
    w-full 
    h-full
    flex flex-col items-center
`;
const PostsContainer = tw.div`
    w-full 
    flex flex-wrap justify-center items-center
`;