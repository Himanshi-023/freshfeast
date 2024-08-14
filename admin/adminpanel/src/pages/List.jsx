
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching list");
      }
    } catch (error) {
      toast.error("Error fetching list");
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {  
      const response = await axios.post(`${url}/api/food/remove` , {id:itemId});
      await fetchList();
      
      if (response.data.success) {
     
        toast.success("Item removed successfully");
      } else {
        toast.error("Error removing item");
      }
    } catch (error) {
      toast.error("Error removing item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="px-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Food List</h1>
      <div className="mb-4">
        {/* Header for large screens */}
        <div className="hidden md:grid grid-cols-6 gap-4 text-center font-semibold mb-4">
          <p className="font-bold">Image</p>
          <p className="font-bold">Title</p>
          <p className="font-bold">Price</p>
          <p className="font-bold">Category</p>
          <p className="font-bold">Action</p>
        </div>
        {/* Header for small screens */}
        <div className="md:hidden mb-4 text-center font-semibold">
          <p className="font-bold">Food Items</p>
        </div>
      </div>

      <hr className="mb-4" />

      {list.map((item) => (
        <div
          key={item._id}
          className="flex md:grid md:grid-cols-6 gap-4 items-center mb-4 p-4 bg-white rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-4 md:mb-0 md:col-span-1">
            <img
              src={`${url}/images/`+item.image}   //multer  k through 
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
          </div>
          <div className="text-center md:col-span-1">
            <p className="text-base md:text-lg font-medium">{item.name}</p>
          </div>
          <div className="text-center md:col-span-1">
            <p className="text-base md:text-lg">${item.price}</p>
          </div>
          <div className="text-center md:col-span-1">
            <p className="text-base md:text-lg">{item.category}</p>
          </div>
          <div className="text-center md:col-span-1 flex justify-center">
            <button
              onClick={() => handleRemoveItem(item._id)}
              className="text-red-500 hover:text-red-700 font-semibold text-base"
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
