import * as React from 'react';
import OperationButtons from "./OperationButtonsComponent";
import NumericButtons from "./NumericButtonsComponent";
import {Display} from "./DisplayComponent";
import EqualsButton from "./EqualsButton";
import AllClearButton from "./AllClearButtonComponent";
import './calculator.scss';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';

export default class Calculator extends React.Component<{}, {}> {
    render(){
        return (
            <div className="calculator">
              <AppBar title="Calculator"/>
              <div>
                <Display/>
                <GridList cols={4}>
                  <GridTile cols={3}><NumericButtons/></GridTile>
                  <GridTile cols={1}><OperationButtons/></GridTile>
                </GridList>
                <EqualsButton/>
                <AllClearButton/>
              </div>
            </div>
        )
    }
}
