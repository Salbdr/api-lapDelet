import React from "react";

const TargetCharater = (props) => {
  const character = props.photos.find((char) => char.id === props.id);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 h-[100vh] ">
    <div>
      <img className="border border-1 border-gray-500 rounded-md mt-10 p-3 shadow-xl hover:scale-75 duration-300" src={character.image} />
      <div>
        <h2 className="border-1 border-blue-700 font-bold text-center"><strong className="text-blue-300 mr-5">name:</strong>{character.name}</h2>
        {/* <p className="border-1 border-blue-700 font-bold text-center"><strong className="text-blue-300 mr-5">hair:</strong>{character.hair}</p> */}
        {/* <p className="border-1 border-blue-700 font-bold text-center"><strong className="text-blue-300 mr-5">status:</strong>{character.status}</p> */}
        {/* <p className="border-1 border-blue-700 font-bold text-center"><strong className="text-blue-300 mr-5">species:</strong> {character.species}</p> */}
        <p className="border-1 border-blue-700 font-bold text-center"><strong className="text-blue-300 mr-5">gender:</strong> {character.gender}</p>
        {/* <p className="border-1 border-blue-700 font-bold text-center"> <strong className="text-blue-300 mr-5">origin:</strong>{character.origin}</p> */}
      </div>

    </div>

    
    <div>
    <label className="input input-bordered flex items-center gap-2">
  <input  type="text" className="grow" placeholder="name"  />
</label>
<label className="input input-bordered flex items-center gap-2">
   
  <input  type="text" className="grow" placeholder="gender" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <input value={character.image} type="text" className="grow" placeholder="image" />
 
</label>
{/* <label className="input input-bordered flex items-center gap-2"> */}
 
  <button><span className="badge badge-info">Edit</span></button>
{/* </label> */}


    </div>
    
    </div>
  );
};

export default TargetCharater;
