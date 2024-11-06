import ProTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import Image from '../Image';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.full_name}</h4>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

AccountItem.prototype = {
    data: ProTypes.object.isRequired,
};

export default AccountItem;
