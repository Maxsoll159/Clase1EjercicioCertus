import { CardPersonaje } from "./components/CardPersonaje";
import { Navbar } from "./components/Navbar"

export const Principal = () => {
    const personajes = [{ nombre: "Naruto Uzumaki", edad: 32, aldea: "Konoha", rango: "Séptimo Hokage", afiliación: "Equipo 7", jutsu_destacado: "Rasengan", estado: "Vivo", imagen: "naruto.webp", }, { nombre: "Sasuke Uchiha", edad: 32, aldea: "Konoha", rango: "Nómada", afiliación: "Antigua Equipo 7, Taka", jutsu_destacado: "Chidori", estado: "Vivo", imagen: "sasuke.webp", }, { nombre: "Sakura Haruno", edad: 32, aldea: "Konoha", rango: "Kunoichi Médico", afiliación: "Equipo 7", jutsu_destacado: "Byakugou no Jutsu", estado: "Viva", imagen: "sakura.webp", }, { nombre: "Kakashi Hatake", edad: 54, aldea: "Konoha", rango: "Sexto Hokage (anterior)", afiliación: "Equipo 7", jutsu_destacado: "Kamui", estado: "Vivo", imagen: "kakashi.webp", }, { nombre: "Gaara", edad: 35, aldea: "Aldea de la Arena", rango: "Kazekage", afiliación: "Aldea de la Arena", jutsu_destacado: "Sabaku Kyuu", estado: "Vivo", imagen: "gaara.webp", }, { nombre: "Hinata Hyuga", edad: 32, aldea: "Konoha", rango: "Kunoichi", afiliación: "Equipo 8", jutsu_destacado: "Gentle Fist", estado: "Viva", imagen: "hinata.webp", }, { nombre: "Shikamaru Nara", edad: 32, aldea: "Konoha", rango: "Jounin", afiliación: "Equipo 10", jutsu_destacado: "Shadow Possession Jutsu", estado: "Vivo", imagen: "shikamaru.webp", }, { nombre: "Tsunade Senju", edad: 75, aldea: "Konoha", rango: "Quinta Hokage (anterior)", afiliación: "Equipo 7", jutsu_destacado: "Creation Rebirth", estado: "Viva", imagen: "tsunade.webp", }, { nombre: "Orochimaru", edad: 70, aldea: "Exiliado de Konoha", rango: "Sannin", afiliación: "El Sonido, Otogakure", jutsu_destacado: "Edo Tensei", estado: "Vivo", imagen: "orochimaru.webp", }, { nombre: "Jiraiya", edad: 54, aldea: "Konoha", rango: "Sannin", afiliación: "Equipo 7", jutsu_destacado: "Rasengan", estado: "Fallecido", imagen: "jiraiya.webp", },];

    return (
        <section className="container">
            <Navbar />
            <div className="containerPersonaje">
                {
                    personajes.map((personaje) => (
                        <CardPersonaje {...personaje} />
                    ))
                }
            </div>
        </section>
    )
}