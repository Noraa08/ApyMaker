import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../../ui/atoms/Button";
import { selectAllUsers, UserState } from "../users/usersSlice";
import { addNewPost } from "./postSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers) as UserState[]

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
    const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

    // after all form filled, be able to save then
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
    // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                // 直接调用unwrap()方法，会过滤掉除结果信息外的多余信息
                dispatch(addNewPost({ title, body:content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
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



