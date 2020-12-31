import { Link } from 'gatsby';
import React from 'react';
import { UlClear } from '../styles/Lists';

export default function Nav({ id, classNames }) {
  return (
    <nav id={id} className={classNames}>
      <UlClear>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active" partiallyActive>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active" partiallyActive>
            Blog
          </Link>
        </li>
      </UlClear>
    </nav>
  );
}
