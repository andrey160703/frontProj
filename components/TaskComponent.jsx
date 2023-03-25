import React, {useState} from 'react';
import Tab from "react-bootstrap/Tab";
import {Col, Container, Nav, Row} from "react-bootstrap";
import Worker from "./Worker";

const TaskComponent = () => {
    const [projectNames, setProjectNames] = useState([
        { id: 1, title: "Project 1" },
        { id: 2, title: "Project 2" },
        { id: 3, title: "Hello world project!" }
    ])
    const [projects, setProjects] = useState([
        { id: 1, title: "Project 1", description: "None", workers: [
            {role: "worker", name: "Ivan", total: "10", completed: "5"},
            {role: "worker", name: "Artur", total: "10", completed: "5"}
            ]},
        { id: 2, title: "Project 2", description: "None", workers: [
            {role: "worker", name: "Artur", total: "10", completed: "5"}
            ]},
        { id: 3, title: "Hello world project!", description: "None", workers: [
            {role: "worker", name: "Hello world worker", total: "10", completed: "5"}
            ]}
    ])


    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            {projectNames.map(name =>
                                <Nav.Item>
                                    <Nav.Link eventKey={name.id}>{name.title}</Nav.Link>
                                </Nav.Item>
                            )}
                            {/* todo change this key view*/}
                            <Nav.Item>
                                <Nav.Link className="btn btn-outline-success" eventKey={"NewProj"}>{"Create new project"}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            {projects.map(proj =>
                                <Tab.Pane eventKey={proj.id}>
                                    <h2 className="mt-1 ms-2">
                                        {proj.title}
                                    </h2>
                                    <div className="mt-1 ms-2">
                                        {proj.description}
                                    </div>
                                    {proj.workers.map(worker =>
                                        <Worker role={worker.role} name={worker.name} total={worker.total} completed={worker.completed}/>
                                    )}
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default TaskComponent;