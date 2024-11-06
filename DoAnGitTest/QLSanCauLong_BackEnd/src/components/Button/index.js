import ProTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    onClick,
    leftIcon,
    className,
    ...passProps
}) => {
    const props = {
        onClick,
        ...passProps,
    };
    let Comp = 'button';

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classe = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
    });
    return (
        <Comp className={classe} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
};

Button.prototype = {
    to: ProTypes.string,
    href: ProTypes.string,
    children: ProTypes.node.isRequired,
    primary: ProTypes.bool,
    outline: ProTypes.bool,
    small: ProTypes.bool,
    large: ProTypes.bool,
    onClick: ProTypes.func,
    leftIcon: ProTypes.node,
    className: ProTypes.string,
};

export default Button;
