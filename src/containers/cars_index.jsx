import React, { Component } from  'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  render () {
    return (
      <div>
        {
        this.props.cars.map((car) => {
          return car.brand
        })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarsIndex);