import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class UpdateForm extends React.Component{
render(){
return(
 
    <Modal show={this.props.show}  onHide={this.props.handleclose}>
    <Modal.Header closeButton>
      <Modal.Title>Update A  BOOK</Modal.Title>
      
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={this.props.update}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Book title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book title here ..."
            autoFocus
            name="title"
            defaultValue={this.props.currentBook.title}
          />
          <Form.Label>Book Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book description here ..."
            name="description"
            autoFocus
            defaultValue={this.props.currentBook.description}
          />
         
        </Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Select aria-label="Life changing" name="status" defaultValue={this.props.currentBook.status}>
 
  <option value="Life changing">Life changing</option>
  <option value="Fovorite Five">Fovorite Five</option>
  <option value="Reccomended To Me">Reccomended To Me</option>
</Form.Select>  
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Button variant="primary" type="submit" onClick={this.props.close} >
        Update! 
      </Button>
      </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.props.handleclose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>
)


}



}
export default UpdateForm;