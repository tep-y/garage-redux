import React, { Component } from  'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    this.fetchCars
  }

  render () {
    return (
      <div>
        <Link to="/cars/new">Add a car</Link>
        {
        this.props.cars.map((car) => {
          return <p key={car.id}><strong>{car.brand} {car.model}</strong> Owner: {car.owner}</p>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);