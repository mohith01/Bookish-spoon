import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";


export const CardList = () => {
  const [cardData,setCardData] = React.useState([
 
  ]);

  const List = ({ match, history }) => {
    console.log(match);
    return (<ul className="card-list">
      {cardData.map(card => (
        <Card
          key={card.id}
          isSelected={false}
          history={history}
          {...card}
        />
        
      ))}
    </ul>
  )};

useEffect(()=>{
  const runFetch = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const json = await res.json();
      setCardData(json);
    } catch (error) {
      console.log(error);
    }
  };
  runFetch();
},[])


return (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);
}





