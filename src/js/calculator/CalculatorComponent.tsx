import * as React from "react";
import OperationButtons from "./OperationButtonsComponent";
import NumericButtons from "./NumericButtonsComponent";
import {Display} from "./DisplayComponent";
import EqualsButton from "./EqualsButton";
import AllClearButton from "./AllClearButtonComponent";
import "./calculator.scss";
import AppBar from "material-ui/AppBar";
import {GridList, GridTile} from "material-ui/GridList";
import UnaryOperationButtons from "./UnaryOperationButtonsComponent";

export default class Calculator extends React.Component<{}, {}> {
    render() {
        return (
            <div className="calculator">
              <AppBar title="Calculator"/>
              <div>
                <Display/>
                <GridList cols={4} cellHeight={400}>
                  <GridTile cols={3}>
                    <div id="unary-operation-buttons"><UnaryOperationButtons/></div>
                    <div id="numeric-buttons"><NumericButtons/></div>
                  </GridTile>
                  <GridTile cols={1}>
                      <OperationButtons/>
                  </GridTile>
                </GridList>
              </div>
            </div>
        );
    }
}
