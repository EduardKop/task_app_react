import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from '../styles/Modal.module.css';

import { useDispatch } from 'react-redux';
import { saveProductData } from '../store';
import { useSelector } from 'react-redux';

function ModalWindow({ showModal, setShowModal }) {
   const productData = useSelector((state) => state.productData);

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState('');

   const dispatch = useDispatch();
   const handleCloseModal = () => {
   setShowModal(false);
   };


  const handleFormSubmit = (e) => {//save data in store 
    e.preventDefault();
    const data = {
      name,
      count,
      size: {
        width,
        height
      },
      weight
    };
    dispatch(saveProductData(data));
    handleCloseModal();
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="modal-blur">
      <Modal.Header>
        <Modal.Title>Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="productName">Product Name</label>
            <input
              placeholder="Product Name"
              type="text"
              className="form-control"
              id="productName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productCount">Count</label>
            <input
              type="number"
              className="form-control"
              id="productCount"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productWidth">Width</label>
            <input
              type="number"
              className="form-control"
              id="productWidth"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productHeight">Height</label>
            <input
              type="number"
              className="form-control"
              id="productHeight"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="productWeight">Weight</label>
            <input
              type="text"
              className="form-control"
              id="productWeight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className={styles.modal_control}>
            <Button type="button" className={styles.cancel_btn} onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" className={styles.save_btn}>
              Save
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalWindow;