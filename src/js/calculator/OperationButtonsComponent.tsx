import * as React from 'react';
import {operations} from './opeartions';
import OperationButton from './OperationButtonComponent';

export default class OperationButtons extends React.Component<{}, {}> {
    constructor(){
        super();
    }

    render() {
        return <ul>{operations.map(((op, i) => <li key={i}><OperationButton operation={op}/></li>))}</ul>
    }
}