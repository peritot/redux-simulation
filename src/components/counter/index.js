import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';
import './index.less';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className="row">
        <Button className="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
        <span className="value">{count}</span>
        <Button className="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
      </div>
      <div className="row">
        <input className="textbox" aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <Button className="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </Button>
        <Button className="asyncButton" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </Button>
      </div>
    </div>
  );
}

export default Counter;
