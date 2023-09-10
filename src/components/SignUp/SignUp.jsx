import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const SignUp = () => {

    const [error, setError] = useState('')
    const {  creatEmailUser } = useContext(AuthContext)
   
    const submitHandler = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)

        if (password !== confirm) {
            setError('password dos not match')
            return
        }
        else if (password.length < 6) {
            setError('should give password 6 carecter')
        }

      
        creatEmailUser(email, password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })


    }





    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white py-8 px-24 rounded shadow-md ">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id=""
                            name="email"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    {/* first password */}

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id=""
                            name="password"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* confirm password */}


                    <div className="mb-4">
                        <label htmlFor="confirm" className="block text-gray-600">
                            confirm Password
                        </label>
                        <input
                            type="password"
                            id=""
                            name="confirm"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* signup button */}

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* link */}
                    <div>
                        <p><small> <Link to='/login' > Already you have account? </Link> </small></p>
                    </div>

                    <p className='text-red-400 '> {error} </p>
                </form>
            </div>
        </div>

    );
};

export default SignUp;