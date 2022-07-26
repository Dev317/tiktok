import React from 'react'
import styles from '../styles/Signup.module.css'
import { useState } from 'react'


const Signup = ({ signup }) => {
    const [userName, setUserName] = useState()
    const [profile, setProfile] = useState()

    const signUpClicked = () => {
        signup(userName, profile)
    }

  return (
    <div className={styles.authContainer}>
        <h1 className={styles.title}>Sign up to use Tiktok</h1>
        <div className={styles.signupForm}>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Username
                </div>

                <div className={styles.inputContainer}>
                    <input
                            className={styles.input}
                            type='text'
                            onChange={e => setUserName(e.target.value)}>
                    </input>
                </div>
            </div>

            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Profile image
                </div>

                <div className={styles.inputContainer}>
                    <input
                            className={styles.input}
                            type='text'
                            onChange={e => setProfile(e.target.value)}>
                    </input>
                </div>
            </div>
        </div>

        <div
            className={styles.loginButton}
            onClick={signUpClicked}
        >
            Sign up
        </div>
    </div>
  )
}

export default Signup