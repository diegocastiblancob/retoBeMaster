import { React } from "react";
import { useAuth } from "../context/authContext";
import { NavBar } from "./navBar";

export function ContentDetail() {

    const { loading } = useAuth();

    if (loading) return <h1>Cargando...</h1>

    return (
        <main className="bg-gray-100 h-full md:h-screen w-full">
            <section className="container mx-auto px-0 md:px-4 py-4">
                <NavBar/>
                <p>detalle de categoria</p>
            </section>
        </main>
    ); 
}