import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left-elem">
        <Link to="/support">Support</Link>
        <Link to="/learning">Learning</Link>
        <button>Русская версия</button>

      </div>
      <div className="footer__right-elem">
        <span className="footer__name">
          @2021 RinaYasnovskaya
        </span>
      </div>
    </div>
  );
};
