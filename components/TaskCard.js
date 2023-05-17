import styles from '../styles/TaskCard.module.css';

export default function TaskCard({id,name,count,height,width,weight,coments, deleteTask}) {
   
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
      <span>Коментарі</span>
      <div className={styles.taskCardCommentsBtn}>
      </div>
      <div className={styles.taskCardCommentsArea}>
      <span>{coments}</span>
      </div>
      </div>
      </div>
   </>
   )
}