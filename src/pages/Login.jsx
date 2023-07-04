import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { useFetch } from '../utils/fetch-utils'

export default function Login() {
    const message = useSearchParams()[0].get('message')
    const [loginFormData, setLoginFormData] = useState({ email: '', password: '' })

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await useFetch('/api/login', 
            { method: 'POST', body: JSON.stringify(loginFormData) })

        console.log(data)
    }

    return (
        <div className='page login'>
            <div>
                <h1>Sign in to your account</h1>
                { message && <h4 className='login--message'>{message} </h4> }
            </div>
            
            <form className='login-form' onSubmit={handleSubmit}>
                <input
                    name='email'
                    type='email'
                    placeholder='Email address'
                    value={loginFormData.email}
                    onChange={handleChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={loginFormData.password}
                    onChange={handleChange}
                />
                <button>Sign in</button>
            </form>

            <p>Don’t have an account? <Link to='/'>Create one now</Link></p>
        </div>
    )
}


// useFetch('/api/login', { method: 'POST', body: JSON.stringify(creds) })