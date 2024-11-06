import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, GroupIcon, LiveIcon } from '../../../components/Icons';
import BoxAccount from '../../../components/BoxAccount';
import * as userService from '../../../services/userService';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem tittle={'For You'} to={'/'} icon={<HomeIcon />} />
                <MenuItem
                    tittle={'Following'}
                    to={'/following'}
                    icon={<GroupIcon />}
                />
                <MenuItem tittle={'Live'} to={'/live'} icon={<LiveIcon />} />
            </Menu>
            <BoxAccount label={'suggested account'} data={suggestedUser} />
            <BoxAccount label={'following account'} />
        </aside>
    );
};

export default Sidebar;
