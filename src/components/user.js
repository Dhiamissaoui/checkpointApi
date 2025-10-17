import { Card, Row, Col, Badge, Button } from "react-bootstrap"
import { motion } from "framer-motion"

const User = ({ el }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="mb-4"
        >
            <Card className="user-card h-100 border-0 shadow-lg">
                <Card.Header className="bg-gradient text-white">
                    <Row className="align-items-center">
                        <Col md={8}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h4 className="mb-1">
                                    <i className="bi bi-person-circle me-2"></i>
                                    {el.name}
                                </h4>
                                <p className="mb-0 opacity-75">
                                    <i className="bi bi-at me-1"></i>
                                    @{el.username}
                                </p>
                            </motion.div>
                        </Col>
                        <Col md={4} className="text-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Badge bg="light" text="dark" className="fs-6 px-3 py-2">
                                    ID: {el.id}
                                </Badge>
                            </motion.div>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body className="p-4">
                    <Row className="g-4">
                        {/* Contact Information */}
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h6 className="text-primary mb-3">
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    Contact Information
                                </h6>
                                <div className="mb-2">
                                    <strong>Email:</strong>
                                    <a href={`mailto:${el.email}`} className="text-decoration-none ms-2">
                                        {el.email}
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <strong>Phone:</strong>
                                    <span className="ms-2">{el.phone}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>Website:</strong>
                                    <a href={`http://${el.website}`} target="_blank" rel="noopener noreferrer" className="text-decoration-none ms-2">
                                        {el.website}
                                    </a>
                                </div>
                            </motion.div>
                        </Col>

                        {/* Company Information */}
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h6 className="text-primary mb-3">
                                    <i className="bi bi-building-fill me-2"></i>
                                    Company
                                </h6>
                                <div className="mb-2">
                                    <strong>Name:</strong>
                                    <span className="ms-2">{el.company.name}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>Catchphrase:</strong>
                                    <span className="ms-2 fst-italic">"{el.company.catchPhrase}"</span>
                                </div>
                                <div className="mb-2">
                                    <strong>Business:</strong>
                                    <span className="ms-2">{el.company.bs}</span>
                                </div>
                            </motion.div>
                        </Col>

                        {/* Address Information */}
                        <Col md={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <h6 className="text-primary mb-3">
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Address
                                </h6>
                                <Row>
                                    <Col md={6}>
                                        <div className="mb-2">
                                            <strong>Street:</strong>
                                            <span className="ms-2">{el.address.street}</span>
                                        </div>
                                        <div className="mb-2">
                                            <strong>Suite:</strong>
                                            <span className="ms-2">{el.address.suite}</span>
                                        </div>
                                        <div className="mb-2">
                                            <strong>City:</strong>
                                            <span className="ms-2">{el.address.city}</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-2">
                                            <strong>Zipcode:</strong>
                                            <span className="ms-2">{el.address.zipcode}</span>
                                        </div>
                                        <div className="mb-2">
                                            <strong>Coordinates:</strong>
                                            <span className="ms-2">
                                                {el.address.geo.lat}, {el.address.geo.lng}
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </motion.div>
                        </Col>
                    </Row>
                </Card.Body>

                <Card.Footer className="bg-light">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <Badge bg="secondary" className="me-2">
                                <i className="bi bi-person-badge me-1"></i>
                                User Profile
                            </Badge>
                        </div>
                        <div>
                            <Button variant="outline-primary" size="sm" className="me-2">
                                <i className="bi bi-eye me-1"></i>
                                View Details
                            </Button>
                            <Button variant="outline-success" size="sm">
                                <i className="bi bi-chat-dots me-1"></i>
                                Contact
                            </Button>
                        </div>
                    </motion.div>
                </Card.Footer>
            </Card>
        </motion.div>
    )
}

export default User