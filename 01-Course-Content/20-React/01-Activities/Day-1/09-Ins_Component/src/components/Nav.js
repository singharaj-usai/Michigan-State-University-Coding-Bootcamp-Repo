import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="course-content/20-React/01-Activities/Day-1/09-Ins_Component/src/components/Nav#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="course-content/20-React/01-Activities/Day-1/09-Ins_Component/src/components/Nav#">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="course-content/20-React/01-Activities/Day-1/09-Ins_Component/src/components/Nav#">Register</a>
        </div>
        <div style={linkStyle}>
          <a href="course-content/20-React/01-Activities/Day-1/09-Ins_Component/src/components/Nav#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="course-content/20-React/01-Activities/Day-1/09-Ins_Component/src/components/Nav#">Contact</a>
        </div>
      </section>
    </nav>
  );
}
