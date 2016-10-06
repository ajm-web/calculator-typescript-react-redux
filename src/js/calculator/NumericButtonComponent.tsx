import * as React from 'react';
import * as NumberInputStateStore from './NumberInputStateStore';
import * as LeftOperandStore from './LeftOperandStore';
import * as RightOperandStore from './RightOperandStore';
import * as NumberInputStore from './NumberInputStore';
import RaisedButton from 'material-ui/RaisedButton';

export class InputNumberError implements Error {
    name: string = 'InputNumberError';
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}

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

export default class NumericButton extends React.Component<NumberInputProps, NumberInputState> {


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
    const action = {type: NumberInputStore.InputActionType.Append, number: this.props.value};
    this.targetOperand.dispatch(action);
  }

  render() {
    return <RaisedButton label={this.props.value + ''} fullWidth={true} onClick={this.clicked.bind(this)}/>
  }
}
