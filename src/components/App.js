import React, { Component } from "react";
import Question, { QuestionTracker } from "./Question";
import styled from "styled-components";
import Button from "./Styled/Styled";
import { Title } from "./Styled/Styled";
import Welcome from "./Welcome";
import Results from "./Results";
import "./Question.scss";
import "./Checkbox.scss";
import Credit from "./Credit";
import { Sports, History, Geography, Kids } from "../data";
import "./App.scss";

const categories = { Sports, History, Geography, Kids };
const categoriesLoop = ["Sports", "History", "Geography", "Kids"];

const Logo = styled.img`
  width: 200px;
  @media screen and (max-width: 470px) {
    width: 120px;
  }
  @media screen and (max-width: 370px) {
    width: 100px;
  }
`;

const CategoryTracker = styled(QuestionTracker)`
  width: auto;
  font-size: 0.7rem;
  margin-left: 0.5rem;
  @media screen and (max-width: 370px) {
    font-size: 0.6rem;
  }
`;

const WelcomeMessage = styled(Title)`
  font-size: 0.7rem;
  font-weight: bold;
  background: transparent;
  margin: 0;
  border: none;
  padding: 0;
  flex: 1 1 100%;
  @media screen and (max-width: 540px) {
    font-size: 0.6rem;
    max-width: 120px;
    word-break: break-all;
  }
`;
const Start = styled(Button)``;
const WelcomeTitle = styled(Title)`
  border-radius: 6px 0px 0px 6px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 5px 10px;
  justify-content: center;
  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const Select = styled.select`
  font-family: "Karla", sans-serif;
  padding: 10px 15px;
  font-size: 1rem;
  width: 284px;
  border-radius: 0px 6px 6px 0px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #131e29;
  color: white;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background: #131e29 url("arrow-down.png") no-repeat;
  background-position: 95% 50%;
  transition: all 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border-color: #f29559;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.9rem;
    width: 200px;
  }
`;
const Option = styled.option`
  font-size: 1.2rem;
  padding: 5px 10px;
`;

class App extends Component {
  state = {
    name: "",
    category: Sports,
    step: 0,
    isLastStep: false,
    userChoices: {},
    userScore: 0,
    selected: { index: 0, string: "Sports" }
  };

  componentWillMount() {
    this.setState({
      category: categories["Sports"], // Default Category
      numberOfQuestions: this.state.category.length
    });
  }

  goNext = () => {
    const step = this.state.step + 1;
    const numberOfQuestions = this.state.numberOfQuestions;
    if (step > numberOfQuestions) {
      this.setState({ isLastStep: true });
      return;
    }
    this.setState({ step });
  };

  goPrev = () => {
    const step = this.state.step - 1;
    if (step < 0) {
      return;
    }
    // this.setState({ step, isLastStep: false });
    this.setState({
      step,
      isLastStep: false
    });
  };

  goAgain = () => {
    this.setState({
      category: categories["Sports"], // Default Category
      step: 0,
      userChoices: {},
      name: "",
      isLastStep: false,
      userScore: 0,
      selected: { index: 0, string: "Sports" }
    });
  };

  handleResults = (questionIndex, answerIndex) => {
    const correctAnswer = this.state.category[questionIndex].correctAnswer;
    const isCorrectAnswer = correctAnswer === answerIndex;
    let userScore = 0;
    let userChoices = this.state.userChoices;
    userChoices[questionIndex] = { answerIndex, isCorrectAnswer };

    Object.keys(userChoices).forEach(choice => {
      if (userChoices[choice].isCorrectAnswer) {
        userScore++;
      }
    });
    this.setState({ userChoices, userScore });
  };

  handleName = name => {
    this.setState({ name });
  };

  handleSelect = e => {
    const target = e.currentTarget;
    // Search for selected Index
    const selectedIndex = [...target.childNodes].findIndex(option => {
      return option.selected;
    });

    // Search for selected String
    const selectedString = categoriesLoop[selectedIndex];

    // Search for the catergory string and get it's object

    const categoryString = target.value;
    const category = categories[categoryString];

    // Set the state of them all.
    this.setState({
      category,
      selected: { index: selectedIndex, string: selectedString },
      userChoices: {}
    });
  };
  render(e) {
    const category = this.state.category;
    const step = this.state.step;
    let answerIndex;
    if (step === 0) {
      // Step: 0 First step => Welcome message!
      return (
        <>
          <div className="row header">
            <Logo src="logo.png" />
            <CategoryTracker>{this.state.selected.string}</CategoryTracker>
            <div className="alignEnd">
              <WelcomeMessage>
                Welcome, {this.state.name ? `${this.state.name}.` : ""}
              </WelcomeMessage>
            </div>
          </div>
          <div className="container welcome">
            <Welcome handleName={this.handleName} name={this.state.name} />
            <div className="row categories">
              <WelcomeTitle>Choose Category: </WelcomeTitle>
              <Select
                onChange={this.handleSelect}
                value={this.state.selected.string}
              >
                {categoriesLoop.map((category, i) => {
                  return <Option key={i}>{category}</Option>;
                })}
              </Select>
            </div>
            <Start onClick={this.goNext}>Start Quiz</Start>
          </div>
          <Credit href="https://github.com/ImSolitude/Reactrivia" />
        </>
      );
    } else if (this.state.isLastStep) {
      // Last step => Results!
      return (
        <>
          <div className="row header">
            <Logo src="logo.png" />{" "}
            <CategoryTracker>{this.state.selected.string}</CategoryTracker>
            <div className="alignEnd">
              <WelcomeMessage>
                Welcome, {this.state.name ? `${this.state.name}.` : ""}
              </WelcomeMessage>
            </div>
          </div>

          <Results
            name={this.state.name}
            userScore={this.state.userScore}
            numberOfQuestions={this.state.numberOfQuestions}
            goAgain={this.goAgain}
            questions={this.state.category}
            userChoices={this.state.userChoices}
          />
        </>
      );
    }
    return (
      <>
        <div className="row header">
          <Logo src="logo.png" />{" "}
          <CategoryTracker>{this.state.selected.string}</CategoryTracker>
          <div className="alignEnd">
            <WelcomeMessage>
              Welcome, {this.state.name ? `${this.state.name}.` : ""}
            </WelcomeMessage>
          </div>
        </div>
        <div className="container questions">
          {category.map((question, i) => {
            if (step === i + 1) {
              if (this.state.userChoices[i]) {
                answerIndex = this.state.userChoices[i].answerIndex;
              }
              return (
                <Question
                  question={question}
                  goNext={this.goNext}
                  goPrev={this.goPrev}
                  handleResults={this.handleResults}
                  key={i}
                  questionIndex={i}
                  answerIndex={answerIndex}
                  numberOfQuestions={this.state.numberOfQuestions}
                  name={this.state.name}
                />
              );
            }
            return "";
          })}
        </div>
        <Credit href="https://github.com/ImSolitude/Reactrivia" />
      </>
    );
  }
}

export default App;
