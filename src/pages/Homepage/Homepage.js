import React, { useContext } from "react";
import ProductCard from "../../components/Product/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <div className="w-full h-full">
      <img
        className="w-full w-70"
        src="https://img.gigatron.rs/m.html/apple/apple_mac/images/01_header.jpg"
        alt="slika"
      />

      <div className=" w-full flex flex-wrap flex-row bg-gray-100">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
