import * as React from 'react';

import * as NumberInputStateStore from "./NumberInputStateStore";
import * as LeftOperandStore from "./LeftOperandStore";
import * as RightOperandStore from "./RightOperandStore";
import {InputAction} from './NumberInputStore';
import RaisedButton from "material-ui/RaisedButton";

export interface NumberInputState {
    target: NumberInputStateStore.NumberInputState;
}

abstract class InputButton<P> extends React.Component<P, NumberInputState> {
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

    get currentValue() {
        return this.targetOperand.getState();
    }

    abstract action(): InputAction

    abstract label(): string

    clicked() {
        const action = this.action();
        this.targetOperand.dispatch(action);
    }

    render() {
        return <RaisedButton label={this.label()} fullWidth={true} onClick={this.clicked.bind(this)}/>;
    }
}

export default InputButton;