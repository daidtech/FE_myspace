import React from 'react';
import UserHeader from 'components/share/users/UserHeader'

export default function UserLayout({ children }) {
  return (
    <div>
      <UserHeader />
      {children}
      <h1>footer</h1>
    </div>
  )
}
