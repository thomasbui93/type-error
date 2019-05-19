import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header__upper">
      <div className="header__logo">
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className="header__search" />
    </div>
    <div className="header__menu">
      <div className="header__item">
        <Link to="/blog/category/javascript">JavaScript</Link>
      </div>
      <div className="header__item">
        <Link to="/blog/category/css-focus">CSS Focus</Link>
      </div>
      <div className="header__item">
        <Link to="/blog/category/architecture">Architecture</Link>
      </div>
      <div className="header__item">
        <Link to="/blog/category/manifesto">Story</Link>
      </div>
      <div className="header__item">
        <Link to="/me">About Me</Link>
      </div>
    </div>
  </div>
)

export default Header
