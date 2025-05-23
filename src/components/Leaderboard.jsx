import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/userServices';


export const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllUsers().then((data) => {
            const sorted = data.sort((a, b) => b.totalPoints - a.totalPoints)
            setUsers(sorted)
        })
        .catch((error) => {
            console.error('Failed to fetch users', error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) return <p>Loading leaderboard...</p>

    return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <strong>{index + 1}. {user.name}</strong> – {user.totalPoints} points
          </li>
        ))}
      </ul>
    </div>
  );
};


