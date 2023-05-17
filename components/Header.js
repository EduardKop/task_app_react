
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { Button } from 'react-bootstrap';
import ModalWindow from './Modal';



function Header({title,description}) {
   const [showModal, setShowModal] = useState(false);
   const handleOpenModal = () => {
      setShowModal(true);
    };
  


  return (
    <header className="app-header">
      <section className={styles.appTitle}>
        <h1>{title}</h1>
       
      </section>
   
      <section className={styles.addNewTaskBtn}>
      <Button onClick={handleOpenModal}>Добавити картку</Button>
      <ModalWindow showModal={showModal} setShowModal={setShowModal} />

      </section>
    </header>
  );
}

export default Header;
