

import { useState } from 'react'

export function useForm() {
    const [form, setForm] = useState({})
    const handlechange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return [form, handlechange]
}






































// import {useState} from 'react'


// export const useForm = () => {
//     const [form, setForm] = useState({})

//     const handlechange = (e) => {
//         setForm({...form, [e.target.name]: e.target.value})
//     }
//     return [form, handlechange]
// }