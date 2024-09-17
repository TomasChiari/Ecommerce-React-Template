import "./NavBar.css"
import logo from "../../assets/amc_header_logo.png"

export const NavBar = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="amc logo for header" />
            <nav className="navbar"></nav>
        </header>
    )
}