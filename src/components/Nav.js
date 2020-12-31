import { Link } from 'gatsby';
import React from 'react';
import { UlClear } from '../styles/Lists';

export default function Nav({ id, classNames }) {
  return (
    <nav id={id} className={classNames}>
      <UlClear>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </UlClear>
    </nav>
  );
}
