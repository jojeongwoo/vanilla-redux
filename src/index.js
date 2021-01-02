import { createStore } from 'redux'; 

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const span = document.getElementById("span");

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => { //상태 데이터와 액션을 매개변수로 받아 새로운 상태를 반환하는 함수
  switch(action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  };
};

const countStore = createStore(reducer); //상태 데이터를 담는 공간

const onChange = () => {
  span.innerText = countStore.getState();
};

countStore.subscribe(onChange); // store 내부의 변화를 알려준다.

const plusHandle = () => {
  countStore.dispatch({type: ADD});
  console.log(countStore.getState());
};

const minusHandle = () => {
  countStore.dispatch({type: MINUS}); // dispatch를 이용하여 action을 reducer에게 전달해준다. 
  console.log(countStore.getState()); // action은 상태를 어떻게 바꿀 것인지 알리고 그에 필요한 데이터 전달해준다.
};

plus.addEventListener("click", plusHandle);
minus.addEventListener("click", minusHandle);

console.log(countStore.getState());