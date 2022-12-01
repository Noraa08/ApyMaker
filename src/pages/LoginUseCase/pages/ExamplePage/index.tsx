import { Link } from "react-router-dom"

const ExamplePage = () => {
    return (
        <section>
            <h1>Pages allows all users to access</h1>
            <br />
            <p>You must have been assigned an user role(all logined roles).</p>
            <div className="flexGrow">
                <Link to="/login-example">Home</Link>
            </div>
        </section>
    )
}

export default ExamplePage