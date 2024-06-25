import React, { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter as  Router ,Routes,Route ,Link, BrowserRouter} from "react-router-dom";
import AllCharacters from "./components/AllCharacters";
import TargetCharacter from "./components/TargetCharacter";
const App = () => {
  const [photos, setPhoto] = useState([]);
  
  const data = async () => {
    const response = await axios.get(
      "https://655127797d203ab6626e943b.mockapi.io/Character_fahad"

    );
    // console.log(response);

    setPhoto(response.data);
  };
  useEffect(() => {
    data();
  }, []);
  const handleDelete = (id) => {
    setPhoto(photos.filter(photo => photo.id !== id));
  };

  return (
   <>
   <div className="join mt-4">
  <div>
    <div>
      <input className="input input-bordered join-item" placeholder="Search" />
    </div>
  </div>
  <select className="select select-bordered join-item">
    <option disabled selected>Filter</option>
    <option>name</option>
    <option>gender</option>
    <option>image</option>
  </select>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new</span>
    <button className="btn join-item">Search</button>
  </div>
</div>
    <div className="jon mt-5 flex justify-between ">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllCharacters photos={photos}   handleDelete={handleDelete}   />} />
      {photos.map((photo,index)=>(
        <Route key={index}  path={`/character/${photo.id}`} element={<TargetCharacter photos={photos} id={photo.id}   />} />

      ))}
     
    </Routes>
   </BrowserRouter>
   </div>
   </>
  );
};

export default App;



