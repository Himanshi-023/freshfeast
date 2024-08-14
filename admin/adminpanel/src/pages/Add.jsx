import React, { useState } from 'react';
import { assets } from '../assets/admin_assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';



const Add = ({url}) => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: " ",
    description: " ",
    price: " ",
    category: "Salad",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }


  const onSubmitHandler = async (event) => {  //here we are store the all form data and then send it to end points 
    event.preventDefault();
    const formData = new FormData();   //FormData is a built-in JavaScript object that allows you to easily construct a set of key/value pairs representing form fields and their values, which can then be sent using methods like fetch or XMLHttpRequest.
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("image", image) //here we are sending image state
    const responce = await axios.post(`${url}/api/food/add`, formData);
    if (responce.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad"
      })
      setImage(false)
       toast.success(responce.data.message)
    }

    else{
      toast.error(responce.data.message)
    }
  }
  return (
    <div className="container mx-auto  flex ">
      <form className="bg-white rounded-lg px-16  py-5  space-y-6 max-w-lg w-full" onSubmit={onSubmitHandler}>
        {/* Image Upload Section */}
        <div className="flex flex-col ">
          <p className="text-lg font-semibold mb-2">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
              className=" h-24 object-cover mb-2"
            />
          </label>
          <input type="file" id="image" hidden required onChange={(e) => setImage(e.target.files[0])} />
        </div>

        {/* Product Name Section */}
        <div>
          <p className="text-lg font-semibold mb-2">Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={data.name}  //here we are provide the initial value 
            onChange={onChangeHandler}
          />
        </div>

        {/* Product Description Section */}
        <div>
          <p className="text-lg font-semibold mb-2">Product Description</p>
          <textarea
            name="description"
            rows={6}
            placeholder="Write content here"
            className="w-full p-2 border border-gray-300 rounded-lg"
           value={data.description}  //here we are provide the initial value 
            onChange={onChangeHandler}
          ></textarea>
        </div>

        {/* Grid Layout for Product Price and Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Product Category Section */}
          <div>
            <p className="text-lg font-semibold mb-2">Product Category</p>
            <select
              name="category"
              value={data.category}  //here we are provide the initial value 
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-300 "
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price Section */}
          <div>
            <p className="text-lg font-semibold mb-2">Product Price</p>
            <input
              type="number"
              name="price"
              value={data.price}  //here we are provide the initial value 
              onChange={onChangeHandler}
              placeholder="$20"
              className="w-full p-2 border border-gray-300 "
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex ">
          <button
            type="submit"
            className="w-32 py-2 bg-green-400 text-white hover:bg-green-500 transition"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
