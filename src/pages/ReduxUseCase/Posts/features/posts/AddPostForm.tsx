import { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import styled from "styled-components";

import { postAdded } from "./postSlice";
import { selectAllUsers, UserState } from "../users/usersSlice";
import Button from "../../../../../ui/atoms/Button";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers) as UserState[]

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
    const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

    
    const onSavePostClicked = (e:ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (title && content) {
            dispatch(postAdded(title, content, userId))
        }
        setTitle('')
        setContent('')
        setUserId('')
    }

    // after all form filled, be able to save then
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
   

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



