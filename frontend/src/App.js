import { useEffect, useState } from "react";
import Object from "./Shape";
import styles from './App.module.css';

function App() {
  const [objects, setObjects] = useState([])
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost/')
      const data = await response.json()
      setObjects(data)
    }
    getData()
  }, [])
  return (
    <div className={styles.app}>
      {objects.map((object, index) => (
        <Object key={index} object={object} />
      ))}
    </div>
  );
}

export default App;
