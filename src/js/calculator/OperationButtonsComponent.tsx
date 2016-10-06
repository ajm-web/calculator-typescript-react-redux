import * as React from 'react';
import {operations} from './opeartions';
import OperationButton from './OperationButtonComponent';
import {GridList, GridTile} from 'material-ui/GridList';

export default class OperationButtons extends React.Component<{}, {}> {
    constructor(){
        super();
    }

    get buttons (){
      return operations.map((op) => <OperationButton operation={op}/>)
    }

    wrapWithli(elem:any, i:number) {
      return <GridTile key={i}>{elem}</GridTile>
    }

    render() {
      return <GridList cols={1} cellHeight={40}>{this.buttons.map(this.wrapWithli)}</GridList>;
    }
}
