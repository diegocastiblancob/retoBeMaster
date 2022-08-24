import { React } from "react";
import { useAuth } from "../context/authContext";
import NavItem from "./navItem";

export function NavBar() {

    const { user, signout } = useAuth();

    const handleSignout = async () => {
        await signout();
    };

    return (
        <nav className="flex justify-between items-center bg-white">
            <a href="/">Logo.</a>
            <ul className="md:static fixed bottom-0 top-12
                           md:flex md:space-x-7 items-center
                           md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12
                           md:text-gray-500 text-white md:space-y-0 space-y-0 p-2">
                <NavItem content="Home" href="/" />
                <NavItem content="Categorias" href="/" />
                <NavItem content={user.email} href="/" />
                <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                onClick={handleSignout}>Salir</button>
            </ul>
        </nav>
    )
}