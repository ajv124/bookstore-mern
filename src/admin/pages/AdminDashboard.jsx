import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaBook } from 'react-icons/fa'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart } from 'recharts';
import { generateMockData,} from '@recharts/devtools';
function AdminDashboard() {

  const data = generateMockData(6, 823);

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <div className='md:grid grid-cols-3 my-4'>
            <div className='md:px-5 my-5 md:my-0'>
              <div className="bg-orange-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaBook />
                <div className='text-center ms-10 md:ms-5'>
                  <h3>Books</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>

            <div className='md:px-5 my-5 md:my-0'>
              <div className="bg-blue-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaBook />
                <div className='text-center ms-10 md:ms-5'>
                  <h3>Books</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>
            <div className='md:px-5 my-5 md:my-0'>
              <div className="bg-green-100 px-4 py-8 flex justify-center items-center text-5xl rounded">
                <FaBook />
                <div className='text-center ms-10 md:ms-5'>
                  <h3>Books</h3>
                  <h3 className='text-2xl'>100+</h3>
                </div>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className='md:grid grid-cols-2 my-4 p-5'>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid />
                  <XAxis dataKey="label" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="x" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="y" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                      data={data01}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius="50%"
                      fill="#8884d8"
                      stroke="white"
                    />
                    <Pie
                      data={data02}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="80%"
                      fill="#82ca9d"
                      stroke="white"
                      label
                    />
                  </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard