import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
 componentDidMount=()=>{
  axios
.get('http://localhost:3001/books')
.then(result =>{
  this.setState({
    books:result.data
  })
})
.catch(err =>{
  console.log(err);
})
}


 

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel >
        {this.state.books.length ? (
       
       
     
 this.state.books.map(item=>{
return(

  <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2013/11/22904721_10154834443420894_5113488636444823980_o.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
        <h3 >{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.status}</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      
       
          
  
)
})





  ) : ( 
          <h3>No Books Found :(</h3>
        )}
       </Carousel>
      </>
    )
  }
}

export default BestBooks;
