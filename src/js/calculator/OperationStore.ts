import {createStore, applyMiddleware, Action} from "redux";
import thunk from "redux-thunk";
import {Operation} from "./opeartions";

export const ActionTypes = {
    "SET": "SET_OPERATION",
    "UNSET": "UNSET_OPERATION"
};

export interface OperationAction extends Action {
    type: string;
}

export interface SetOperationAction extends OperationAction {
    operation: Operation;
}

export interface UnsetOperationAction extends OperationAction {

}

export const reducer = (state: Operation = undefined, action: OperationAction) => {
    switch (action.type) {
        case ActionTypes.SET:
            const act = action as SetOperationAction;
            return act.operation;
        case ActionTypes.UNSET:
            return undefined;
    }
};

export const instance = createStore(reducer);
