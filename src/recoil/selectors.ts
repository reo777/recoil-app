import {selector} from 'recoil';

import {todoListState, todoListFilterState, TodoListState} from './atoms';

// 完了未完了
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log(list);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item: TodoListState) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item: TodoListState) => !item.isComplete);
      default:
        return list;
    }
  },
});

// ・ToDoアイテムの総数・完了したアイテムの総数・未完了アイテムの総数・完了したアイテムの割合
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item: TodoListState) => item.isComplete,
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
