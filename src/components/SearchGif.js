import React, { Component } from 'react';

class SearchGif extends Component {
  state= {
    text: ''
  }

//Metoda, która pozwala na dodanie do stanu aktualnie wpisywanego tekstu 
  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchGifs(this.state.text);
    this.setState({ text: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit} className='form all-center'>
          <input className="border" type='text' name='text' placeholder='Wyszukaj gif...' value={this.state.text} onChange={this.onChange} />
          <input type='submit' value='wyszukaj' className='btn btn-dark' />
        </form>
      </div>

    )
  }
}

export default SearchGif;