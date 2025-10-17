import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.div
                className="hero-section text-center py-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Container>
                    <motion.h1
                        className="display-4 fw-bold text-primary mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Welcome to UserHub
                    </motion.h1>
                    <motion.p
                        className="lead text-muted mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Discover and explore user profiles with our modern, professional interface
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Button
                            as={Link}
                            to="/users"
                            variant="primary"
                            size="lg"
                            className="btn-custom me-3"
                        >
                            <i className="bi bi-people-fill me-2"></i>
                            View Users
                        </Button>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            className="btn-custom"
                        >
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Learn More
                        </Button>
                    </motion.div>
                </Container>
            </motion.div>

            {/* Features Section */}
            <motion.div
                className="features-section py-5 bg-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <Container>
                    <motion.h2
                        className="text-center mb-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        Why Choose UserHub?
                    </motion.h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="h-100 border-0 shadow-sm feature-card">
                                    <Card.Body className="text-center p-4">
                                        <div className="feature-icon mb-3">
                                            <i className="bi bi-lightning-charge-fill text-primary"></i>
                                        </div>
                                        <Card.Title>Fast & Responsive</Card.Title>
                                        <Card.Text>
                                            Lightning-fast user data loading with smooth animations and responsive design.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="h-100 border-0 shadow-sm feature-card">
                                    <Card.Body className="text-center p-4">
                                        <div className="feature-icon mb-3">
                                            <i className="bi bi-shield-check-fill text-success"></i>
                                        </div>
                                        <Card.Title>Secure & Reliable</Card.Title>
                                        <Card.Text>
                                            Built with modern security practices and reliable data handling.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col md={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="h-100 border-0 shadow-sm feature-card">
                                    <Card.Body className="text-center p-4">
                                        <div className="feature-icon mb-3">
                                            <i className="bi bi-palette-fill text-warning"></i>
                                        </div>
                                        <Card.Title>Modern Design</Card.Title>
                                        <Card.Text>
                                            Beautiful, professional interface with smooth animations and modern UI.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    )
}

export default Home