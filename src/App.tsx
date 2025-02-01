import React, { useState } from 'react';
import { Menu, UtensilsCrossed, Coffee, Pizza, BookDown as Bowl, Sandwich } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

// Menu data
const menuItems = {
  chinese: [
    { id: 1, name: 'Kung Pao Chicken', price: 15.99, description: 'Spicy diced chicken with peanuts and vegetables' },
    { id: 2, name: 'Dim Sum Platter', price: 18.99, description: 'Assorted steamed dumplings' },
    { id: 3, name: 'Chow Mein', price: 13.99, description: 'Stir-fried noodles with vegetables' }
  ],
  indian: [
    { id: 4, name: 'Butter Chicken', price: 16.99, description: 'Creamy tomato-based curry with tender chicken' },
    { id: 5, name: 'Paneer Tikka', price: 14.99, description: 'Grilled cottage cheese with spices' },
    { id: 6, name: 'Dal Makhani', price: 12.99, description: 'Creamy black lentils' }
  ],
  italian: [
    { id: 7, name: 'Margherita Pizza', price: 14.99, description: 'Fresh tomatoes, mozzarella, and basil' },
    { id: 8, name: 'Pasta Carbonara', price: 15.99, description: 'Creamy pasta with pancetta' },
    { id: 9, name: 'Tiramisu', price: 8.99, description: 'Classic Italian coffee-flavored dessert' }
  ],
  american: [
    { id: 10, name: 'Classic Burger', price: 13.99, description: 'Angus beef patty with cheese and fries' },
    { id: 11, name: 'BBQ Ribs', price: 24.99, description: 'Slow-cooked ribs with house BBQ sauce' },
    { id: 12, name: 'Caesar Salad', price: 10.99, description: 'Romaine lettuce with Caesar dressing' }
  ]
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('chinese');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'chinese':
        return <Bowl className="w-6 h-6" />;
      case 'indian':
        return <UtensilsCrossed className="w-6 h-6" />;
      case 'italian':
        return <Pizza className="w-6 h-6" />;
      case 'american':
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
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Pandey Masala</h1>
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
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
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
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-orange-600 font-bold">${item.price}</span>
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