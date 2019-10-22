import React, { Component } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap' 

export default class Table extends Component {
    state = {
        name: "",
        height: "",
        age: ""
    }

    handleSubmit = () => {
        this.props.updateData([...this.props.data, this.state])
        this.setState({
            name: "",
            height: "",
            age: ""
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRemove = (event) => {
        const newData = this.props.data.filter(data => {
            return data.name != event.target.name
        })
        this.props.updateData(newData)
    }

    renderRows() {
        return (
            this.props.data.map(student => {
                return (
                    <Row
                        key={student.name}
                        style={{ marginTop: "10px" }}
                    >
                        <Col xs={3}>{student.name}</Col>
                        <Col xs={3}>{student.height}</Col>
                        <Col xs={3}>{student.age}</Col>
                        <Col xs={3}>
                            <Button
                                variant={"danger"}
                                type={"button"}
                                style={{ width: "100%"}}
                                name={student.name}
                                onClick={this.handleRemove}
                            >
                                Remove
                            </Button>
                        </Col>
                    </Row>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Name"} 
                            name={"name"}
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Height"} 
                            name={"height"}
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Control
                            placeholder={"Age"} 
                            name={"age"}
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={3}>
                        <Button
                            type={"button"}
                            variant={"primary"}
                            style={{ width: "100%"}}
                            onClick={this.handleSubmit}
                        >
                            Add
                        </Button>
                    </Col>
                </Row>
                {this.renderRows()}
            </div>
        )
    }
}