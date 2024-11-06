import ProTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '../../assets/images';
import styles from './image.module.scss';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');

    const handleErro = () => {
        setFallback(images.no_image);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleErro}
        />
    );
});

Image.prototype = {
    src: ProTypes.string,
    alt: ProTypes.string,
    className: ProTypes.string,
    ref: ProTypes.string,
};

export default Image;
