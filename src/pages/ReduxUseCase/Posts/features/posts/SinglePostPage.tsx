import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { IPost, PostState, selectPostById } from './postSlice';
import { RootState } from '../../../store';

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state:RootState) => {
        // selectPostById(state, 2)
        console.log( state.yumePosts.posts?.find((post: { id: number }) => post.id === 2 ))
    })

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <button onClick={post} />
        </article>
    )
}

export default SinglePostPage

