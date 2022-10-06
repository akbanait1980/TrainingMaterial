import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

function Photos() {
  const [photos, setPhotos] = useState([]);

useEffect(function(){
    fetchData();
}, [])

//   useEffect(() => {
//     fetchData();
//   }, []);

  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPhotos(response.data))
      .catch((error) => console.log(error));
  }

  //   const fetchData = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/photos")
  //       .then((response) => setPhotos(response.data))
  //       .catch((error) => console.log(error));
  //   };

  //   const onClickHandler = () => {
  //     fetchData();
  //   };

  return (
    <div>
      <h1 className="text-center">All Photos</h1>
      {/* <button onClick={onClickHandler}>Get Data</button> */}
      <div class="row">
        {photos.map((item) => (
          <Photo key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Photos;
