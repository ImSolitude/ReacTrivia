import React, { Component } from "react";
import styled from "styled-components";
import { Title, Input } from "./Styled/Styled";

const WelcomeTitle = styled(Title)`
  border-radius: 6px 0px 0px 6px;
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 370px) {
    padding: 5px 10px;
  }
  @media screen and (max-width: 320px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
  
`;
const StyledInput = styled(Input)`
  @media screen and (max-width: 540px) {
    width: 200px;
    font-size: 1rem;
  }
  @media screen and (max-width: 470px) {
  font-size: 0.9rem;
  }
  @media screen and (max-width: 370px) {
    width: 140px;
  }
  @media screen and (max-width: 320px) {
    width: 100px;
  }
`;
class Welcome extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    this.setState({ name: this.props.name });
  }
  handleName = e => {
    const name = e.currentTarget.value;
    this.setState({ name });
    this.props.handleName(name);
  };
  render() {
    return (
      <div className="row enter">
        <WelcomeTitle>Enter your name:</WelcomeTitle>

        <StyledInput
          type="text"
          name="name"
          onChange={this.handleName}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default Welcome;



