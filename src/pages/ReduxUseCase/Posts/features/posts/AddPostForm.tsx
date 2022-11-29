import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../../../../ui/atoms/Button";
import { selectAllUsers, UserState } from "../users/usersSlice";
import { addNewPost } from "./postSlice";

const AddPostForm = () => {
    const navigate = useNavigate()
    
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers) as UserState[]

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [userId, setUserId] = useState<string>('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
    const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

    // after all form filled, be able to save then
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
    // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onSavePostClicked = () => {
        const addedPost:any = { title, body:content, userId: Number(userId)}
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                // 直接调用unwrap()方法，会过滤掉除结果信息外的多余信息
                dispatch(addNewPost(addedPost)).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/redux-use-case/blog-posts`)
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }
   

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <Button
                    theme={canSave ? "filled" : "disabled"}
                    text="Save Post"
                    onClick={onSavePostClicked}
                />
            </form>
        </section>
    )
}
export default AddPostForm



