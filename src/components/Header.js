import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
);

// HEADER DEFAULT PROPS

Header.defaultProps = {
  title: "Indecision (app.jsx)!"
}

export default Header;
