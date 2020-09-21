import * as React from 'react';
import {useRecoilState} from 'recoil';

import {todoListState, TodoListState} from '../recoil/atoms';

const replaceItemAtIndex = (arr: any, index: any, newValue: any) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: any, index: any) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const TodoItem = ({item}: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}: any) => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList: any = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList: any = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };
  console.log(item);

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <br />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
