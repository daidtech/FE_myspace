import React from 'react';
import UserHeader from 'src/components/layouts/Users/Header/Header'
import UserFooter from './Users/Footer/Footer';

export default function UserLayout({ children }) {
  return (
    <div>
      <UserHeader />
      {children}
      <UserFooter />
    </div>
  )
}
