import React, { PureComponent as Component} from 'react';
import Show from './Show';


class BudSearch extends Component {

  //Define getInfo () AJAX REQUEST

  render() {
    return (
      <div>
        <h2> Search for your buddy! </h2>
        <SearchForm onSubmit = { this.getInfo } />
        <Show />
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor () {
    super ();
    this.state = {
      query: "",
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput (e) {
    this.setState ( { query: e.target.value } );
  }

  _handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit( this.state.query );
  }


  render() {
    return (
      <form onSubmit = { this._handleSubmit }>
        <input type = "search" placeholder = "Northern Lights" onInput = { this._handleInput } />
        <input type = "submit" value = "Search" />
      </form>
    );
  }
}

export default BudSearch;
