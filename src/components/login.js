import { React, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signin } = useAuth();
    const [error, setError] = useState();
    const handleChanges = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setError('');
        try {
            await signin(user.email, user.password);
            navigate('/');
        } catch (error) {
            console.log(error.message);
            //setError(error.message);
            if(error.code === "auth/internal-error") setError('Correo invalido');
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="yourEmail@company.com" onChange={handleChanges} />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="******" onChange={handleChanges} />

                <button type="submit" onClick={handleSubmit}>Iniciar sesión</button>

            </form>
        </div>
    )
}