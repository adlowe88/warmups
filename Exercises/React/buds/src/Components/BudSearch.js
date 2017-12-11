import React, { PureComponent as Component} from 'react';
import Show from './Show';


class BudSearch extends Component {

  //Define getInfo () AJAX REQUEST
  getInfo (query) {
    const budURL = "http://localhost:3000/";
    jsonp(budUrl { callback: "jsoncallback" }).then( (results) => {
      // console.log( results );
      const images = results.photos.photo.map( generateURL );
      // const images = [];
      // for (let i = 0; i < results.photos.photo.lenth; i++) {
      //   let image = generateURL( results.photos.photo[i] );
      //   images.push(image);
      // };

      // console.log( images );
      this.setState( { images } );
    });
  }

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
