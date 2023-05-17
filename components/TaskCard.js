import styles from '../styles/TaskCard.module.css';
import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalWindowComment from './ModalComment'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveProductData } from '../store';

export default function TaskCard({id,name,count,height,width,weight,comments, deleteTask}) {
   const [showModal, setShowModal] = useState(false);
   const dispatch = useDispatch();

   const handleOpenModal = () => {
      setShowModal(true);
      dispatch(saveProductData(id));
      
    };
    const savedProductId = useSelector((state) => state.productData);

   return(
   <>
      <div className={styles.taskCardWrapper}>
      <div className={styles.taskCardContent}>
        
         <div className={styles.names}>
         <span>{name}</span>
         <span className={styles.close} onClick={() => deleteTask(id)}>Х</span>
         </div>
         <div className={styles.values}>
         <span>Кількість {count}</span>
         <span>Висота {height}</span>
         <span>Ширина {width}</span>
         <span>Вага {weight}</span>
         </div>
      </div> 

      <div className={styles.taskCardComments}>
      <div className={styles.taskCardCommentsBtn}>
      <Button onClick={handleOpenModal}>добавити коментар</Button>
      </div>
      <ModalWindowComment showModal={showModal} setShowModal={setShowModal} savedProductId={savedProductId}/>

      <span>Коментарі</span>
         <div className={styles.taskCardCommentsArea}>
            <span>{comments}</span>
         </div>
      </div>
      </div>
   </>
   )
}