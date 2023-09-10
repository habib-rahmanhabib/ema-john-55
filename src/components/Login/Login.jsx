import React, { useContext, useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

   
const {signInEmailUser}= useContext(AuthContext)

const signInHandler =(event)=>{
      event.preventDefault()

      const form =event.target;

      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      signInEmailUser(email, password)
      .then(result=>{
        const user = result.user
        console.log(user)
      })
      .catch(error=>{
        console.log("error find:", error.message)
      })

      form.reset()

}

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={signInHandler}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                        >
                            Log In
                        </button>
                    </div>

                    <div>
                        <p><small> <Link to='/signup' >First creat a account? </Link> </small></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;