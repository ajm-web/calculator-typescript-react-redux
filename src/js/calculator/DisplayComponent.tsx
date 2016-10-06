import * as React from 'react';
import {sprintf} from 'sprintf';
import * as LeftOperandStore from './LeftOperandStore';
import * as RightOperandStore from './RightOperandStore';

export interface DisplayState {
  result: number
  error: string
}

export class Display extends React.Component<{}, DisplayState> {

  constructor() {
    super();
    LeftOperandStore.instance.subscribe(() => {
      const value = LeftOperandStore.instance.getState();
      this.setState({
        result: value.value,
        error: undefined
      })
    });
    RightOperandStore.instance.subscribe(() => {
      const value = RightOperandStore.instance.getState();
      this.setState({
        result: value.value,
        error: undefined
      })
    });
  }

  state:DisplayState = {
    result: 0,
    error: undefined
  };

  get formatted() {
    if(this.state.error) {
      return this.state.error;
    } else {
      return sprintf('%f', this.state.result);
    }
  }
  render() {
    return <div><p>{this.formatted}</p></div>
  }
}
