import { useState } from 'react';
import clsx from 'clsx';

import styles from './Counter.module.css';

export function Counter({initialCount = 0, diff = 1}) {
  const [count, setCount] = useState(initialCount);

  // let cls = '';
  // if(count > 0) {
  //   cls = 'positive';
  // } else if(count < 0) {
  //   cls = 'negative';
  // }

  // function handleClick(e) {
  //   const type = e.target.dataset.type;
  //   if (type === 'increment') {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // }

  function handleClick(d) {
    setCount(count + d);
  }

  return (
    <>
      <h1 title={`My count is ${count}!`}>Counter</h1>
      {/* <output className={count > 0 ? 'positive' : count < 0 ? 'negative' : ''}>{count}</output> */}
      <output className={clsx({ [styles.positive]: count > 0, [styles.negative]: count < 0 })}>
        {count}
      </output>
      <div>
        <button data-type="decrement" onClick={() => handleClick(-diff)}>
          -
        </button>
        <button data-type="increment" onClick={() => handleClick(diff)}>
          +
        </button>
      </div>
    </>
  );
}
