import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export function UserLogin(props) {
// const [form, setForm] = useState({})

// const handlechange = (e) => {
//     setForm({[e.target.name]: e.target.value})
// }

const [form, handlechange] = useForm()

const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSearch(form)
}

    return (
        <form onSubmit={handleSubmit} >
            <label id='search' htmlFor='search'>
                Search Here
                <input
                    name='search'
                    onChange={handlechange}
                    value={form.search}
                    placeholder='Search'
                />
            </label>
            
            <button type='submit'>Submit</button>
        </form>
    )
}