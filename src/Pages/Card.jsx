/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import { Spin } from "antd";
import "antd/dist/reset.css";

const ProductCard = styled.div`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TopBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
`;

const Discount = styled.span`
  color: red;
  font-weight: bold;
`;

const CurrentPrice = styled.p`
  font-size: 18px;
  color: #515354;
  margin: 5px 0;
`;

const PurchaseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  .rating {
    color: #ffa41b;
  }

  .purchases {
    color: #555;
  }
`;

const DeliveryInfo = styled.p`
  color: green;
  margin: 5px 0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

function Card({ setCart }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

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
        maxWidth: "97%",
      }}
      className="container mx-auto p-4 mt-20"
    >
      <ToastContainer />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.map((item) => (
            <ProductCard key={item.id}>
              <TopBadge>TOP</TopBadge>
              <Link to={`/details/${item.id}`}>
                <ProductImage src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </Link>
              <p>{item.description}</p>
              <PriceSection>
                <OldPrice>1,000,000 UZS</OldPrice>
                <Discount>-49%</Discount>
              </PriceSection>
              <CurrentPrice>{item.price} UZS</CurrentPrice>
              <PurchaseInfo>
                <span className="rating">★ 4.0</span>
                <span className="purchases">50 купили</span>
              </PurchaseInfo>
              <DeliveryInfo>🚚 до 14 дней</DeliveryInfo>
              <AddToCartButton onClick={() => addToCart(item)}>
                savatga qo'shish
              </AddToCartButton>
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
