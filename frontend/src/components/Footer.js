// import { Component } from 'react-bootstrap'
import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'

function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3"> Copyright &copy; Parts Store </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer