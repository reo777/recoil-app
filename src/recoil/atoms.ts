import {atom} from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export interface TodoListState {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
