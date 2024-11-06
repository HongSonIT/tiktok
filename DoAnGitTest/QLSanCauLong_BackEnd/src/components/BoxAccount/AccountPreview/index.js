import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

const AccountPreview = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avarta')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                {data.is_followed === false && (
                    <Button className={cx('btn')} primary>
                        Follow
                    </Button>
                )}
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                </p>
                <p
                    className={cx('name')}
                >{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong
                        className={cx('value')}
                    >{`${data.followers_count}K `}</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong
                        className={cx('value')}
                    >{`${data.likes_count}K `}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;
