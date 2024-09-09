import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import WarehouseImage from "./assests/2023-3.jpg";

import { updateData } from "../HouseWareSlice/HouseWareSlice";
const HouseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.WareHouses);

  const item = data.find((ele) => ele.id == id);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name,
    city: item.city,
    cluster: item.cluster,
    space_available: item.space_available,
    code: item.code,
    type: item.type,
    is_registered: item.is_registered,
    is_live: item.is_live,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    dispatch(updateData({
      type: "UPDATE_WAREHOUSE",
      updateData: { id, ...formData },
    }))
  };

  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center gap-6 p-5">
      {/* Image Section */}
      <div className="h-[50vh] md:h-[100vh] w-full md:w-1/2 p-5 rounded-lg flex justify-center items-center">
        <img
          src={WarehouseImage}
          className="h-full w-full object-cover rounded-lg shadow-lg shadow-slate-400"
          alt="Warehouse"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-5 border border-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-800 p-2 rounded w-full"
            />
          ) : (
            item.name
          )}
        </h1>
        <ul className="space-y-3">
          <li>
            <label className="font-semibold">City: </label>
            {isEditing ? (
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              />
            ) : (
              <span>{item.city}</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Cluster: </label>
            {isEditing ? (
              <input
                type="text"
                name="cluster"
                value={formData.cluster}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              />
            ) : (
              <span>{item.cluster}</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Space Available: </label>
            {isEditing ? (
              <input
                type="number"
                name="space_available"
                value={formData.space_available}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              />
            ) : (
              <span>{item.space_available} sq. ft.</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Code: </label>
            {isEditing ? (
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              />
            ) : (
              <span>{item.code}</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Type: </label>
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              />
            ) : (
              <span>{item.type}</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Is Registered: </label>
            {isEditing ? (
              <select
                name="is_registered"
                value={formData.is_registered}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            ) : (
              <span>{item.is_registered ? "Yes" : "No"}</span>
            )}
          </li>
          <li>
            <label className="font-semibold">Is Live: </label>
            {isEditing ? (
              <select
                name="is_live"
                value={formData.is_live}
                onChange={handleInputChange}
                className="bg-gray-800 p-2 rounded w-full"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            ) : (
              <span>{item.is_live ? "Yes" : "No"}</span>
            )}
          </li>
        </ul>
        <div className="flex justify-end mt-4">
          {isEditing ? (
            <button
              onClick={handleSaveClick}
              className="bg-green-600 p-2 rounded-lg shadow-md hover:bg-green-700"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="bg-blue-600 p-2 rounded-lg shadow-md hover:bg-blue-700"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
