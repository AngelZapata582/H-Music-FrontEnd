import Cookies from 'universal-cookie';

export default function cerrarSesion() {
    const cookie = new Cookies()
    console.log("Cerrando sesion")
    cookie.remove("token")
    window.location.href = "/"
}


