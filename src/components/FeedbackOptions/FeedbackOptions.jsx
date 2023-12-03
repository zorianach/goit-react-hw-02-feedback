import PropTypes from 'prop-types';
import { ButtonsBox, Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBox>
      {options.map(option => (
            <Button
                type='button'
                key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </Button>
        ))}
    </ButtonsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;




{/* <ButtonGood
type="button"
onClick={() => onLeaveFeedback({goodOption})}
key={goodOption}
>
Good
</ButtonGood>
<ButtonNeutral
type="button"
onClick={() => onLeaveFeedback}
key={neutralOption+1}
>
Neutral
</ButtonNeutral>
<ButtonBad
type="button"
onClick={onLeaveFeedback}
key={badOption+2}
>
Bad
</ButtonBad> */}