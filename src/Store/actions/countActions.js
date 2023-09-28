import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY_AMOUNT,
} from "../constants/actions-type";

const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const incrementByAmount = (amount) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: amount,
  };
};

export { increment, decrement, incrementByAmount };
