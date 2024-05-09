"use client";
import React, { useEffect, useState } from "react";
import { allSelectedData } from "@/components/Features/Slices/virtualDataSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "@/components/Cards/card";

const LiveRoom = () => {
  const x = useSelector(allSelectedData);
  console.log(x);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (x.length > 0) {
      router.push("/virtualexperience/category");
    }
    const fetchVeProducts = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getVEFilter`;
        const response = await axios.post(apiUrl, x, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    const fetchProductByCategory = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/relatedProducts`;
        const response = await axios.get(apiUrl, {
          params: {
            category: x.category,
          },
        });
        setSimilarProducts(response.data); // Save the filtered products in state
        console.log("ve products", similarProducts);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchVeProducts();

    if (x.category) {
      fetchProductByCategory();
    }
  }, []);

  const [isDataFilled, setIsDataFilled] = useState(false);
  const [optionClick, setOptionClick] = useState("Instant Meeting");

  const handleSwitchOption = (option) => {
    setOptionClick(option);
  };

  const [userData, setUserData] = useState({ name: "", mobile: "" });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleJoin = () => {
    // Call Api
    setIsDataFilled(true);
  };

  return (
    <div className="pt-[9vh] ">
      <div className="sm:px-[50px] flex px-[20px]">
        <div className="relative w-3/4 bg-gray-200 h-[90vh] border-2 border-black">
          <div className=" absolute bottom-4 w-full flex gap-2 justify-center">
            <button className="bg-red-500 hover:bg-red-400 text-xs text-center text-white font-medium shadow-sm  rounded-full w-10 h-10">
              Mute
            </button>
            <button className="bg-red-500 hover:bg-red-400 text-xs text-center text-white font-medium shadow-sm  rounded-full w-10 h-10">
              Mute
            </button>
            <button className="bg-red-500 hover:bg-red-400 text-xs text-center text-white font-medium shadow-sm  rounded-full w-10 h-10">
              Mute
            </button>
            <button className="bg-red-500 hover:bg-red-400 text-xs text-center text-white font-medium shadow-sm  rounded-full w-10 h-10">
              Mute
            </button>
            <button className="bg-red-500 hover:bg-red-400 text-xs text-center text-white font-medium shadow-sm  rounded-full w-10 h-10">
              Mute
            </button>
          </div>
        </div>
        <div className="relative flex flex-col w-1/4 pl-4  h-[90vh] ">
          <div className="relative w-full overflow-y-scroll h-[92%]">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Related Products</h1>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, idx) => (
                  <div className="grid grid-cols-1 w-full h-full fade-in ">
                    <Card
                      title={product.productTitle}
                      price={product.perUnitPrice}
                      demandtype={product.demandtype}
                      desc={product.productTitle}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      id={product._id}
                      category={product.category}
                      productId={product.productId}
                    />
                  </div>
                ))
              ) : (
                <div className="w-[200px] mb-2 h-[250px] bg-black">
                  No products found
                </div>
              )}
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold mb-2">Similar Products</h1>
              {similarProducts.length > 0 ? (
                similarProducts.map((product, idx) => (
                  <div className="grid grid-cols-1 w-full h-full fade-in ">
                    <Card
                      title={product.productTitle}
                      price={product.perUnitPrice}
                      demandtype={product.demandtype}
                      desc={product.productTitle}
                      imgSrc={product.images}
                      rating={product.ratings}
                      key={idx}
                      id={product._id}
                      category={product.category}
                      productId={product.productId}
                    />
                  </div>
                ))
              ) : (
                <div className="w-[200px] mb-2 h-[250px] bg-black">
                  No products found
                </div>
              )}
            </div>
          </div>
          <div className="absolute p-2 w-full bottom-0 left-0 h-[8%] ">
            <input
              type="text"
              className="w-full h-full border-1 bg-gray-200  rounded-full p-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {!isDataFilled && (
        <div className=" fixed h-full w-screen  bg-black/50 z-[9999] backdrop:blur-sm top-0 left-0">
          <section className="pt-[15vh] text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50  w-[35%] flex ">
            <div className="flex justify-around text-lg font-medium">
              <h1
                className={`border-b-2 cursor-pointer ${
                  optionClick === "Instant Meeting"
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => handleSwitchOption("Instant Meeting")}
              >
                Instant Meeting
              </h1>
              <h1
                className={`border-b-2 cursor-pointer ${
                  optionClick === "Schedule Meeting"
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => handleSwitchOption("Schedule Meeting")}
              >
                Schedule Meeting
              </h1>
            </div>

            {optionClick === "Instant Meeting" && (
              <div>
                <div className="">
                  <h1 className="text-lg font-semibold">Enter Name</h1>
                  <input
                    type="text"
                    name="name"
                    placeholder="john doe"
                    className="w-full mt-2 h-10 border-1 bg-gray-100 px-4 rounded-full py-2 focus:outline-none"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="mt-2">
                  <h1 className="text-lg font-semibold">Mobile no.</h1>
                  <input
                    type="number"
                    placeholder="9876543210"
                    name="mobile"
                    className="w-full mt-2 h-10 border-1 bg-gray-100  rounded-full px-4 py-2 focus:outline-none"
                    onChange={handleOnChange}
                  />
                </div>

                <button
                  className="bg-black text-white w-full h-10 rounded-full mt-4"
                  onClick={handleJoin}
                >
                  Join
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default LiveRoom;
