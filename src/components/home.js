import { React } from "react";
import { useAuth } from "../context/authContext";
import { NavBar } from "./navBar";
import categories from '../data/categories'
import Card from "./card";

export function Home() {

    const { loading } = useAuth();

    if (loading) return <h1>Cargando...</h1>

    return (
        <main className="bg-gray-100 h-full md:h-screen w-full">
            <section className="container mx-auto px-0 md:px-4 py-4">
                <NavBar/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
                    {categories.map((element, index) => (
                        <Card
                            key={index}
                            title={element.title}
                            likes={element.likes}
                            order={index + 1}
                            image={element.image}
                        />
                    ))}
                </div>
            </section>
        </main>
    ); 
}