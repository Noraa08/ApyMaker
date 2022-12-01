import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <section>
            <h1>Website Home Page</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login-example/sign-in">Login</Link>
            <Link to="/login-example/sign-up">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/login-example">Home</Link>
            <Link to="/login-example/admin">Admin Page</Link>
            <Link to="/login-example/client">Client Page</Link>
        </section>
    )
}

export default HomePage