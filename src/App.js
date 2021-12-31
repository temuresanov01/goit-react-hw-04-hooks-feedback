// компоненты
import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/feedbackOptions';
import Statistics from './components/Statistics/statistics';
import Notification from './components/Notification/notification';
import Section from './components/Section/section';

// данные

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // функции

  const onClickBtn = option => {
    setState({ ...state, [option]: state[option] + 1 });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((state.good / countTotalFeedback()) * 100);
  };

  // рендер

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={onClickBtn}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
export default App;
