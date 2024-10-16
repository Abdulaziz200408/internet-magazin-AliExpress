import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!item) return <div className="text-center">Yuklanmoqda...</div>;

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`Mahsulot qo'shildi: ${item.title}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div
      style={{
        marginTop: "110px",
      }}
      className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg "
    >
      <img
        style={{
          maxHeight: "500px",
        }}
        src={item.image}
        alt={item.title}
        className="w-full h-64 md:h-auto md:w-1/2 rounded-lg object-cover"
      />
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold">Narxi: ${item.price}</span>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={decrementCount}
            className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400 transition duration-200"
          >
            -
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={incrementCount}
            className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400 transition duration-200"
          >
            +
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
            Savatga qo'shish
          </button>
          <button
            onClick={() => addToCart(item)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Xarid qilish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
