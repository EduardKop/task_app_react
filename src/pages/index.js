import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase'; 
import { ref, push, onValue, set } from "firebase/database";
import TaskCard from '../../components/TaskCard';
import styles from '../../styles/Index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {//take data from the firebase and add it to the state
      const tasksRef =  ref(db, 'TasksData')
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setTasks(Object.values(data));
        }
      })
   
      console.log(tasks)
    
  }, []);

  
  const deleteTask = (id) => { //Delete cards
    const taskRef = ref(db, 'TasksData');
    onValue(taskRef, (snapshot) => {
      const data = snapshot.val();
      Object.values(data).forEach((task) => {
        if (task.id === id) {
          console.log(id);
          const taskToDeleteRef = ref(db, `TasksData/${id}`);
          set(taskToDeleteRef, null)
          .then(() => {
            console.log(`Task ${name} deleted successfully`);
          })
          .catch((error) => {
            console.error("Error deleting task:", error);
          });
        }
      });
    });
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Header
        title='Tasks App'
        description =''
      />
      <div className={styles.taskWrapper}>

      {tasks.length > 0 ? (
          Object.values(tasks).map((task) => (
            <TaskCard
              key={task.id} 
              id={task.id} 
              name={task.name}
              count={task.count}
              width={task.size ? task.size.width : ''}
              height={task.size ? task.size.height : ''}
              weight={task.weight} 
              comments='немає коментарів'
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
    </div>
    </>
  )
}
