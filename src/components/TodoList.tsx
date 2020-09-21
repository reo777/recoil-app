import * as React from 'react';
import {useRecoilValue} from 'recoil';

import {TodoListState} from '../recoil/atoms';
import {filteredTodoListState} from '../recoil/selectors';
import {TodoItemCreator} from './TodoItemCreator';
import {TodoListFilters} from './TodoListFilters';

import {TodoItem} from './TodoItem';
import {TodoListStats} from './TodoListStats';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem: TodoListState) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
