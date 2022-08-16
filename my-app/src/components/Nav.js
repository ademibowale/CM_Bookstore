import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  Link,
} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div>
        <header>
          <h1><Link to="/">Bookstore CMS</Link></h1>
        </header>
        <ul className="navbar">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div id="user">
        <BsFillPersonFill />
      </div>
    </nav>
  );
}

export default Nav;
