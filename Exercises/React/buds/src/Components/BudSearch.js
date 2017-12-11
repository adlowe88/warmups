import React, { PureComponent as Component} from 'react';


class BudSearch extends Component {
  render() {
    return (
      <div>
        <h2> Search for your buddy! </h2>
        <SearchForm />
      </div>
    );
  }
}

class SearchForm extends Component {
  render() {
    return (
      <form>
        <input type = "search" placeholder = "Northern Lights" />
        <input type = "submit" value = "Search" />
      </form>
    );
  }
}

export default BudSearch;
