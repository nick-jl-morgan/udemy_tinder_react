import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }


  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is return will show up as props inside of BookList

  return{
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
