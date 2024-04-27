import React, {useState} from "react";

function NewPlantForm() {
  const [newPlantData, setNewPlantData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e) {
    setNewPlantData({
      ...newPlantData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const plantData = {
      name: newPlantData.name,
      image: newPlantData.image,
      price: newPlantData.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
    .then((r) => r.json())
    .then((newPlant) => console.log(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
