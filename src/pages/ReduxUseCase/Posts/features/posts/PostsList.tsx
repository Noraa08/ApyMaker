import React, { useEffect } from 'react'
import tw from 'twin.macro';

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, getPostsError, getPostsStatus, IPost, PostState, selectAllPosts } from './postSlice';

import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';
import PostAuthor from './PostAuthor';

const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts) as IPost[]
    const postsStatus = useSelector(getPostsStatus) as PostState
    const error = useSelector(getPostsError) as any

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])

    // use slice() make a copy of original posts
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) =>
        <article key={post.id} className="w-96 h-72 relative">
            <h3>{post.title.substring(0, 20)}</h3>
            <p>{post.body.substring(0, 40)}</p>

            <div className="absolute bottom-0">
                <div className="w-full flex justify-between ">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <ReactionButton post={post} />
            </div>

        </article>
    )



    return (
        <>
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
        </>

    )
}

export default PostsList

const PostsContainer = tw.div`
    w-full 
    flex flex-wrap justify-center items-center
`;