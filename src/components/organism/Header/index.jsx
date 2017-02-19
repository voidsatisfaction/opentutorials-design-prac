import React, { Component } from 'react';

import MenuItem from '../../atom/MenuItem';

import './style.css';

export default class Header extends Component {
  render() {
    const { router } = this.context;
    return (
      <div className="headerWrapper">
        <div className="logo">
          Practice of Opentutorial designs
        </div>
        <div className="menu">
          <MenuItem to="/" active={router.isActive('/', true)} name="Home" />
          <MenuItem to="/pinterest" active={router.isActive('/pinterest')} name="Pinterest" />
          <MenuItem to="/project2" active={router.isActive('/project2')} name="Project2" />
        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
};