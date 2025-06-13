
import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: " Paneer Power Bow ",
    desc:  " The dish in the image appears to be a fresh salad topped with grilled paneer (Indian cottage cheese), ",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$45.88",
    name: " Rainbow Buddha Bowl ",
    desc: " vibrant and colorful Buddha bowl featuring a healthy mix of ingredients like avocado, quinoa, red cabbage, lemon, peas, pomegranate, cherry tomatoes, sprouts, ",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$30.99",
    name: " Steak Symphony ",
    desc: "perfectly grilled steak with a side of fresh cherry tomato and arugula salad—a classic, protein-rich, and flavor-packed plate.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
