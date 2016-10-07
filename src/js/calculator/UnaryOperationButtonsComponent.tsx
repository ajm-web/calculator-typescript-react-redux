import * as React from "react";
import {GridList, GridTile} from "material-ui/GridList";
import UnaryOperationButton from "./UnaryOperationButton";
import {operations} from './UnaryOperations';
import AllClearButton from "./AllClearButtonComponent";


export default class UnaryOperationButtons extends React.Component<{}, {}> {


    get buttons() {
        return [
            <AllClearButton/>,
            <UnaryOperationButton operation={operations.PERCENTAGE}/>,
            <UnaryOperationButton operation={operations.FLIP}/>
        ];
    }

    wrapWithli(elem: any, i: number) {
        return <GridTile key={i}>{elem}</GridTile>;
    }

    render() {
        return <GridList cols={3} cellHeight={40}>{this.buttons.map(this.wrapWithli)}</GridList>;
    }
}