function Footer() {
    return (
        <>
        <nav>
            {/* Display the following content within the nav bar. Use NavLink to create a link to a dedicated page */}
            <ul className = "logo">
                <NavLink to='/'>mb.creative</NavLink>
            </ul>
            <ul className = "nav">
                <NavLink to='/' className="first">About</NavLink>
                <NavLink to='/' className="second">Portfolio</NavLink>
                <NavLink to='/' className="third">Contact</NavLink>
            </ul>
            <ul className = "socials">
                <a href="#" class="fa-brands fa-square-facebook" alt="Facebook"></a>
                <a href="#" class="fa-brands fa-linkedin" alt="Linkedin"></a>
            </ul>

        </nav>
        </>
    )
}
export default Footer