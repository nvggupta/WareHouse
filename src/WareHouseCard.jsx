import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WareHouseCard({ id, name, cluster, code, city, space }) {
  const navigate = useNavigate();

  return (
    <div 
      className={`p-4 rounded-lg border border-black w-fit min-w-[400px] flex flex-col gap-3 cursor-pointer hover:shadow-lg transition-shadow duration-300 `}
      onClick={() => navigate(`/house/${id}`)}
    >
      <div className="flex gap-3 text-3xl font-[600]">
        <h3>{id}.</h3>
        <h1>{name}</h1>
      </div>
      <p className="text-2xl">{code}</p>
      <div className="flex text-xl gap-3 items-center">
        <p className="border-r-2 border-black pr-3">{city}</p>
        <p className="border-r-2 border-black pr-3">{cluster}</p>
        <div className="flex gap-1">
          <label>Space:</label>
          <p>{space}</p>
        </div>
      </div>
    </div>
  );
}

export default WareHouseCard;
