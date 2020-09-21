import * as React from 'react';
import {useRecoilState} from 'recoil';

import {todoListFilterState} from '../recoil/atoms';

export const TodoListFilters = React.memo(() => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}: any) => {
    setFilter(value);
  };
  console.log();

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
});
