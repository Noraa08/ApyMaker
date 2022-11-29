import { Route, Routes } from 'react-router-dom';
import BlogLayout from './components/BlogLayout';

import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import UserPage from './features/users/UserPage';
import UsersList from './features/users/UsersList';



const BlogPosts = () => {
    return (
        <Routes>
            <Route path="/" element={<BlogLayout />}>

                <Route index element={<PostsList />} />

                <Route path="post">
                    <Route path=":postId" element={<SinglePostPage />} />
                    <Route path="add" element={<AddPostForm />} />
                    <Route path="edit/:postId" element={<EditPostForm />} />
                </Route>

                <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<UserPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default BlogPosts



