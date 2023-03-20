import React from 'react'
import {instructors} from '../constants'

import styles, {layout} from '../style'
import Button from '../components/Button'



const buttonText = 'Kom i gang';


function Welcome() {
  return (
    <div>
              <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                            <div className=" h-screen  bg-no-repeat bg-center   bg-hero-login  w-full">
                                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                                    <div class="flex items-center bg-opacity-0 justify-center min-h-screen">
                                            <div className="p-6 m-auto bg-opacity-0  rounded-md shadow-md ">
                                                    <div className={`${styles.flexCenter}`}>
                                                        <Button text={buttonText } />
                                                    </div>
                                            </div>      
                                    </div>
                                </div>
                            </div>
                    </div>
              </div>
    </div>
  )
}

export default Welcome
