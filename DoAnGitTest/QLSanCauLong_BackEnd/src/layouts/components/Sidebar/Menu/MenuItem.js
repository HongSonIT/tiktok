import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ tittle, to, icon }) => {
    return (
        <NavLink
            to={to}
            className={(nav) => cx('menu-item', { active: nav.isActive })}
        >
            {icon}
            <span className={cx('tittle')}>{tittle}</span>
        </NavLink>
    );
};

Menu.prototype = {
    tittle: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default Menu;
