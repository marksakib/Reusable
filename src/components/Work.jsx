import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Reusable from "./reusable";

const Work = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <div className="pt-5">
            <h2>Conquest</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
             {" "}
            </p>
            <a href="#">Get in touch with us</a>
          </div>
        </Col>
        <Col lg={8}>
          <Row >
           <Reusable title="this a test"  para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae " />
           <Reusable title="run out of test text" para=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae" />
           <Reusable title="i dont even know" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae " />
           <Reusable title="this is nothing" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae " />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
