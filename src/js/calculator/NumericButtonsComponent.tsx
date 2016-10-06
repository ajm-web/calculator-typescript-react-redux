import * as React from 'react';
import {range} from 'lodash';
import NumericButton from './NumericButtonComponent';
import PeriodButton from "./PeriodButtonComponent";

export default class NumericButtons extends React.Component<{}, {}> {
    render() {
        return <ul>{range(0, 10).map((n) => {
            return <li  key={`input-${n}`}><NumericButton value={n}/></li>;
        })}<li><PeriodButton/></li></ul>
    }
}
