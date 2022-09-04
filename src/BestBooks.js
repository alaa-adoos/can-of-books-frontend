import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {}
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
async componentDidMount(){
let url='http://localhost:3001/books';
let res=await axios.get(url);
console.log(res.data);
try{
this.setState({
  books:res.data
})
}
catch{
  //
}


 }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          
          <p>Book Carousel coming soon

{ this.state.books.map((item)=>{
return(
  <Carousel fade>
      <Carousel.Item>
      
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       

        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}.</p>
          <p>{item.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        

        <Carousel.Caption>
        <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
)
})

}
</p>   
  ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
