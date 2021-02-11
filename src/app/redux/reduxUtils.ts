import { Dictionary } from 'lodash';
import { fromPairs, omit } from 'lodash/fp';
import { AnyAction, Reducer, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from './rootReducer';

export type ActionCreator = (...args: any[]) => AnyAction;

export interface Thunk {
  (...args: any[]): ThunkAction<void, RootState, void, any>;
  <R>(...args: any[]): ThunkAction<R, RootState, void, any>;
}

export type ReducerState<S = any, A extends Action<any> = AnyAction> = (
  state: S,
  action: A
) => S;
export type ReducerDictionary<S> = Dictionary<ReducerState<S>>;

export const createReducer = <S>(
  initialState: S,
  reducerDict: ReducerDictionary<S>
): Reducer<S> => (state = initialState, action: AnyAction) =>
  reducerDict[action.type] ? reducerDict[action.type](state, action) : state;

const simpleReducerCase = (state: any, action: any) => ({
  ...state,
  ...omit(['type'], action),
});
export const handleSimpleReducerUpdates = <S extends object>(
  actionTypes: string[]
) =>
  fromPairs(
    actionTypes.map(actionType => [actionType, simpleReducerCase]) as Array<
      [string, Reducer<S>]
    >
  );
