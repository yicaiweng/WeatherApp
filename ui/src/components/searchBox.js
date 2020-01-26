import React, {Component} from 'react';

class SearchBox extends Component {
    state = { term: ''};

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

   render() {
       return (
           <div className="ui input focus">
               <form className="ui form" onSubmit={this.onSubmit}>
                   <div className="inline field">
                       <input type="text" placeholder="Please Input zipcode" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
                       <button className="ui button primary">Search</button>
                   </div>
               </form>
           </div>
       )
   }
}

export default SearchBox;