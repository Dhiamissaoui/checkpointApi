import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Row, Col, Spinner, Alert, Card } from "react-bootstrap"
import { motion } from "framer-motion"
import User from "./user"

const UserList = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="py-5">
                                    <Spinner animation="border" variant="primary" className="mb-3" />
                                    <h5>Loading Users...</h5>
                                    <p className="text-muted">Please wait while we fetch the user data</p>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Alert variant="danger" className="text-center">
                                <Alert.Heading>
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    Oops! Something went wrong
                                </Alert.Heading>
                                <p>
                                    We couldn't load the user data. Please try refreshing the page or check your internet connection.
                                </p>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => window.location.reload()}
                                >
                                    <i className="bi bi-arrow-clockwise me-2"></i>
                                    Refresh Page
                                </button>
                            </Alert>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className="py-5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-5"
            >
                <h2 className="display-5 fw-bold text-primary mb-3">
                    <i className="bi bi-people-fill me-3"></i>
                    User Directory
                </h2>
                <p className="lead text-muted">
                    Discover our community of {data.length} amazing users
                </p>
            </motion.div>

            <Row className="g-4">
                {data.map((el, index) => (
                    <Col key={el.id} lg={6} xl={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <User el={el} />
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default UserList