import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import { motion } from "framer-motion"

const NavList = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
            <Container>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
                        <i className="bi bi-people-fill me-2"></i>
                        UserHub
                    </Navbar.Brand>
                </motion.div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="nav-link-custom me-3"
                            >
                                <i className="bi bi-house-fill me-1"></i>
                                Home
                            </Nav.Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Nav.Link
                                as={Link}
                                to="/users"
                                className="nav-link-custom"
                            >
                                <i className="bi bi-person-lines-fill me-1"></i>
                                Users
                            </Nav.Link>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavList