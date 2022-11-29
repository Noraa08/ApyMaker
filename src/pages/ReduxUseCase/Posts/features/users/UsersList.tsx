import { useSelector } from 'react-redux'
import { selectAllUsers, UserState } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    // get all authors
    const users = useSelector(selectAllUsers) as UserState[]

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/redux-use-case/blog-posts/users/${user.id}`}>{user.name}</Link>
        </li>
    ))

    return (
        <section>
            <h2>Users</h2><br />

            <ul>{renderedUsers}</ul>
        </section>
    )
}

export default UsersList