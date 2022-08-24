import { React, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./alert";

export function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signup } = useAuth();
    const [error, setError] = useState();
    const handleChanges = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            //if(error.code === "auth/internal-error") setError('Correo invalido');
        }
    };

    return (
        <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} />}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-xm font-bolt mb-2">Email</label>
                    <input type="email" name="email" placeholder="yourEmail@company.com" onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:online-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-xm font-bolt mb-2">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="******" onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:online-none focus:shadow-outline"/>
                </div>

                <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-online">Registrarme</button>
                <p className="my-4 text-sm flex justify-bettween px-3">¿Ya tienes una cuenta?<Link to='/login'> Iniciar sesión</Link></p>
            </form>
        </div>
    )
}