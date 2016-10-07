import * as React from 'react';
import {Operation} from './opeartions';
import * as NumberInputState from './NumberInputStateStore';
import * as NumberInputStore from './NumberInputStore';
import * as RightOperandStore from './RightOperandStore';
import * as OperationStore from './OperationStore';
import RaisedButton from 'material-ui/RaisedButton';

export class OperationButtonProps {
    operation: Operation
}

export default class OperationButton extends React.Component<OperationButtonProps, {}> {

    constructor(){
        super();
    }

    clicked() {
        console.log('clicked :' + this.props.operation.name);

        NumberInputState.instance.dispatch({
            type: NumberInputState.ActionType.TO_RIGHT
        });

        RightOperandStore.instance.dispatch({
            type: NumberInputStore.InputActionType.Reset
        });

        OperationStore.instance.dispatch({
            type: OperationStore.ActionTypes.SET,
            operation: this.props.operation
        });
    }

    render() {
      return (
        <RaisedButton backgroundColor="#a4c639" fullWidth={true} label={this.props.operation.operator} onClick={this.clicked.bind(this)}/>
      );
    }
}
