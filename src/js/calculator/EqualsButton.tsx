import * as React from "react";
import * as CalculationStore from "./CalculationStore";
import RaisedButton from "material-ui/RaisedButton";

export default class EqualsButton extends React.Component<{}, {}> {

    clicked() {
        CalculationStore.instance.dispatch({type: CalculationStore.ActionTypes.Execute});
    }

    render() {
        return <RaisedButton label={"="} fullWidth={true} primary={true} onClick={this.clicked.bind(this)}/>;
    }
}
