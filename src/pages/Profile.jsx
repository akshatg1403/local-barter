import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ItemCard from '../components/items/ItemCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const [userItems] = useState([
    {
      id: 1,
      title: "Vintage Camera",
      description: "Classic film camera in excellent condition",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      wishlist: "Digital Camera",
    },
  ]);

  const [trades] = useState([
    {
      id: 1,
      status: 'pending',
      item: 'Mountain Bike',
      with: 'John Doe',
      date: '2023-12-01',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
            <p className="text-gray-500">Member since Nov 2023</p>
            <div className="mt-2 flex items-center gap-4">
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                5★ Rating
              </span>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                10 Successful Trades
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1 shadow">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              )
            }
          >
            My Items
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              )
            }
          >
            Active Trades
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-primary text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              )
            }
          >
            Settings
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-6">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      With
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {trades.map((trade) => (
                    <tr key={trade.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{trade.item}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{trade.with}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {trade.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{trade.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue="New York, NY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Notification Preferences
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        defaultChecked
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        Email notifications for new trade proposals
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        defaultChecked
                      />
                      <label className="ml-2 text-sm text-gray-600">
                        Email notifications for messages
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
