import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../../../../ui/atoms/Button';
import { RootState } from '../../../store';

import { selectAllUsers, UserState } from "../users/usersSlice";
import { deletePost, IPost, selectPostById, updatePost } from './postSlice';

const EditPostForm = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state:RootState) => selectPostById(state, Number(postId))) as IPost
    const users = useSelector(selectAllUsers) as UserState[]

    // initialize info with existing content
    const [title, setTitle] = useState<string>(post.title)
    const [content, setContent] = useState<string>(post.body)
    const [userId, setUserId] = useState<number>(post.userId)
    const [requestStatus, setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    // this has to be after all the hooks, otherwise will get error
    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)
    const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(Number(e.target.value))

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSavePostClicked = () => {
        const editedPost:any = { id: post.id, title, body: content, userId, reactions: post.reactions }

        if (canSave) {
            try {
                setRequestStatus('pending')
                dispatch(updatePost(editedPost)).unwrap()

                setTitle('')
                setContent('')
                setUserId(0)
                navigate(`/redux-use-case/blog-posts/post/${postId}`)
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setRequestStatus('idle')
            }
        }
    }

    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >{user.name}</option>
    ))

    const onDeletePostClicked = () => {
        const deletedPost:any = { id: post.id }
        try {
            setRequestStatus('pending')
            dispatch(deletePost(deletedPost)).unwrap()

            setTitle('')
            setContent('')
            // setUserId()
            navigate('/redux-use-case/blog-posts')
        } catch (err) {
            console.error('Failed to delete the post', err)
        } finally {
            setRequestStatus('idle')
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
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
                    text="Update Post"
                    onClick={onSavePostClicked}
                />
                <button className="deleteButton"
                    type="button"
                    onClick={onDeletePostClicked}
                >
                    Delete Post
                </button>
            </form>
        </section>
    )
}

export default EditPostForm