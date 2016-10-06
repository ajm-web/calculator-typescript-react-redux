import * as React from 'react';
import * as CalculationStore from './CalculationStore';
import RaisedButton from 'material-ui/RaisedButton';

export default class EqualsButton extends React.Component<{}, {}> {

    clicked() {
        CalculationStore.instance.dispatch({type: CalculationStore.ActionTypes.Execute});
    }

    render() {
        return <RaisedButton label={"="} primary={true} onClick={this.clicked.bind(this)}/>
    }
}
