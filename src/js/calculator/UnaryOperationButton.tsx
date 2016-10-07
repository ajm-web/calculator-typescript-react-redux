import * as React from "react";
import * as UnaryOperations from "./UnaryOperations";
import * as NumberInputStore from "./NumberInputStore";
import InputButton from "./InputButton";
import {InputAction} from "./NumberInputStore";

export class UnaryOperationButtonProps {
  operation: UnaryOperations.UnaryOperation;
}


export default class UnaryOperationButton extends InputButton<UnaryOperationButtonProps> {
  action(): InputAction {

    const input: number = this.currentValue.value;

    return {
      type: NumberInputStore.InputActionType.Set,
      number: this.props.operation.operation(input)
    };
  }

  label(): string {
    return this.props.operation.operator;
  }

}
