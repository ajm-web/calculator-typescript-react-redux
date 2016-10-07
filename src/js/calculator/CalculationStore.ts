import {createStore, Action} from "redux";
import * as NumberInputStateStore from "./NumberInputStateStore";
import * as NumberInputStore from "./NumberInputStore";
import * as OperationStore from "./OperationStore";
import * as LeftOperandStore from "./LeftOperandStore";
import * as RightOperandStore from "./RightOperandStore";

export class ActionTypes {
    static Execute = "EXECUTE_CALC";
}

const execute = () => {
    const left = LeftOperandStore.instance.getState().value;
    const right = RightOperandStore.instance.getState().value;
    const operation = OperationStore.instance.getState();

    console.log(operation, left, right);

    const result = operation.operation(left, right);
    LeftOperandStore.instance.dispatch({
        number: result,
        type: NumberInputStore.InputActionType.Set
    });
    NumberInputStateStore.instance.dispatch({
        type: NumberInputStateStore.ActionType.TO_LEFT
    });
};

const reducer = (state = {}, action: Action) => {
    switch (action.type) {
        case ActionTypes.Execute:
            execute();
    }

    return state;
};

export const instance = createStore(reducer);
