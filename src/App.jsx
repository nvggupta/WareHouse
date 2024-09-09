import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { addData } from "../HouseWareSlice/HouseWareSlice";
import { IoClose } from "react-icons/io5";
import WareHouseCard from "./WareHouseCard";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [val, setVal] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    code: "",
    cluster: "",
    city: "",
    space_available: "",
    is_registered: "",
    is_live: "",
  });

  const dispatch = useDispatch();
  const { data, city, cluster } = useSelector((state) => state.WareHouses);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(userData));
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const filterData = (items) => {
    return items.filter((elem) =>
      elem.name.toLowerCase().includes(val.toLowerCase())
    );
  };

  return (
    <div className="relative p-4">
      <h1 className="text-4xl sm:text-6xl text-red-600 text-center">WareHouse</h1>
      <div className="flex flex-col sm:flex-row justify-around items-center w-full mt-5">
        <div className="flex gap-4 sm:gap-10 justify-center items-start w-full sm:w-2/3">
          <input
            type="text"
            placeholder="Search Warehouse"
            className="p-2 sm:p-5 outline-none rounded-lg w-2/3 text-lg sm:text-xl border border-black"
            onChange={(e) => setVal(e.target.value)}
          />
          <button className="p-2 sm:p-5 rounded-lg w-32 sm:w-48 border border-black">
            Search
          </button>
        </div>
        <div
          className="mt-4 sm:mt-0 mb-4 flex items-center justify-center gap-4 bg-blue-600 p-3 sm:p-5 rounded-lg text-white text-lg sm:text-xl cursor-pointer"
          onClick={handleAddClick}
        >
          <span>Add New Warehouse</span>
          <IoIosAdd className="text-2xl sm:text-3xl" />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-9">
        {filterData(data)?.map((elem, ind) => (
          <WareHouseCard
            key={ind}
            name={elem.name}
            cluster={elem.cluster}
            id={elem.id}
            city={elem.city}
            space={elem.space_available}
            code={elem.code}
          />
        ))}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 p-4">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-lg">
            <IoClose
              className="text-right text-2xl cursor-pointer float-right"
              onClick={handleClosePopup}
            />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">Code</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, code: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">City</label>
                  <select
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, city: e.target.value }))
                    }
                  >
                    <option value="" disabled selected>
                      Select City
                    </option>
                    {city?.map((elem, ind) => (
                      <option key={ind}>{elem}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">Space Available</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        space_available: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">Cluster</label>
                  <select
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        cluster: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled selected>
                      Select Cluster
                    </option>
                    {cluster.map((elem, ind) => (
                      <option key={ind}>{elem}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">Is Registered</label>
                  <select
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        is_registered: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled selected>
                      Select Option
                    </option>
                    <option value="yes">True</option>
                    <option value="no">False</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold">Is Live</label>
                  <select
                    className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        is_live: e.target.value,
                      }))
                    }
                  >
                    <option value="" disabled selected>
                      Select Option
                    </option>
                    <option value="yes">True</option>
                    <option value="no">False</option>
                  </select>
                </div>
                <div className="col-span-full flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 p-2 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
