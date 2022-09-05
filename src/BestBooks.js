import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

import './App.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show:false,
     
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
 componentDidMount=()=>{
  axios
.get(`https://books-lab12.herokuapp.com/books`)
.then(result =>{
  this.setState({
    books:result.data
  })
})
.catch(err =>{
  console.log(err);
})
}

handleShow=()=>{
  this.setState({
    show:true,
   
  })
}
handleclose=()=>{
  this.setState({
    show:false,
   
  })
}
addBookinfo=(e)=>{
  e.preventDefault();
  const obj={
  title:e.target.title.value,
   description:e.target.description.value,
   status:e.target.status.value
  }

axios
.post(`https://books-lab12.herokuapp.com/books`,obj)
.then(result =>{
  swal("Good job!", "Book added successfly!", "success");

  this.setState({
    books:result.data
  })
})
}

deleteBook =(id)=>{
  swal("Are you sure you want to delete this book?", {
    buttons: ["Oh noez!", "Aww yiss!"],
  });
axios
.delete(`https://books-lab12.herokuapp.com/deleteBook/${id}`)
.then(result =>{
  this.setState({
    books:result.data
  })
})

}


  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button variant="primary" onClick={this.handleShow} className="buttonAdd">
       Add Book
      </Button>
      
      <Modal show={this.state.show}  onHide={this.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A NEW BOOK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.addBookinfo}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book title here ..."
                autoFocus
                name="title"
              />
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book description here ..."
                name="description"
                autoFocus
              />
             
            </Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Life changing" name="status">
     
      <option value="Life changing">Life changing</option>
      <option value="Fovorite Five">Fovorite Five</option>
      <option value="Reccomended To Me">Reccomended To Me</option>
    </Form.Select>  
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Button variant="primary" type="submit" onClick={this.handleclose} >
            Add  NEW Book ! 
          </Button>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleclose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        <Carousel >
        {this.state.books.length ? (
       
       
     
 this.state.books.map(item=>{
return(

  <Carousel.Item  >
        <img
          className="d-block w-100"
          src="https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2013/11/22904721_10154834443420894_5113488636444823980_o.jpg"
          alt="First slide"
        />
        <Carousel.Caption  className="items" >
        <h3 >{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.status}</p>
          <Button variant="primary" onClick={()=>this.deleteBook(item._id)} className="vv">
       Delete Book !
      </Button>
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
