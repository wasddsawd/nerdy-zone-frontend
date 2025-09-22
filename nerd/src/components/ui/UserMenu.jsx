import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; 
import styles from '../../styles/userMenu.module.css';

// precisa dar npm install react-icons para funcionar 

export default function UserMenu  () {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.userMenuContainer} ref={dropdownRef}>

      <FaUserCircle 
        className={styles.userIcon} 
        onClick={() => setIsOpen(!isOpen)} 
      />

      {isOpen && (
        <div className={styles.dropdownContent}>
          <Link to="/perfil" onClick={() => setIsOpen(false)}>
            Perfil
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/cadastro" onClick={() => setIsOpen(false)}>
            Cadastre-se
          </Link>
        </div>
      )}
    </div>
  );
};
