import * as React from 'react';
import {range} from 'lodash';
import NumericButton from './NumericButtonComponent';
import PeriodButton from "./PeriodButtonComponent";
import {GridList, GridTile} from 'material-ui/GridList';

export default class NumericButtons extends React.Component<{}, {}> {

  get numberButtons() {
    return range(9, -1, -1).map((n) => {
        return <NumericButton value={n}/>;
    });
  }

  wrapWithli(elem:any, i:number) {
    const width = i == 9 ? 2 : 1;
    return <GridTile cols={width} key={i}>{elem}</GridTile>
  }

  render() {
    const buttons = [...this.numberButtons, <PeriodButton/>];
    return <GridList cols={3} cellHeight={40}>{buttons.map(this.wrapWithli)}</GridList>;
  }
}
