import React from 'react';
import classNames from 'classnames/bind';
import Link from 'components/shared/link';

import illustration from './images/header-logo.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <section className={cx('header')}>
    <div className={cx('container', 'header-container')}>
      <div>
        <Link to="">
          <img src={illustration} loading="eager" />
        </Link>
      </div>
      <ul className={cx('list')}>
        <li className={cx('list-item')}>
          <Link to="" className={cx('item-link')}>
            Home
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="" className={cx('item-link')}>
            Pricing
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="" className={cx('item-link')}>
            Templates
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="" className={cx('item-link')}>
            Blog
          </Link>
        </li>
        <li className={cx('list-item')}>
          <Link to="" className={cx('item-link')}>
            Cases
          </Link>
        </li>
      </ul>
      <div>
        <button className={cx('button-sing')}>Sing Up</button>
        <button className={cx('button-login')}>Log in</button>
      </div>
    </div>
  </section>
);

export default Header;