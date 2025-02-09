import { motion } from 'framer-motion';

export default function ItemCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        className="h-48 w-full object-cover"
        src={item.image}
        alt={item.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-gray-500">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-primary">
            Looking for: {item.wishlist}
          </span>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Propose Swap
          </button>
        </div>
      </div>
    </motion.div>
  );
}
