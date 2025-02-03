import React, { useState } from "react";
import {
  Menu,
  UtensilsCrossed,
  Coffee,
  Pizza,
  BookDown as Bowl,
  Sandwich,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// Menu data
const menuItems =  {
  chinese: [
    {
      id: 1,
      name: "Kung Pao Chicken",
      price: 15.99,
      description: "Spicy diced chicken with peanuts and vegetables",
    },
    {
      id: 2,
      name: "Dim Sum Platter",
      price: 18.99,
      description: "Assorted steamed dumplings",
    },
    {
      id: 3,
      name: "Chow Mein",
      price: 13.99,
      description: "Stir-fried noodles with vegetables",
    },
    {
      id: 4,
      name: "Spring Rolls",
      price: 9.99,
      description: "Crispy rolls stuffed with vegetables or meat",
    },
    {
      id: 5,
      name: "Manchurian",
      price: 14.99,
      description:
        "Deep-fried vegetable or chicken balls in spicy sauce (popular in India)",
    },
    {
      id: 6,
      name: "Hakka Noodles",
      price: 12.99,
      description:
        "Wok-tossed noodles with vegetables and soy sauce (popular in India)",
    },
    {
      id: 7,
      name: "Hot and Sour Soup",
      price: 7.99,
      description: "Spicy and tangy soup with mushrooms and tofu",
    },
    {
      id: 8,
      name: "Schezwan Fried Rice",
      price: 13.99,
      description:
        "Spicy stir-fried rice with chili and garlic (popular in India)",
    },
    {
      id: 9,
      name: "Peking Duck",
      price: 29.99,
      description: "Crispy roasted duck with sweet bean sauce",
    },
    {
      id: 10,
      name: "Mapo Tofu",
      price: 16.99,
      description: "Spicy tofu with minced pork and Sichuan peppercorns",
    },
    {
      id: 11,
      name: "Sweet and Sour Chicken",
      price: 17.99,
      description: "Crispy chicken in sweet and tangy sauce",
    },
    {
      id: 12,
      name: "Sesame Chicken",
      price: 16.99,
      description: "Fried chicken in sweet sesame sauce",
    },
    {
      id: 13,
      name: "Steamed Bao Buns",
      price: 11.99,
      description: "Soft buns filled with meat or vegetables",
    },
    {
      id: 14,
      name: "Lemon Chicken",
      price: 15.99,
      description: "Crispy chicken in lemon-flavored sauce",
    },
    {
      id: 15,
      name: "Lo Mein",
      price: 14.99,
      description: "Soft stir-fried noodles with meat and vegetables",
    },
    {
      id: 16,
      name: "Cantonese Chow Fun",
      price: 15.99,
      description: "Flat rice noodles stir-fried with beef and vegetables",
    },
    {
      id: 17,
      name: "Sichuan Hot Pot",
      price: 24.99,
      description:
        "Spicy and numbing hot pot with assorted meats and vegetables",
    },
    {
      id: 18,
      name: "Gobi Manchurian",
      price: 13.99,
      description: "Crispy cauliflower balls in spicy sauce (popular in India)",
    },
    {
      id: 19,
      name: "Egg Foo Young",
      price: 14.99,
      description: "Chinese-style omelet with vegetables and meat",
    },
    {
      id: 20,
      name: "Dragon Chicken",
      price: 16.99,
      description:
        "Spicy stir-fried chicken with a tangy sauce (popular in India)",
    },
    {
      id: 21,
      name: "Char Siu (Chinese BBQ Pork)",
      price: 19.99,
      description: "Roasted pork with a sweet glaze",
    },
    {
      id: 22,
      name: "Dan Dan Noodles",
      price: 14.99,
      description: "Spicy Sichuan-style noodles with minced pork",
    },
    {
      id: 23,
      name: "Honey Chilli Potatoes",
      price: 12.99,
      description:
        "Crispy potato fries tossed in honey-chili sauce (popular in India)",
    },
    {
      id: 24,
      name: "Momos",
      price: 10.99,
      description:
        "Steamed or fried dumplings filled with meat or vegetables (popular in India)",
    },
    {
      id: 25,
      name: "Chicken Lollipop",
      price: 14.99,
      description: "Fried chicken wings in spicy sauce (popular in India)",
    },
    {
      id: 26,
      name: "Braised Pork Belly",
      price: 22.99,
      description: "Slow-cooked pork belly in soy-based sauce",
    },
    {
      id: 27,
      name: "Beef and Broccoli",
      price: 18.99,
      description: "Stir-fried beef with broccoli in oyster sauce",
    },
  ],
  indian: [
    {
      id: 1,
      name: "Butter Chicken",
      price: 16.99,
      description:
        "Creamy tomato-based curry with tender chicken (sold in India)",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 14.99,
      description: "Grilled cottage cheese with spices (sold in India)",
    },
    {
      id: 3,
      name: "Dal Makhani",
      price: 12.99,
      description: "Creamy black lentils (sold in India)",
    },
    {
      id: 4,
      name: "Biryani",
      price: 15.99,
      description:
        "Aromatic rice dish cooked with spices and meat or vegetables (sold in India)",
    },
    {
      id: 5,
      name: "Masala Dosa",
      price: 10.99,
      description:
        "Crispy rice pancake filled with spiced potatoes (sold in India)",
    },
    {
      id: 6,
      name: "Tandoori Chicken",
      price: 17.99,
      description:
        "Roasted chicken marinated in yogurt and spices (sold in India)",
    },
    {
      id: 7,
      name: "Rogan Josh",
      price: 18.99,
      description:
        "Kashmiri lamb curry cooked with aromatic spices (sold in India)",
    },
    {
      id: 8,
      name: "Chole Bhature",
      price: 11.99,
      description:
        "Spicy chickpea curry served with deep-fried bread (sold in India)",
    },
    {
      id: 9,
      name: "Palak Paneer",
      price: 13.99,
      description: "Cottage cheese in a creamy spinach gravy (sold in India)",
    },
    {
      id: 10,
      name: "Aloo Paratha",
      price: 9.99,
      description:
        "Stuffed whole wheat flatbread with spiced potatoes (sold in India)",
    },
    {
      id: 11,
      name: "Malai Kofta",
      price: 14.99,
      description:
        "Fried paneer and potato dumplings in a rich tomato gravy (sold in India)",
    },
    {
      id: 12,
      name: "Pani Puri",
      price: 6.99,
      description:
        "Crispy hollow balls filled with spicy tangy water and potatoes (sold in India)",
    },
    {
      id: 13,
      name: "Kadhi Pakora",
      price: 12.49,
      description:
        "Gram flour dumplings in spiced yogurt curry (sold in India)",
    },
    {
      id: 14,
      name: "Dhokla",
      price: 8.99,
      description:
        "Steamed fermented rice and chickpea flour cake (sold in India)",
    },
    {
      id: 15,
      name: "Pav Bhaji",
      price: 11.49,
      description:
        "Spiced mashed vegetable curry served with buttered bread (sold in India)",
    },
    {
      id: 16,
      name: "Hyderabadi Haleem",
      price: 16.99,
      description: "Slow-cooked wheat, meat, and lentil stew",
    },
    {
      id: 17,
      name: "Keema Paratha",
      price: 13.99,
      description: "Flatbread stuffed with spiced minced meat",
    },
    {
      id: 18,
      name: "Mutton Korma",
      price: 19.99,
      description:
        "Rich and creamy mutton curry cooked with spices (sold in India)",
    },
    {
      id: 19,
      name: "Bengali Fish Curry",
      price: 17.49,
      description: "Fish cooked in mustard-based curry (sold in India)",
    },
    {
      id: 20,
      name: "Samosa",
      price: 4.99,
      description:
        "Deep-fried pastry stuffed with spiced potatoes (sold in India)",
    },
    {
      id: 21,
      name: "Shahi Paneer",
      price: 14.99,
      description:
        "Cottage cheese cooked in a creamy tomato and cashew-based gravy (sold in India)",
    },
    {
      id: 22,
      name: "Bhindi Masala",
      price: 11.99,
      description: "Stir-fried okra with Indian spices (sold in India)",
    },
    {
      id: 23,
      name: "Gajar Ka Halwa",
      price: 8.99,
      description:
        "Sweet carrot pudding made with milk and ghee (sold in India)",
    },
    {
      id: 24,
      name: "Rasmalai",
      price: 7.99,
      description:
        "Soft paneer dumplings soaked in saffron-flavored milk (sold in India)",
    },
    {
      id: 25,
      name: "Gulab Jamun",
      price: 6.99,
      description:
        "Deep-fried milk-based dumplings soaked in sugar syrup (sold in India)",
    },
    {
      id: 26,
      name: "Jalebi",
      price: 5.99,
      description:
        "Deep-fried crispy spirals soaked in sugar syrup (sold in India)",
    },
    {
      id: 27,
      name: "Besan Ladoo",
      price: 4.99,
      description:
        "Sweet gram flour balls made with ghee and sugar (sold in India)",
    },
  ],
  italian: [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 14.99,
      description: "Fresh tomatoes, mozzarella, and basil (sold in India)",
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      price: 15.99,
      description: "Creamy pasta with pancetta",
    },
    {
      id: 3,
      name: "Tiramisu",
      price: 8.99,
      description: "Classic Italian coffee-flavored dessert (sold in India)",
    },
    {
      id: 4,
      name: "Lasagna",
      price: 16.99,
      description:
        "Layered pasta with meat, tomato sauce, and cheese (sold in India)",
    },
    {
      id: 5,
      name: "Risotto",
      price: 17.99,
      description:
        "Creamy rice dish cooked with broth and Parmesan (sold in India)",
    },
    {
      id: 6,
      name: "Fettuccine Alfredo",
      price: 15.49,
      description: "Pasta tossed in a creamy Parmesan sauce (sold in India)",
    },
    {
      id: 7,
      name: "Bruschetta",
      price: 9.99,
      description:
        "Grilled bread topped with tomatoes, garlic, and basil (sold in India)",
    },
    {
      id: 8,
      name: "Minestrone Soup",
      price: 10.99,
      description: "Hearty vegetable and bean soup (sold in India)",
    },
    {
      id: 9,
      name: "Gnocchi",
      price: 14.99,
      description:
        "Soft potato dumplings served with various sauces (sold in India)",
    },
    {
      id: 10,
      name: "Penne Arrabbiata",
      price: 13.99,
      description: "Spicy tomato-based pasta dish (sold in India)",
    },
    {
      id: 11,
      name: "Spaghetti Bolognese",
      price: 15.99,
      description: "Pasta with slow-cooked meat sauce (sold in India)",
    },
    {
      id: 12,
      name: "Caprese Salad",
      price: 12.99,
      description:
        "Fresh mozzarella, tomatoes, and basil drizzled with olive oil (sold in India)",
    },
    {
      id: 13,
      name: "Osso Buco",
      price: 22.99,
      description: "Braised veal shanks with vegetables and wine sauce",
    },
    {
      id: 14,
      name: "Arancini",
      price: 11.99,
      description:
        "Deep-fried risotto balls filled with cheese and meat (sold in India)",
    },
    {
      id: 15,
      name: "Panettone",
      price: 9.99,
      description: "Traditional Italian Christmas bread with candied fruit",
    },
    {
      id: 16,
      name: "Ravioli",
      price: 15.99,
      description:
        "Stuffed pasta with cheese, meat, or vegetables (sold in India)",
    },
    {
      id: 17,
      name: "Pesto Pasta",
      price: 14.99,
      description: "Pasta tossed in basil pesto sauce (sold in India)",
    },
    {
      id: 18,
      name: "Tortellini",
      price: 16.49,
      description:
        "Ring-shaped stuffed pasta served with sauce (sold in India)",
    },
    {
      id: 19,
      name: "Focaccia Bread",
      price: 8.99,
      description: "Italian flatbread with olive oil and herbs (sold in India)",
    },
    {
      id: 20,
      name: "Panna Cotta",
      price: 9.49,
      description:
        "Silky Italian dessert made with sweetened cream (sold in India)",
    },
    {
      id: 21,
      name: "Saltimbocca",
      price: 20.99,
      description: "Veal wrapped with prosciutto and sage",
    },
    {
      id: 22,
      name: "Calzone",
      price: 13.99,
      description: "Folded pizza stuffed with cheese and meats (sold in India)",
    },
    {
      id: 23,
      name: "Cannoli",
      price: 7.99,
      description:
        "Crispy pastry filled with sweet ricotta cheese (sold in India)",
    },
    {
      id: 24,
      name: "Stracciatella Gelato",
      price: 6.99,
      description: "Italian chocolate chip gelato (sold in India)",
    },
    {
      id: 25,
      name: "Zuppa Toscana",
      price: 12.99,
      description: "Italian soup with sausage, kale, and potatoes",
    },
    {
      id: 26,
      name: "Affogato",
      price: 7.99,
      description: "Espresso poured over vanilla gelato (sold in India)",
    },
    {
      id: 27,
      name: "Biscotti",
      price: 5.99,
      description: "Crunchy almond-flavored Italian cookies (sold in India)",
    },
  ],
  american: [
    {
      id: 1,
      name: "Classic Burger",
      price: 13.99,
      description: "Angus beef patty with cheese and fries (sold in India)",
    },
    {
      id: 2,
      name: "BBQ Ribs",
      price: 24.99,
      description: "Slow-cooked ribs with house BBQ sauce",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 10.99,
      description: "Romaine lettuce with Caesar dressing (sold in India)",
    },
    {
      id: 4,
      name: "Mac and Cheese",
      price: 12.99,
      description: "Creamy macaroni pasta with cheese sauce (sold in India)",
    },
    {
      id: 5,
      name: "Hot Dog",
      price: 9.99,
      description:
        "Grilled sausage in a soft bun with condiments (sold in India)",
    },
    {
      id: 6,
      name: "Buffalo Wings",
      price: 14.99,
      description:
        "Crispy chicken wings tossed in spicy Buffalo sauce (sold in India)",
    },
    {
      id: 7,
      name: "New York Style Pizza",
      price: 15.99,
      description:
        "Thin-crust pizza with tomato sauce and mozzarella (sold in India)",
    },
    {
      id: 8,
      name: "Philly Cheesesteak",
      price: 16.99,
      description: "Grilled beef with melted cheese in a hoagie roll",
    },
    {
      id: 9,
      name: "Fried Chicken",
      price: 13.99,
      description:
        "Crispy deep-fried chicken with a seasoned crust (sold in India)",
    },
    {
      id: 10,
      name: "Meatloaf",
      price: 14.99,
      description: "Baked ground beef loaf with seasonings",
    },
    {
      id: 11,
      name: "Clam Chowder",
      price: 11.99,
      description: "Creamy seafood soup with potatoes and clams",
    },
    {
      id: 12,
      name: "Grilled Cheese Sandwich",
      price: 8.99,
      description: "Toasted bread with melted cheese (sold in India)",
    },
    {
      id: 13,
      name: "Chicken and Waffles",
      price: 16.99,
      description: "Crispy fried chicken served with waffles and syrup",
    },
    {
      id: 14,
      name: "Shrimp and Grits",
      price: 17.99,
      description: "Southern-style shrimp served over creamy grits",
    },
    {
      id: 15,
      name: "Cornbread",
      price: 6.99,
      description: "Sweet and moist cornbread, often served as a side",
    },
    {
      id: 16,
      name: "Jambalaya",
      price: 18.99,
      description: "Spicy rice dish with sausage, chicken, and seafood",
    },
    {
      id: 17,
      name: "Lobster Roll",
      price: 22.99,
      description: "Buttered lobster served in a toasted bun",
    },
    {
      id: 18,
      name: "Sloppy Joe",
      price: 10.99,
      description: "Ground beef cooked in a tangy sauce served in a bun",
    },
    {
      id: 19,
      name: "Cobb Salad",
      price: 13.99,
      description:
        "Chopped salad with chicken, bacon, and blue cheese (sold in India)",
    },
    {
      id: 20,
      name: "Pulled Pork Sandwich",
      price: 14.99,
      description: "Slow-cooked pulled pork in BBQ sauce served in a bun",
    },
    {
      id: 21,
      name: "Pecan Pie",
      price: 8.99,
      description: "Sweet Southern-style pie with pecan filling",
    },
    {
      id: 22,
      name: "Apple Pie",
      price: 9.99,
      description:
        "Classic American dessert with spiced apple filling (sold in India)",
    },
    {
      id: 23,
      name: "Pancakes with Maple Syrup",
      price: 11.99,
      description: "Fluffy pancakes served with maple syrup (sold in India)",
    },
    {
      id: 24,
      name: "Cheesecake",
      price: 10.99,
      description: "Creamy dessert with a graham cracker crust (sold in India)",
    },
    {
      id: 25,
      name: "Brownies",
      price: 7.99,
      description: "Dense and fudgy chocolate dessert bars (sold in India)",
    },
    {
      id: 26,
      name: "Milkshake",
      price: 6.99,
      description:
        "Creamy blended ice cream drink in various flavors (sold in India)",
    },
    {
      id: 27,
      name: "S'mores",
      price: 5.99,
      description: "Graham crackers with melted chocolate and marshmallows",
    },
  ],
    main_course: [
      {
        "id": 1,
        "name": "Butter Chicken",
        "price": 16.99,
        "description": "Creamy tomato-based curry with tender chicken"
      },
      {
        "id": 2,
        "name": "Paneer Tikka Masala",
        "price": 14.99,
        "description": "Paneer cubes cooked in a rich tomato and cashew gravy"
      },
      {
        "id": 3,
        "name": "Dal Makhani",
        "price": 12.99,
        "description": "Slow-cooked black lentils with butter and cream"
      },
      {
        "id": 4,
        "name": "Biryani",
        "price": 15.99,
        "description": "Aromatic basmati rice cooked with spices and choice of meat/vegetables"
      },
      {
        "id": 5,
        "name": "Rogan Josh",
        "price": 18.99,
        "description": "Kashmiri-style lamb curry cooked with yogurt and aromatic spices"
      },
      {
        "id": 6,
        "name": "Chole Bhature",
        "price": 11.99,
        "description": "Spicy chickpea curry served with deep-fried bread"
      },
      {
        "id": 7,
        "name": "Malai Kofta",
        "price": 14.99,
        "description": "Paneer and potato dumplings in rich tomato gravy"
      },
      {
        "id": 8,
        "name": "Tandoori Chicken",
        "price": 17.99,
        "description": "Marinated chicken roasted in a clay oven"
      },
      {
        "id": 9,
        "name": "Fish Curry",
        "price": 19.99,
        "description": "Fish cooked in a spicy coconut-based curry"
      },
      {
        "id": 10,
        "name": "Stuffed Bell Peppers",
        "price": 13.99,
        "description": "Bell peppers filled with a spiced vegetable and rice mixture"
      }
    ],
    
    beverages: [
      {
        "id": 1,
        "name": "Mango Lassi",
        "price": 5.99,
        "description": "Refreshing yogurt-based mango drink"
      },
      {
        "id": 2,
        "name": "Iced Coffee",
        "price": 4.99,
        "description": "Cold brew coffee with milk and sugar"
      },
      {
        "id": 3,
        "name": "Lemonade",
        "price": 3.99,
        "description": "Fresh lemon juice with sugar and mint"
      },
      {
        "id": 4,
        "name": "Masala Chai",
        "price": 2.99,
        "description": "Indian spiced tea with milk and aromatic spices"
      },
      {
        "id": 5,
        "name": "Cold Coffee",
        "price": 6.99,
        "description": "Blended iced coffee with chocolate and cream"
      }
    ],
  
    desserts: [
      {
        "id": 1,
        "name": "Chocolate Lava Cake",
        "price": 7.99,
        "description": "Warm chocolate cake with a molten center"
      },
      {
        "id": 2,
        "name": "Cheesecake",
        "price": 8.99,
        "description": "Creamy dessert with a graham cracker crust"
      },
      {
        "id": 3,
        "name": "Brownies",
        "price": 6.99,
        "description": "Dense and fudgy chocolate dessert bars"
      },
      {
        "id": 4,
        "name": "Rasmalai",
        "price": 5.99,
        "description": "Soft paneer dumplings soaked in saffron-flavored milk"
      },
      {
        "id": 5,
        "name": "Ice Cream Sundae",
        "price": 7.49,
        "description": "Vanilla ice cream topped with chocolate sauce and nuts"
      }
    ],
  
    starters: [
      {
        "id": 1,
        "name": "Spring Rolls",
        "price": 9.99,
        "description": "Crispy rolls stuffed with vegetables or meat"
      },
      {
        "id": 2,
        "name": "Mozzarella Sticks",
        "price": 8.99,
        "description": "Crispy fried cheese sticks served with marinara sauce"
      },
      {
        "id": 3,
        "name": "Garlic Bread",
        "price": 5.99,
        "description": "Toasted bread with garlic butter and herbs"
      },
      {
        "id": 4,
        "name": "Nachos Supreme",
        "price": 11.99,
        "description": "Crispy nachos topped with cheese, beans, and jalapenos"
      },
      {
        "id": 5,
        "name": "Paneer Tikka",
        "price": 12.99,
        "description": "Grilled spiced paneer cubes with mint chutney"
      }
    ],
  
    quick_bites: [
      {
        "id": 1,
        "name": "Veg Burger",
        "price": 9.99,
        "description": "Classic veggie patty with lettuce and tomato"
      },
      {
        "id": 2,
        "name": "French Fries",
        "price": 4.99,
        "description": "Golden crispy fries with ketchup"
      },
      {
        "id": 3,
        "name": "Chicken Wrap",
        "price": 12.99,
        "description": "Grilled chicken wrapped in a soft tortilla with veggies"
      },
      {
        "id": 4,
        "name": "Cheese Sandwich",
        "price": 6.99,
        "description": "Grilled cheese sandwich with buttered bread"
      },
      {
        "id": 5,
        "name": "Veg Momos",
        "price": 7.99,
        "description": "Steamed dumplings filled with vegetables and served with spicy sauce"
      }
    ]
  }

function App() {
  const [selectedCategory, setSelectedCategory] = useState("chinese");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "chinese":
        return <Bowl className="w-6 h-6" />;
      case "indian":
        return <UtensilsCrossed className="w-6 h-6" />;
      case "italian":
        return <Pizza className="w-6 h-6" />;
      case "american":
        return <Sandwich className="w-6 h-6" />;
      default:
        return <Menu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Coffee className="w-8 h-8 text-orange-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Pandey Masala
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Navigation */}
        <div className="flex overflow-x-auto pb-4 gap-4">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center px-6 py-3 rounded-full ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              } transition-colors duration-200 shadow-md whitespace-nowrap`}
            >
              {getCategoryIcon(category)}
              <span className="ml-2 capitalize">{category}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems[selectedCategory as keyof typeof menuItems].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-orange-600 font-bold">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p className="text-center text-gray-600 font-medium">
              Scan this QR code to view our menu on your device
            </p>
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <QRCodeSVG
                value={window.location.href}
                size={200}
                level="H"
                includeMargin={true}
                className="qr-code"
              />
            </div>
            <p className="text-sm text-gray-500">
              Point your camera at the QR code to open the menu
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
