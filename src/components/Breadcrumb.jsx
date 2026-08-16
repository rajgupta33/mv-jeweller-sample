import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">Home</Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="breadcrumb-separator">
                <ChevronRight size={14} />
              </li>
              <li className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.link} className="breadcrumb-link">
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
