import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import UpperNavigation from './UpperNavigation.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <UpperNavigation />
    </header>
    <main>
      {content}
    </main>
  </div>
)
