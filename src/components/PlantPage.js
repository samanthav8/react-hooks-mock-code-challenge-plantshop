import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants] = useState([])
  const [ searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data) => setPlants(data))
  }, [])
  return (
    <main>
      <NewPlantForm />
      <Search setSearchTerm={setSearchTerm}/>
      {<PlantList plants = {plants} searchTerm={searchTerm}/>}
    </main>
  );
}

export default PlantPage;
