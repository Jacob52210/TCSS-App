import React from 'react';
import './hidden_menu.css';

function HiddenMenu() {
  return (
    <div className='hidden-menu-container'>
      <h1>You found me, {localStorage.getItem('TCSSuserName')}!</h1>
    </div>
  )
}

export default HiddenMenu;
