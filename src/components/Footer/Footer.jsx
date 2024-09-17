import "./Footer.css"
import logo from "../../assets/amc_header_logo.png"


export const Footer = () => {
    return (
        <footer>
            <img className="logo-footer" src={logo} alt="amc logo for footer" />
            <p className="t&c">© 2024 AMC Networks Intenational Latin América - Aviso Legal & Política de cookies - Términos y condiciones</p>
        </footer>
    )
}