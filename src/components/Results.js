import React, { Component } from 'react';
import styled from 'styled-components';
import Recap from './Recap';
import Button from "./Styled/Styled";

import { Title } from "./Styled/Styled";
const Final = styled(Title)`
  background: ${props => props.isPassed ? '#00A640' : '#ff1744'};
  @media screen and (max-width: 570px) {
    font-size: 1.2rem;
  }
`;
class Results extends Component {
  handleGoAgain = () => {
    this.props.goAgain();
  }
  render() {
    const userScore = this.props.userScore;
    const numberOfQuestions = this.props.numberOfQuestions;
    const isPassed = (userScore > ( numberOfQuestions / 2 ));
    return (
      <div className="final">
      <div className="container results">
      <div className="row">
        <Final isPassed={isPassed}>Your score is: {userScore} out of {numberOfQuestions}</Final>
      </div>
        <Button onClick={this.handleGoAgain}>Start Again</Button>
      </div>

      <div className="container recap">
        <Recap questions={this.props.questions} userChoices={this.props.userChoices}/>
      </div>
      </div>
    );
  }
}

export default Results;