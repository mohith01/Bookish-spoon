import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";


export const CardList = () => {
  const [cardData,setCardData] = React.useState([
  //   {
  //     id: "c",
  //     category: "Pizza",
  //     title: "5 Food Apps Delivering the Best of Your City",
  //     pointOfInterest: 80,
  //     backgroundColor: "#814A0E",
  //     content: "<h1> Oi What even you doing</h1> <h2> Learn cooking bitch",
  //     ingredient: "Cheese, Pasta, Spice",
  //     Cooking_time: "50 mins",
  //     imgurl: "/images/0.jpg"
  //   },
  //   {
  //     id: "f",
  //     category: "How to",
  //     title: "Arrange Your Apple Devices for the Gram",
  //     pointOfInterest: 120,
  //     backgroundColor: "#959684",
  //     content: "Bacon",
  //     ingredient: "Bacon, Pasta, Hotch",
  //     Cooking_time: "50 mins",
  //     imgurl: "https://justcook.butcherbox.com/wp-content/uploads/2020/07/dylan-sauerwein-NQDNtKKO2fA-unsplash-800x450.jpg"
  //   },
  //   {
  //     id: "a",
  //     category: "Pedal Power",
  //     title: "Map Apps for the Superior Mode of Transport",
  //     pointOfInterest: 260,
  //     backgroundColor: "#5DBCD2"
  //   },
  //   {
  //     id: "g",
  //     category: "Holidays",
  //     title: "Our Pick of Apps to Help You Escape From Apps",
  //     pointOfInterest: 200,
  //     backgroundColor: "#8F986D"
  //   },
  //   {
  //     id: "d",
  //     category: "Photography",
  //     title: "The Latest Ultra-Specific Photography Editing Apps",
  //     pointOfInterest: 150,
  //     backgroundColor: "#FA6779"
  //   },
  //   {
  //     id: "h",
  //     category: "They're all the same",
  //     title: "100 Cupcake Apps for the Cupcake Connoisseur",
  //     pointOfInterest: 60,
  //     backgroundColor: "#282F49"
  //   },
  //   {
  //     id: "e",
  //     category: "Cats",
  //     title: "Yes, They Are Sociopaths",
  //     pointOfInterest: 200,
  //     backgroundColor: "#AC7441"
  //   },
  //   {
  //     id: "b",
  //     category: "Holidays",
  //     title: "Seriously the Only Escape is the Stratosphere",
  //     pointOfInterest: 260,
  //     backgroundColor: "#CC555B"
  //   }
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





