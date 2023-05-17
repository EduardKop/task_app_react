
import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
//firebase
import { ref, push, onValue, set } from "firebase/database";
import { app } from '../lib/firebase'; 
import { db } from '../lib/firebase';

function ModalWindowComment({showModal,setShowModal,savedProductId}) {
   const [comment, setComment]   = useState('');


   const handleCloseModal = () => {
      setShowModal(false);
      };
   
   const handleFormSubmit = (e) => {
   e.preventDefault();
   //save Form data in Firebase DB  
   const newElementRef = push(ref(db, `TasksData/${savedProductId}/comments`));

   set(newElementRef, {
     "coment1":comment
   });
   handleCloseModal();

   };

  

   return(
      <Modal show={showModal} onHide={handleCloseModal} className="modal-blur">
      <Modal.Header>
        <Modal.Title>Create your comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div >
            <label htmlFor="productName"></label>
              <input
              placeholder=""
              type="text"
              className="form-control"
              id="productName"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              />
          </div>
          
          <div>
            <Button type="button"  onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" >
              Save
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
   )
}

export default ModalWindowComment