import React, { useEffect, useState } from "react";
import Image from "next/image";
import Label from "../Label/Label";
import TabImage from "../Cards/TabImage";
import axios from "axios";
import Link from "next/link";

const meausrement = ({ filteredProductData }) => {
  const [roomData, setRoomData] = useState({});
  const [reviewData, setReviewData] = useState([]);

  const fetchRoomData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/getRoomByQuery",
        {
          params: {
            category:
              (filteredProductData &&
                filteredProductData.length > 0 &&
                filteredProductData[0].category) ||
              "",
          },
        }
      );
      setRoomData(response.data);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };

  const fetchReviewData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/getSpecialReview"
      );
      setReviewData(response.data[0]);
    } catch (error) {
      console.error("Error fetching review data:", error);
    }
  };

  useEffect(() => {
    fetchRoomData();
    fetchReviewData();
  }, [filteredProductData]);

  return (
    <div className="flex mt-8 md:flex-row w-full flex-col relative overflow-hidden ">
      <div className="relative h-[600px] md:w-2/3">
        {roomData && (
          <TabImage
            src={roomData.imgSrc}
            alt={`Image  of Children`}
            width={1000}
            height={338}
            labelData={roomData.children}
          />
        )}
      </div>
      {reviewData && (
        <div className="md:w-1/3  sm:h-auto sm:flex-grow bg-zinc-100  px-10 sm:py-10 py-5">
          <div className="flex flex-col ">
            <div>
              <p>{reviewData && reviewData.comment}</p>
            </div>
            <div className="flex flex-row feedcon mt-2 cursor-pointer">
              <Image
                src={reviewData && reviewData.image}
                width={45}
                height={45}
                alt="arrow"
                className="usercon aspect-square object-cover rounded-full"
              />
              <Link href={`${reviewData.instagramUrl}`} rel="noopener noreferrer" target="_blank">
                <p>{reviewData && reviewData.name}</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default meausrement;
