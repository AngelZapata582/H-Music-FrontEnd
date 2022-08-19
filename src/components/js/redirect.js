import Cookies from 'universal-cookie';

export default function cerrarSesion() {
    const cookie = new Cookies()
    console.log("Cerrando sesion")
    cookie.remove("token")
    cookie.remove("user")
    cookie.remove("email")
    window.location.href = "/"
}


