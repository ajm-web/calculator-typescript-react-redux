import * as React from 'react';
import * as CalculationStore from './CalculationStore';

export default class EqualsButton extends React.Component<{}, {}> {

    clicked() {
        CalculationStore.instance.dispatch({type: CalculationStore.ActionTypes.Execute});
    }

    render() {
        return <button onClick={this.clicked.bind(this)}>=</button>
    }
}