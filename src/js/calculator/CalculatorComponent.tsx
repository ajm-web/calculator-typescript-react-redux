import * as React from 'react';
import OperationButtons from "./OperationButtonsComponent";
import NumericButtons from "./NumericButtonsComponent";
import {Display} from "./DisplayComponent";
import EqualsButton from "./EqualsButton";
import AllClearButton from "./AllClearButtonComponent";
import './calculator.scss';
import AppBar from 'material-ui/AppBar';

export default class Calculator extends React.Component<{}, {}> {
    render(){
        return (
            <div className="calculator">
              <AppBar title="Calculator"/>
              <div>
                <Display/>
                <NumericButtons/>
                <OperationButtons/>
                <EqualsButton/>
                <AllClearButton/>
              </div>
            </div>
        )
    }
}
