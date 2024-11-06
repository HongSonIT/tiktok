import classNames from 'classnames/bind';
import styles from './BoxAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const BoxAccount = ({ label, data = [] }) => {
    return (
        <div className={cx('Wrapper')}>
            <p className={cx('Lable')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-click')}>see more</p>
        </div>
    );
};

export default BoxAccount;
