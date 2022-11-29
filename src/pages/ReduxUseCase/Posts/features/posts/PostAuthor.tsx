import { useSelector } from "react-redux";
import { selectAllUsers, UserState } from "../users/usersSlice";

interface Props { 
    userId: number;
}

const PostAuthor = ({ userId }:Props) => {
    const users = useSelector(selectAllUsers) as UserState[]

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor