import React, { Component } from 'react';
import MyComponent from './MyComponents';
import Counter from './Counter';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import Say from './Say';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        <MyComponent name="뤼액트" favoriteNumber={1}>
          리액트
        </MyComponent>
        <Counter />
        <Say></Say>
        <EventPractice></EventPractice>
        <EventPractice2></EventPractice2>
        <ValidationSample></ValidationSample>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
        <br />
        <IterationSample />
        <br />
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
