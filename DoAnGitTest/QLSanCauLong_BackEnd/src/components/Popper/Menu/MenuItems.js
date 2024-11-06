import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

const MenuItems = ({ data, onClick }) => {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
};

export default MenuItems;
