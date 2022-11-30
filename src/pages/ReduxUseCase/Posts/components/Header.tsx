import { Link } from "react-router-dom"
import tw from "twin.macro"

const Header = () => {
    return (
        <NavContainer>
            <nav>
                <ul className="flex gap-5 text-secondary ">
                    <li><Link to="/redux-use-case/blog-posts">Home</Link></li>
                    <li><Link to="/redux-use-case/blog-posts">Posts</Link></li>
                    <li><Link to="/redux-use-case/blog-posts/users">Users</Link></li>
                </ul>
            </nav>
        </NavContainer>
    )
}

export default Header

const NavContainer = tw.div`
    w-full 
    h-full
    flex flex-col items-end
    mt-20
`;