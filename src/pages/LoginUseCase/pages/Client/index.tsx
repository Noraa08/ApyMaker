import { Link } from "react-router-dom"

const Editor = () => {
    return (
        <section>
            <h1>Client Page</h1>
            <br />
            <p>You must have been assigned an Client role.</p>
            <div className="flexGrow">
                <Link to="/login-example">Home</Link>
            </div>
        </section>
    )
}

export default Editor