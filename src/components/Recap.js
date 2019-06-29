import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "./Styled/Styled";
import "./Recap.scss";
const QuestionBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #3c4c5e;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
const Answer = styled.li`
  background: ${props => (props.isCorrectAnswer ? "#00A640" : "")}!important;
  border: none;
`;
const ResultTitle = styled(Title)`
  background: rgba(60, 76, 94, 0.5);
  margin-right: auto;
  border: none;
  font-size: 1.2rem;
  padding: 5px 10px;
`;

const QuestionTitle = styled(Title)`
  /* text-align: center; */
  font-size: 1.3rem;
  span.index {
    background: rgba(19, 30, 41, 0.5);
    padding: 0px 10px;
    border-radius: 3px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 570px) {
    font-size: 1rem;
    span.index{
      font-size: 0.9rem;
      padding: 0 5px;
    }
  }
`;
class Recap extends Component {
  state = {
    checked: "checked"
  };
  componentWillMount() {
    this.setState({ checked: "checked" });
  }
  handleNothing = () => {
    this.setState({ checked: "checked" });
  };
  render() {
    const userChoices = this.props.userChoices;
    const questions = this.props.questions;
    return (
      <>
        <ResultTitle>Results:</ResultTitle>
        {questions.map((question, questionIndex) => {
          return (
            <QuestionBox className="question-box recap" key={questionIndex}>
              <QuestionTitle>
                <span className="index">{questionIndex + 1}</span>
                <span> {question.question}</span>
              </QuestionTitle>
              <form>
                <ul>
                  {question.answers.map((answer, i) => {
                    return (
                      <Answer
                        key={i}
                        isCorrectAnswer={question.correctAnswer === i}
                        className={
                          userChoices[questionIndex] &&
                          userChoices[questionIndex].answerIndex === i
                            ? "user-answer"
                            : ""
                        }
                      >
                        <label className="radio recap">
                          <input
                            type="radio"
                            name="answers"
                            checked={
                              userChoices[questionIndex] &&
                              userChoices[questionIndex].answerIndex === i
                            }
                            onChange={this.handleNothing}
                          />
                          <span />
                        </label>
                        <span>{answer}</span>
                      </Answer>
                    );
                  })}
                </ul>
              </form>
            </QuestionBox>
          );
        })}
      </>
    );
  }
}

export default Recap;
