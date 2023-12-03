import { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import Section from "./Section/Section";
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions'
import Notification from "./Notification/Notification";

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  leaveFeedback = (option) => {
      this.setState(prevState => ({
        [option]: prevState[option] + 1,
      }));
      console.log(this.state)
    };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    console.log(total);
    // console.log(this.state.good);
    return Math.round(this.state.good * 100 / total);
    };

    render(){
      const {good, neutral, bad } = this.state;
      const options = Object.keys(this.state);
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage() || 0;
console.log(positivePercentage);
      return (
        <>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={options}
          onLeaveFeedback={this.leaveFeedback}/>
         </Section>
         <Section title="Statistics">
          {(total > 0) ? ( <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> )  : (<Notification message="There is no feedback"/>)
          }
        
          </Section>
        </>
        
      )
    }
        
  };

export default App;



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
