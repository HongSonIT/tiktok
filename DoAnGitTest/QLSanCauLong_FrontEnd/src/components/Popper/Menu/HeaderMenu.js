import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const HeaderMenu = ({ title, onBack }) => {
    return (
        <header className={cx('headerMenu')}>
            <button className={cx('btnBack')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menuTitle')}>{title}</h4>
        </header>
    );
};

export default HeaderMenu;