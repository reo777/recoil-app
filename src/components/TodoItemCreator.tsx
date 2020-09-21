import * as React from 'react';
import {SetterOrUpdater, useSetRecoilState} from 'recoil';

import {todoListState, TodoListState} from '../recoil/atoms';

// utility for creating unique Id
let id = 0;
const getId = () => {
  return id++;
};

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('');
  const setTodoList: SetterOrUpdater<any> = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList: TodoListState[]) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}: any) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
