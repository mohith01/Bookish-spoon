import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { CardList } from "./CardList";
import { useState,useEffect} from 'react';
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
    </div>
  );
}


// function App (){
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);


//     useEffect(()=> {
//       const runFetch = async () => {
//         setIsLoading(true);
//         try {
//           const res = await fetch('http://127.0.0.1:8000/api/');
//           const json = await res.json();
//           setProjects(json);
//           setIsLoading(false);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       runFetch();
//     }, []);


//     return (
//       <div>
//         {projects.map(project => (
//           <div key={project.id}>
//           <h1>{project.medium_url}</h1>
//           <h3 className="app__description">{project.description}</h3>
//         </div>
//         ))}
//       </div>
//     );
// };
// export default App;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
