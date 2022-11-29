import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsError, getPostsStatus, IPost, PostState, selectAllPosts } from './postSlice';

import PostAuthor from './PostAuthor';
import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';

const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts) as IPost[]
    const postsStatus = useSelector(getPostsStatus) as PostState
    const error = useSelector(getPostsError) as any

    const navigate = useNavigate();

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])


    // use slice() make a copy of original posts
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) =>(
        <article key={post.id} className="w-96 h-72 relative">
            
            <Link className="text-4xl font-bold" to={`/redux-use-case/posts/${post.id}`}>{post.title.substring(0, 20)}</Link>

            <button onClick={() =>
                { return navigate(`/redux-use-case/posts/${post.id}`)}
                // {
                //     console.log(`/redux-use-case/posts/${post.id}`)
                // }
                  }>xx</button>

            <p>{post.body.substring(0, 40)}</p>

            <div className="absolute bottom-0">
                <div className="w-full flex justify-between ">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <ReactionButton post={post} />
            </div>
        </article>
    ))



    return (
        <section className="w-full h-full">
            <h2>Posts</h2>
            {
                postsStatus === 'loading' ?
                    <p>Loading...</p>
                    :
                    postsStatus === 'succeeded' ?
                        <PostsContainer>{renderedPosts}</PostsContainer>
                        :
                        <p>{error}</p>
            }
        </section>

    )
}

export default PostsList

const PostsContainer = tw.div`
    w-full 
    flex flex-wrap justify-center items-center
`;