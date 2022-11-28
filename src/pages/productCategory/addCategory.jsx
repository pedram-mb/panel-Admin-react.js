import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddCategory = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div onClick={handleShow}>
            <i className="bi bi-plus-square-fill"></i> 
        </div>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>
            افزودن دسته محصولات
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>دسته والد</Form.Label>
              <Form.Control type="text" placeholder="بدون دسته" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>عنوان</Form.Label>
              <Form.Control type="text" placeholder="عنوان دسته" autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> 

            <Form.Group className="mb-3">
                <label for="formFile" className="form-label">تصویر</label>
                <input className="form-control" type="file" id="formFile" />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            ذخیره
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default AddCategory;
