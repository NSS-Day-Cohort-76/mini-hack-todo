import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/userServices';


export const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllUsers().then
    }, [])

    return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {sortedUsers.map((user, index) => (
          <li key={user.id}>
            <strong>{index + 1}. {user.name}</strong> – {user.totalPoints} points
          </li>
        ))}
      </ul>
    </div>
  );
};


