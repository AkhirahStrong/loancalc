import React, { Component } from "react";
import { Row, Col, FormGroup, Tooltip } from "react-bootstrap";

class FormMortgage extends Component {
  render() {
    return (
      <FormGroup>
        <Row  className="fpadding" style={{ paddingBottom: 0}}>
          <Col className="form-padding" sm={12}>
            <Row>
              <Col className="labelSlider" xs={12} sm={4}>
                Mortgage Balance
              </Col>
              <Col className="descSlider" xs={12} sm={6}>
                How much do you owe?
              </Col>
            
              <Tooltip placement="right" className="in" id="tooltip-right">
                Tooltip right
              </Tooltip>
           
            </Row>
          </Col>

          <Col sm={12}>
            <input
              onChange={this.props.onChange}
              className="border-color"
              id="formAmount"
              type="text"
              placeholder="50,000"
            />
          </Col>
        </Row>
      </FormGroup>
    );
  }
}

export default FormMortgage;