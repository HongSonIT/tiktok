import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faBell,
    faCartShopping,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import MenuItem from '../../../components/Popper/Menu';
import Image from '../../../components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản Hồi',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Trợ Giúp',
    },
];

const Header = () => {
    const currentUser = true;

    const handleOnchange = (item) => {
        console.log(item);
    };
    
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Thông Tin Cá Nhân',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài Đặt',
            to: '/setting',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Đăng Xuất',
            to: '/feedback',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    {/* <Link to="/" className={cx('logo-link')}>
                        <Image src={images.logo.default} alt="TikTok" />
                    </Link> */}
                    <h2>HSon</h2>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <MenuItem
                            items={userMenu}
                            onChange={handleOnchange}
                            placement="bottom"
                        >
                            <h3 className={cx('user-title')}>
                                Nguyễn Hồng Sơn
                            </h3>
                        </MenuItem>
                    ) : (
                        <>
                            <Button primary>Log In</Button>
                            <Button outline>Sign In</Button>
                        </>
                    )}
                    {currentUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                            <button className={cx('action-btn')}>
                                <div className={cx('icon-notify')}>4</div>
                                <FontAwesomeIcon icon={faBell} />
                            </button>
                        </>
                    ) : (
                        <MenuItem
                            placement="bottom-end"
                            items={MENU_ITEMS}
                            onChange={handleOnchange}
                        >
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </MenuItem>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
