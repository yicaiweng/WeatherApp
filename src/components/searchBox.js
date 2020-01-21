import React, {Component} from 'react';

class SearchBox extends Component {
    state = { term: ''};

    onSubmit = event => {
        event.preventDefault();
        console.log(this.state.term)
        // this.props.onSubmit(this.state.term);
    }

   render() {
       return (
           <div className="ui input focus">
               <form onSubmit={this.onSubmit}>
               <input type="text" placeholder="Please Input zipcode" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
               <button className="ui button teal">Search</button>
               </form>
           </div>
       )
   }
}

export default SearchBox;