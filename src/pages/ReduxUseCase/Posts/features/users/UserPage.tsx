import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RootState } from '../../../store'
import { IPost } from '../posts/postSlice'
import { selectPostsByUser, selectUserById } from '../users/usersSlice'

const UserPage = () => {
    const { userId } = useParams()

    // get the author name by userId
    const user = useSelector((state: RootState)=> selectUserById(state, Number(userId)))

    // get all the posts by author
    const postsForUser = useSelector((state: RootState) => selectPostsByUser(state, Number(userId)))

    const postTitles = postsForUser.map((post: IPost) => (
        <li key={post.id}>
            <Link to={`/redux-use-case/blog-posts/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

    return (
        <section>
            <h2>Author - {user?.name}</h2><br />

            <h3>Posts List</h3>
            <ol>{postTitles}</ol>
        </section>
    )
}

export default UserPage
