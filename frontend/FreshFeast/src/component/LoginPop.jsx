
import React, { useContext, useState } from 'react'
import { assets } from '../assets/food del assets/frontend_assets/assets'
import { DataContext } from '../context/ItemsContext'
import axios from "axios"


const LoginPop = ({ setShowlogin }) => {
    const [State, setState] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    console.log(data)
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const { url, token, setToken } = useContext(DataContext);

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if (State == 'Login') {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }
        const responce = await axios.post(newUrl, data);
        if (responce.data.success) {
            setToken(responce.data.token);
            localStorage.setItem("token", responce.data.token);
            setShowlogin(false)

        }

        else {
            alert(responce.data.message)
        }
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{State}</h2>
                    <img
                        src={assets.cross_icon}
                        alt="Close"
                        className="cursor-pointer w-6 h-6"
                        onClick={() => setShowlogin(false)}
                    />
                </div>

                <form className="space-y-4" onSubmit={onLogin}>
                    {State === "Signup" &&
                        <input
                            type="text"
                            placeholder='Enter your name'
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name='name'
                            value={data.name}
                            onChange={onChangeHandler}

                        />
                    }
                    <input
                        type="email"
                        placeholder='Enter your email id'
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name='email'
                        value={data.email}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name='password'
                        value={data.password}
                        onChange={onChangeHandler}
                    />

                    <button
                        type="submit"
                        className="w-full py-2 bg-yellow-300 font-semibold rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {State === "Signup" ? "Signup" : "Login"}
                    </button>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            required
                            className="form-checkbox"
                        />
                        <p className="text-sm text-gray-600">
                            By continuing, I agree to the terms of use & privacy policy
                        </p>
                    </div>

                    <p className="text-sm text-gray-600 text-center">
                        {State === "Login" ?
                            <>Create a new account? <span onClick={() => setState("Signup")} className="text-blue-500 cursor-pointer hover:underline">Click here</span></>
                            :
                            <>Already have an account? <span onClick={() => setState("Login")} className="text-blue-500 cursor-pointer hover:underline">Login here</span></>
                        }
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPop
