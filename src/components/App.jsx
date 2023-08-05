import { useState } from "react"
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

const initialValues = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App (){
  const [state, setState] = useState(initialValues);

  const handleButtonClic = (evt) => {
    const { name } = evt.target.dataset;
    if (name) {
      setState(state => ({ ...state, [name]: +1 }))
    }
  };

  const countValue = () => {
        return Object.values(state).reduce((a, b) => a + b, 0)
  };

  const countPositiveFeedback = () => {
    const { good } = state
    return (Math.floor(good / (countValue()) * 100))
  };

  
  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleButtonClic} />
      </Section>
      <Section title='Statistics'>
        {countValue() ? (
          <Statistics data={state} total={countValue} positivePercentage={countPositiveFeedback} />
        ) : (
          <p>There is no feedback</p>
        )
        } </Section>
    </>
  );
  }
