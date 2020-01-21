import React, {Component} from 'react';

class SearchBox extends Component {
   render() {
       return (
           <div className="ui input focus">
               <input type="text" placeholder="Please Input zipcode"></input>
               <button className="ui button teal">Search</button>
           </div>
       )
   }
}

export default SearchBox;