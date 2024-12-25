"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { Loader } from 'lucide-react'

interface UserActivity {
  totalUsers: number
  totalLoggedInUsers: number
  recentlyLoggedInUsers: Array<{ _id: string; email: string; isLoggedIn: boolean, updatedAt: string }>
}

const UserActivitiesChart =() => {
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null)

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/user-activities`)
        const data = await response.json()

        if (!data?.success) {
          throw new Error('Failed to fetch user activity')
        }
        console.log(data);
        setUserActivity(data?.data)
      } catch (error) {
        console.error('Error fetching user activity:', error)
      }
    }

    fetchUserActivity()
  }, [])

  if (!userActivity) {
    return <div className='flex items-center justify-center h-96'>
<Loader className='animate-spin'/>
    </div>
  }

  const chartData = [
    { name: 'Total Users', value: userActivity.totalUsers },
    { name: 'Logged In Users', value: userActivity.totalLoggedInUsers },
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>User Activity Overview</CardTitle>
          <CardDescription>Total users vs Logged in users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" fill="#198B46" stroke="#198B46" />
        </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recently Logged In Users</CardTitle>
          <CardDescription>Last 5 users who logged in</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {userActivity.recentlyLoggedInUsers.map((user) => (
              <li key={user._id}>
                {user.email} - Last login: {new Date(user.updatedAt).toLocaleString()}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserActivitiesChart