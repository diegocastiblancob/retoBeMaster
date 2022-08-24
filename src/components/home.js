import { React } from "react";
import { useAuth } from "../context/authContext";

export function Home() {

    const {user, signout, loading} = useAuth();
    console.log(user);

    const handleSignout = async () => {
        await signout();
    };

    if(loading) return <h1>Cargando...</h1>

    return <div>
        <h1>Bienvenido {user.email}</h1>

        <button onClick={handleSignout}>Cerrar sesión</button>
    </div>
}