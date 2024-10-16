import React from "react";
import { Button, Card } from "antd";

function Cart({ cart, removeFromCart }) {
  return (
    <div
      style={{
        marginTop: "120px",
      }}
      className="container mx-auto p-4"
    >
      {cart.length === 0 ? (
        <p className="text-lg">Korzina bo'sh</p>
      ) : (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              {cart.map((item) => (
                <Card
                  key={item.id}
                  className="mb-4 flex justify-between items-center"
                  style={{ width: "100%" }}
                  cover={<img alt={item.title} src={item.image} />}
                >
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-700">{item.description}</p>
                    <p className="text-lg font-bold">Narxi: ${item.price}</p>
                  </div>
                  <Button
                    type="danger"
                    className="ml-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    O'chirish
                  </Button>
                </Card>
              ))}
            </div>
            <div className="md:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Buyurtma ma'lumotlari</h2>
              <p className="text-lg">Jami mahsulotlar: {cart.length}</p>
              <p className="text-lg">Jami narx:</p>

              <Button type="primary" className="mt-4 w-full">
                Buyurtma berish
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
