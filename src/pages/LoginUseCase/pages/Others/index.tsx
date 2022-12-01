import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({})
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData)
    }

    // Currying function
    const saveFormData = (dataType: string) => {
        return (e: any) => {
            setFormData({ ...formData, [dataType]: e.target.value })
            console.log(e.target.name)
        }
    }

    // normal method 1
    // const saveFormData = (e:any) => {
    //         setFormData({ ...formData, [e.target.name]: e.target.value })
    //         console.log(e.target.name)
    // }

    // normal method 2
    // const saveFormData = (dataType:string, e:any) => {
    //         setFormData({ ...formData, [dataType]: e.target.value })
    //         console.log(formData)
    // }

    return (
        <form onSubmit={onSubmit}>
            {/* normal method 1 */}
            {/* <input onChange={saveFormData} type='text' name='username'   />
            <input onChange={saveFormData} type='password' name='password' /> */}

            {/* normal method 2 */}
            {/* <input onChange={ (e:any )=> saveFormData('username', e )} type='text' name='username' />
            <input onChange={ (e:any )=> saveFormData('password', e )} type='password' name='password' /> */}

            {/* using currying function */}
            <input onChange={saveFormData('username')} type='text' name='username' />
            <input onChange={saveFormData('password')} type='password' name='password' />
            <input onChange={saveFormData('address')} type='text' name='address' />
            <input onChange={saveFormData('info')} type='text' name='info' />


            <button> login </button>
        </form>
    )
}

export default Login