import React from 'react';

const Header = ({ theme, toggleTheme, activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}>
          PhotoFolio
        </a>
        
        <nav>
          <ul className="nav">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
