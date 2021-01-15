import React from 'react';
import {connect} from 'react-redux';
import { fetchTableSize, addSelected } from '../../redux/actions';
import Select from '../../components/Select/Select';
import Loader from "../../components/Loader/Loader";

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      options: [],
    }
  }

  componentDidMount() {
    this.props.fetchTableSize();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data && Object.keys(this.props.data) !== 0) {
      this.handleOptions(this.props.data);
    }
    if(prevState.selected !== this.state.selected) this.props.addSelected(this.state.selected);
  }

  handleOptions = data => {
    const result = [];
    for (let key in data) {
      result.push({value: data[key].field, label: key})
    }
    this.setState({options: result, selected: result[0].value}) ;
  }

  handleChange = event => {
    this.setState({selected: event.target.value})
  }

  render() {
    const { options } = this.state;
    const { selected } = this.props;

    if(!selected) {
      return <Loader />
    }
    return (
      <section>
        <Select options={options} handleChange={this.handleChange} />
        <h1>{this.state.selected}</h1>
      </section>
    )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data.data,
    selected: state.data.selected
  }
};

export default connect(mapStateToProps, {
  fetchTableSize,
  addSelected
})(SelectContainer);
