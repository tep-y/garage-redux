import React, { Component } from  'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render () {
    return (
      <div key="add" className="form-container" >
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
            <label htmlFor="InputGarage">Garage</label>
              <Field
                name="garage"
                type="text"
                component="input"
                placeholder={this.props.garage}
                className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
              <Field
                name="brand"
                type="text"
                component="input"
                placeholder="Aston Martin"
                className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
              <Field
                name="model"
                type="text"
                component="input"
                placeholder="DB MArk III"
                className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
              <Field
                name="owner"
                type="text"
                component="input"
                placeholder="James Bond"
                className="form-control"
              />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
              <Field
                name="plate"
                type="text"
                component="input"
                placeholder="WAG-GON"
                className="form-control"
              />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);