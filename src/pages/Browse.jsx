import { useState } from 'react';
import ItemCard from '../components/items/ItemCard';

export default function Browse() {
  // Sample data - later replace with API calls
  const [items] = useState([
    {
      id: 1,
      title: "Vintage Camera",
      description: "Classic film camera in excellent condition",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      wishlist: "Digital Camera",
    },
    {
      id: 2,
      title: "Mountain Bike",
      description: "Well maintained mountain bike, perfect for trails",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7",
      wishlist: "Road Bike",
    },
    // Add more items as needed
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary">
              <option value="">Category</option>
              <option value="electronics">Electronics</option>
              <option value="sports">Sports</option>
              <option value="books">Books</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary">
              <option value="">Distance</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="20">20 km</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
