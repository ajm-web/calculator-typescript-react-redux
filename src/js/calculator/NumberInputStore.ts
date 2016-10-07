import {createStore, applyMiddleware, Action} from "redux";
import thunk from "redux-thunk";

export const InputActionType = {
  Append : "INPUT_ACTION_APPEND",
  Set:  "INPUT_ACTION_SET",
  AsFloat: "INPUT_ACTION_AS_FLOAT",
  Reset : "INPUT_ACTION_RESET"
};

export interface InputAction extends Action {
    number: number;
}

enum NumberType {
  Int = 0, Float = 1
}

export class InputNumber {
  type: NumberType;
  value: number;

  constructor(type: NumberType, value: number) {
    this.type = type;
    this.value = value;
  }

  append(n: number) {
    console.log("current,", this.type, this.value);
    let value: number;
    let type: NumberType;
    switch (this.type) {
      case NumberType.Int:
        type = NumberType.Int;
        value = this.value * 10 + n;
        break;
      case NumberType.Float:
        const str = this.value.toString();
        const format = str.indexOf(".") >= 0 ? str + n : str + "." + n;
        type = NumberType.Float;
        value = parseFloat(format);
        break;
    }
    return new InputNumber(type, value);
  }

  as(type: NumberType) {
    return new InputNumber(type, this.value);
  }

  static of(n: number) {
    const isFloat = n.toString().indexOf(".") >= 0;
    console.log(n, "isFloat", isFloat);
    const type = isFloat ? NumberType.Float : NumberType.Int;
    return new InputNumber(type, n);
  }
}

const initialState: InputNumber = InputNumber.of(0);

console.log("initialState", initialState);

export const numberInputReducer = (state: InputNumber = initialState, action: InputAction) => {
  switch (action.type) {
    case InputActionType.Append:
      return state.append(action.number);

    case InputActionType.Set:
      return InputNumber.of(action.number);

    case InputActionType.AsFloat:
      return state.as(NumberType.Float);

    case InputActionType.Reset:
      return initialState;
  }
};

export function createInstance() {
  return createStore(numberInputReducer, applyMiddleware(thunk));
}
