import {createStore, applyMiddleware, Action} from 'redux';
import thunk from 'redux-thunk';

export class ActionType {
  static TO_LEFT = 'NUMBER_INPUT_STATE_STORE_ACTION_TO_LEFT';
  static TO_RIGHT = 'NUMBER_INPUT_STATE_STORE_ACTION_TO_RIGHT';
}

export enum NumberInputState {
  Left, Right
}

export interface NumberInputStoreAction extends Action {
  type: string
}

const initialState = NumberInputState.Left;

export const numberInputReducer = (state: NumberInputState = initialState, action: NumberInputStoreAction) => {
  switch(action.type) {
    case ActionType.TO_LEFT:
      return NumberInputState.Left;
    case ActionType.TO_RIGHT:
      return NumberInputState.Right;
  }
};

export const instance = createStore(numberInputReducer, applyMiddleware(thunk));
