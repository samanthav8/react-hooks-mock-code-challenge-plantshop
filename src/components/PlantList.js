import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm}) {
  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <ul className="cards">{filteredPlants.map((plant) => {
      return <PlantCard 
      key = {plant.id}
      plant = {plant}/>
    })}</ul>
  );
}

export default PlantList;
