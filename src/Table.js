import React, { Component } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap' 

export default class Table extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Name"} 
                            name={"name"}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Height"} 
                            name={"height"}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Age"} 
                            name={"age"}
                        />
                    </Col>
                    <Col xs={3}>
                        <Button
                            type={"button"}
                            variant={"primary"}
                            style={{ width: "100%"}}
                        >
                            Add
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}