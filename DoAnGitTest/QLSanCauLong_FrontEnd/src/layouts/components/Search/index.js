import React, { useEffect, useRef, useState } from 'react';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    // faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import * as searchService from '../../../services/searchService';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import styles from './Search.module.scss';
import useDebounce from '../../../hooks/useDebounce';

const cx = classNames.bind(styles);

const Search = () => {
    const [searcResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowresult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 650);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleShow = () => {
        setShowresult(false);
    };

    const handleChange = (e) => {
        const value = e.target.value;

        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    return (
        <Tippy
            visible={showResult && searcResult.length > 0}
            delay={[0, 800]}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searcResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleShow}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search account and video"
                    spellCheck={false}
                    onChange={handleChange}
                    onClick={() => setShowresult(true)}
                />
                {searchValue && !loading && (
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className={cx('loading')}
                    />
                )}
                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
};

export default Search;
