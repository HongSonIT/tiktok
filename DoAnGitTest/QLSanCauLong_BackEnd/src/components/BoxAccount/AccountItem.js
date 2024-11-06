import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './BoxAccount.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-35, 0]}
                placement="bottom"
                render={(props) => (
                    <div tabIndex="-1" {...props}>
                        <PopperWrapper>
                            <AccountPreview data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('Account-Item')}>
                    <img
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                        </p>
                        <p
                            className={cx('name')}
                        >{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
};

export default AccountItem;
