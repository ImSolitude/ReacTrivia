import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Styled/Styled";
import { Title } from "./Styled/Styled";

const QuestionBox = styled.div`
  width: 100%;
`;

const Answer = styled.li`
  @media screen and (max-width: 570px) {
    flex-basis: 100%!important;
    font-size: 0.9rem!important;
  }
`;

const Navigation = styled(Button)`
  margin: 0;
  @media screen and (max-width: 370px) {
    padding: 5px;
    font-size: 0.9rem;
  }
`;
const QuestionTracker = styled(Title)`
  background: rgba(60, 76, 94, 0.5);
  margin-right: auto;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 50%;
  span {
    font-size: 0.8rem;
    margin: 0 5px;
    font-weight: normal;
  }
  @media screen and (max-width: 370px) {
    padding: 5px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 370px) {
    font-size: 0.7rem;
  }
`;
const Submit = styled(Button)`
  background: #3c4c5e;
  margin-bottom: 0px;
  @media screen and (max-width: 370px) {
    padding: 5px;
    font-size: 0.9rem;
  }
`;

const QuestionTitle = styled(Title)`
  font-size: 1.3rem;
  @media screen and (max-width: 570px) {

    font-size: 1rem;
  }
`;

class Question extends Component {
  state = {
    answerSelected: ""
  };

  componentWillMount() {
    const answerIndex = this.props.answerIndex;
    if (answerIndex !== null) {
      const answerSelected = this.props.question.answers[answerIndex];
      this.setState({
        answerSelected
      });
    }
  }

  handleNext = () => {
    this.props.goNext();
  };

  handlePrev = () => {
    this.props.goPrev();
  };
  handleChange = (answer, answerIndex, questionIndex) => {
    this.setState({ answerSelected: answer }); // Add answer to local state
    this.props.handleResults(questionIndex, answerIndex);
  };
  render() {
    const answers = this.props.question.answers;
    const questionIndex = this.props.questionIndex;
    const numberOfQuestions = this.props.numberOfQuestions;
    const isLastQuestion = questionIndex === numberOfQuestions - 1;

    return (
      <QuestionBox className="question-box">
        <QuestionTitle>{this.props.question.question}</QuestionTitle>
        <form>
          <ul>
            {answers.map((answer, i) => {
              return (
                <Answer key={i} onClick={this.handleRadio}>
                  <label className="radio">
                    <input
                      type="radio"
                      name="answers"
                      checked={answer === this.state.answerSelected}
                      onChange={
                        e => this.handleChange(answer, i, questionIndex) // i: answerIndex
                      }
                    />
                    <span>{answer}</span>
                  </label>
                </Answer>
              );
            })}
          </ul>
        </form>
        <div className="row navigation">
          <Navigation onClick={this.handlePrev} left>
            Previous
          </Navigation>

          <QuestionTracker>
            {questionIndex + 1} <span>out of</span> {numberOfQuestions}
          </QuestionTracker>

          {isLastQuestion ? (
            <Submit onClick={this.handleNext}>Submit</Submit>
          ) : (
            <Navigation onClick={this.handleNext}>Next</Navigation>
          )}
        </div>
      </QuestionBox>
    );
  }
}

export default Question;
export { Title, QuestionTracker };
