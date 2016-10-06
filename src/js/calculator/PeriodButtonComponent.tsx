import * as React from 'react';
import * as NumberInputStateStore from './NumberInputStateStore';
import * as LeftOperandStore from './LeftOperandStore';
import * as RightOperandStore from './RightOperandStore';
import * as NumberInputStore from './NumberInputStore';

export interface NumberInputState {
  target: NumberInputStateStore.NumberInputState
}

export class NumberInputProps {
    value: number;

    constructor(number: number) {
        this.value = number;
    }

    static of: (number: number) => NumberInputProps = (number) => {
        return new NumberInputProps(number);
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
    })
  }

  state: NumberInputState = {
    target: NumberInputStateStore.NumberInputState.Left
  };


  get targetOperand() {
    return this.state.target == NumberInputStateStore.NumberInputState.Left
      ? LeftOperandStore.instance
      : RightOperandStore.instance
  }


  clicked() {
    const action = {type: NumberInputStore.InputActionType.AsFloat, number: 0};
    this.targetOperand.dispatch(action);
  }

  render() {
    return <button onClick={this.clicked.bind(this)}>.</button>
  }
}
