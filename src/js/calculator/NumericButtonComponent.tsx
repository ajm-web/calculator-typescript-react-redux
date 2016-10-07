import * as React from "react";
import * as NumberInputStore from "./NumberInputStore";
import InputButton from "./InputButton";
import {InputAction} from "./NumberInputStore";



export interface NumberInputProps {
    value: number;
}

export default class NumericButton extends InputButton<NumberInputProps> {

    action(): InputAction {
        return {type: NumberInputStore.InputActionType.Append, number: this.props.value};
    }

    label(): string {
        return this.props.value + "";
    }

}
