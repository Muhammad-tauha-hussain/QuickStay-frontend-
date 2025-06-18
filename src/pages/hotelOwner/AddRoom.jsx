import React, { useState } from "react";
import Title from "../../components/Title";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: "0",
    amenities: {
      "Free wifi": false,
      "Free breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  // Handle image selection
  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [key]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <>
      <form>
        <Title
          textAlign="left"
          // font="outfit"
          heading="Add Room"
          paragraph="Add a new room to your hotel. Fill out the form below to create a new room listing with all necessary details such as room type, price, amenities, and images for your guests."
        />
        {/* Upload Images */}
        <p className="text-gray-800 mt-10 font-medium">Room Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          {Object.keys(images).map((key) => (
            <label
              key={key}
              htmlFor={`roomImage${key}`}
              className="h-36 bg-gray-100 border border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              {images[key] ? (
                <img
                  src={images[key]}
                  alt={`preview-${key}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-400">Click to upload</span>
              )}
              <input
                type="file"
                id={`roomImage${key}`}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, key)}
              />
            </label>
          ))}
        </div>
        {/* Room Type and Price */}
        <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
          <div className="flex-1 max-w-48">
            <p className="text-gray-800 mt-4">Room Type</p>
            <select
              onChange={(e) =>
                setInputs({ ...inputs, roomType: e.target.value })
              }
              value={inputs.roomType}
              required
              className="w-full border border-gray-300 opacity-70 mt-1 rounded p-2"
            >
              <option value="" disabled selected>
                Select Room Type
              </option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Suite</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="family">Family Room</option>
              <option value="executive">Executive Suite</option>
            </select>
          </div>
          {/* pricePerNight */}
          <div className="flex-1 max-w-48">
            <p className="text-gray-800 mt-4">Price Per Night</p>
            <input
              type="number, string"
              value={inputs.pricePerNight}
              onChange={(e) =>
                setInputs({ ...inputs, pricePerNight: e.target.value })
              }
              required
              className="w-full border border-gray-300 opacity-70 mt-1 rounded p-2"
              placeholder="Enter Price"
            />
          </div>
        </div>

        {/* Amenities */}
        <p className="text-gray-800 mt-4">Amenities</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`amenities${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity],
                    },
                  })
                }
                className="h-4 w-4"
              />
              <label
                htmlFor={`amenities${index + 1}`}
                className="text-gray-700 cursor-pointer"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-2 rounded mt-8 cursor-pointer hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Room
        </button>
      </form>
    </>
  );
};

export default AddRoom;