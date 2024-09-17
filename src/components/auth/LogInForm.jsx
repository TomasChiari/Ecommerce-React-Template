
import React, { useContext, useState } from "react"
import "./LogInForm.css"
import { AuthContext } from "../../context/AuthContext.jsx"

export const LogInForm = () => {
    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    
        console.log(`user: ${username}, pass: ${password}`)
        login({
            user: username,
            pass: password
        })
    }

    return (
        <>
            <div className="login">
                <section className="login-header">
                    <h2 className="login-header_title">Ingresar</h2>
                </section>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Correo Electronico</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            value={username}
                            onChange={({target}) => setUsername(target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                    </div>

                    <button className="login-button" type="submit">Ingresar</button>
                </form>
            </div>
        </>
    )
}