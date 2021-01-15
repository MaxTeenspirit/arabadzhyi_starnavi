import React from 'react';
import {connect} from 'react-redux';
import { fetchTableSize, addSelected, toggleStart, clearHistory } from '../../redux/actions';
import Select from '../../components/Select/Select';
import Loader from "../../components/Loader/Loader";

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      options: [],
      button: true,
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
    if(prevProps.start && !this.props.start) this.props.clearHistory();
  }

  handleOptions = data => {
    const result = [];
    for (let key in data) {
      result.push({value: data[key].field, label: key})
    }
    this.setState({options: result, selected: result[0].value}) ;
  }

  handleChange = event => {
    this.setState({selected: Number(event.target.value)})
  }

  handleButton = () => {
    this.setState({button: !this.state.button}, () => {
      this.props.toggleStart(!this.state.button);
    });
  }

  render() {
    const { options, button } = this.state;
    const { selected } = this.props;
    const buttonTitle = button ? 'START' : 'STOP';
    if(!selected) {
      return <Loader />
    }
    return (
      <section className='select-wrapper'>
        <Select options={options} handleChange={this.handleChange} />
        <button onClick={this.handleButton} className='main-button'>{buttonTitle}</button>
      </section>
    )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data.data,
    selected: state.data.selected,
    start: state.history.start
  }
};

export default connect(mapStateToProps, {
  fetchTableSize,
  addSelected,
  toggleStart,
  clearHistory
})(SelectContainer);
