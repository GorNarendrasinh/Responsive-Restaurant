
import React from "react";
import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";
import Image4 from "../../assets/6.png.png"
import Image5 from "../../assets/7.png.png"
import Image6 from "../../assets/8.png.png"
import Image7 from "../../assets/9.png.png"
import Image8 from "../../assets/10.png.png"
import Image9 from "../../assets/11.png"

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
    price: "$50.99",
    name: " Steak Symphony ",
    desc: "perfectly grilled steak with a side of fresh cherry tomato and arugula salad—a classic, protein-rich, and flavor-packed plate.",
  },
  {
    image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$42.99",
    name: "  Classic Spaghetti & Meatballs",
    desc: " A timeless Italian dish featuring al dente spaghetti smothered in a rich tomato basil sauce, topped with tender, hand-rolled meatballs. Garnished with parmesan and fresh herbs for a comforting meal with bold flavors."  },
  {
    image: Image5,
    rating: "⭐⭐⭐⭐⭐",
    price: "$35.99",
    name: "  Grilled Garlic Butter Steak ",
    desc: "uicy, flame-grilled steak marinated in garlic herb butter, served with a lemon wedge for a zesty finish. This savory delight melts in your mouth and is perfect for any meat lover craving premium taste.  ",
  },
  {
    image: Image6,
    rating: "⭐⭐⭐⭐⭐",
    price: "$39.99",
    name: 
    
    " Breakfast Power Bowl  ",
    desc: " A nutrient-packed breakfast bowl featuring fresh fruits, crunchy granola, and creamy yogurt. Topped with honey and nuts, it's a perfect mix of sweet, crunchy, and smooth textures to start your day with energy and taste.",
  },
   {
    image: Image7,
    rating: "⭐⭐⭐⭐⭐",
    price: "$52.99",
    name: "  Royal Indian Thali ",
    desc: "A grand Indian platter featuring a rich assortment of curries, dals, naan, rice, and desserts. This thali delivers a complete cultural feast with authentic spices and vibrant colors—perfect for lovers of traditional Indian cuisine. ",
  },
  {
    image: Image8,
    rating: "⭐⭐⭐⭐⭐",
    price: "$42.99",
    name: " Deluxe Asian Bento Platter ",
    desc: "A beautifully arranged Asian-style platter with rice, grilled veggies, dumplings, and flavorful mains. Served with chopsticks and a side of sauces, this dish is a fusion of health, variety, and bold taste in every bite. ",
  },
  {
    image: Image9,
    rating: "⭐⭐⭐⭐⭐",
    price: "$55.99",
    name: "  Garden Fresh Salad Bowl ",
    desc: " A refreshing medley of crispy lettuce, cherry tomatoes, cucumbers, onions, and olives, tossed in a zesty vinaigrette. This wholesome salad is perfect for clean eating without sacrificing flavor or satisfaction..",
  },
];

const TopList = () => {
  return (
    <div className="container py-11">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold">Top List</h1>
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
              className="w-40 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
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

