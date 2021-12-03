import React, { PureComponent } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from '@/store/actions/counter.action';
import './index.less';

class Counter extends PureComponent {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <div className="row">
          <Button className="button" aria-label="Increment value" onClick={() => increment()}>
            +
          </Button>
          <span className="value">{count}</span>
          <Button className="button" aria-label="Decrement value" onClick={() => decrement()}>
            -
          </Button>
        </div>
        {/* <div className="row">
        <input className="textbox" aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <Button className="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </Button>
        <Button className="asyncButton" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </Button>
      </div> */}
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(countActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
