import React from 'react'
import styles, { layout } from '../style'
import Button from '../components/Button'
const buttonText = 'Log ind';
import { instructors } from '../constants'



const Login = () => {
    return (
        <div> 
            <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>


                <div className=" h-screen  bg-cover  bg-hero-login ">
                    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                        <div class="flex items-center bg-opacity-0 justify-center min-h-screen max-w-[370px] ">
                            <div className="w-full p-6 m-auto bg-opacity-0  rounded-md shadow-md ">
                                <h1 className="text-3xl font-semibold text-center text-secondary bg-opacity-0 ">
                                    Log ind
                                </h1>
                                <form className="mt-6">
                                    <div className="mb-2">
                                        <input
                                            type="email"
                                            placeholder='brugernavn'
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="password"
                                            placeholder='adgangskode'
                                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>
                                    <a
                                        href="#"
                                        className="text-xs text-purple-600 hover:underline"
                                    >
                                    </a>
                                    <div className={`${styles.flexCenter}`}>
                                        <Button text={buttonText} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Login