import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import {url} from './config'
import SearchGif from './components/SearchGif';
import Gifs from './components/Gifs'

class App extends Component {

  state = {
    giffs: [],
    loading: false
  }

 searchGifs = async text => {
   let query = url.concat(text)
   let giffs={}
   const res = await axios.get(
    query
   )
   giffs = res.data.data.map(d => {
     return {
       image_url: d.images.downsized.url
     }
   })
   this.setState({
     giffs: giffs
   })
   console.log(this.state.giffs)
    
 }

  render() {
    return (
      <div className="App">
        <div className="all-center">
          <h1>Wyszukiwarka gifów</h1>
          <p>Wyświetl gify z <a href='http://giphy.com'>giphy</a></p>
        </div>
        <SearchGif searchGifs={this.searchGifs} />
        <Gifs giffs={this.state.giffs} />
      </div>
    );
  }
}
export default App