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


