import * as React from "react";
import * as NumberInputStateStore from "./NumberInputStateStore";
import * as LeftOperandStore from "./LeftOperandStore";
import * as RightOperandStore from "./RightOperandStore";
import * as NumberInputStore from "./NumberInputStore";
import RaisedButton from "material-ui/RaisedButton";

export interface NumberInputState {
  target: NumberInputStateStore.NumberInputState;
}

export class NumberInputProps {
    value: number;

    constructor(n: number) {
        this.value = n;
    }

    static of: (n: number) => NumberInputProps = (n) => {
        return new NumberInputProps(n);
    }
}

export default class PeriodButton extends React.Component<{}, NumberInputState> {


  constructor() {
    super();
    NumberInputStateStore.instance.subscribe(() => {
      const state = NumberInputStateStore.instance.getState();
      this.setState({
        target: state
      });
    });
  }

  state: NumberInputState = {
    target: NumberInputStateStore.NumberInputState.Left
  };


  get targetOperand() {
    return this.state.target === NumberInputStateStore.NumberInputState.Left
      ? LeftOperandStore.instance
      : RightOperandStore.instance;
  }


  clicked() {
    const action = {type: NumberInputStore.InputActionType.AsFloat, number: 0};
    this.targetOperand.dispatch(action);
  }

  render() {
    return <RaisedButton label={"."} fullWidth={true} onClick={this.clicked.bind(this)}/>;
  }
}
