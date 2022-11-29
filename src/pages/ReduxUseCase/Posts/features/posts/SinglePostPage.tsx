import { useSelector } from 'react-redux';

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import { Link, useParams } from 'react-router-dom';
import { selectPostById } from './postSlice';
import ReactionButtons from './ReactionButton';
import { RootState } from '../../../store';

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state:RootState) => selectPostById(state, Number(postId)))

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
                <Link className="italic text-pink-500 mr-5 " to={`/redux-use-case/blog-posts/post/edit/${post.id}`}>Edit Post</Link> 
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage

