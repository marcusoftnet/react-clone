import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [showBlackBar, setShowBlackBar] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY > 100) {
        setShowBlackBar(true);
      } else {
        setShowBlackBar(false);
      }

      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);
  return (
    <div className={`nav ${showBlackBar && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
        alt='Netflix'
      />
      <img
        className='nav__avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
        alt='Avtar'
      />
    </div>
  );
}

export default Nav;
