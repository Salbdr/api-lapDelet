import React from "react";
import { Link } from "react-router-dom";

const AllCharacters = (props) => {
  // function clickMe() {
  //     alert("You clicked me!");
  //   }
  return (
    <div className="bg-gray-500">
      {props.photos.map((photo, index) => (
        <div className="flex flex-col place-items-center gap-2" key={index}>
          <img
            className="w-[200px] h-[200px] rounded-md"
            src={photo.image}
            alt={photo.name}
          />

          <div className="flex flex-row items-center">
            <Link
              className="bg-blue-800 p-2 mb-2 rounded-lg hover:bg-black hover:text-white duration-700 "
              to={`/character/${photo.id}`}
            >
              Add
            </Link>
            <Link
              className="bg-blue-800 p-2 mb-2 ml-6 rounded-lg hover:bg-black hover:text-white duration-700 "
              to={`/character/${photo.id}`}
            >
              Edit
            </Link>
            <button
              onClick={() => props.handleDelete(photo.id)}
              className="ml-20 bg-black text-white hover:bg-white hover:text-black p-2 mb-2 rounded-md h-[50px] duration-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCharacters;
