import { useEffect, useState } from 'react';
import './ArrowUp.scss';

const ArrowUp = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [userScrollTop, setUserScrollTop] = useState<number>();
    const [userScrollBottom, setUserScrollBottom] = useState<number>();
    const scrollPosition = () => {
        const scrollTop = window.scrollY;
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollBottom = scrollHeight - clientHeight - scrollTop;
        setUserScrollTop(scrollTop);
        setUserScrollBottom(scrollBottom);
    };
    useEffect(() => {
        document.addEventListener('scroll', scrollPosition);
        return () => document.removeEventListener('scroll', scrollPosition);
    }, []);

    useEffect(() => {
        if (
            userScrollTop &&
            userScrollTop >= 0 &&
            userScrollBottom &&
            userScrollBottom > 250
        ) {
            setIsActive(true);
            return;
        }
        setIsActive(false);
    }, [userScrollTop, userScrollBottom]);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`arrow-up ${isActive ? 'active' : ''}`}
            type="button"
            aria-label="arrow-up"
            onClick={handleScrollToTop}
        >
            <svg
                className="arrow-up__icon"
                width="10"
                height="21"
                viewBox="0 0 10 21"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.198868 5.82475L4.51989 0.25628C4.78504 -0.0854288 5.21495 -0.0854288 5.48011 0.25628L9.80113 5.82475C10.0663 6.16646 10.0663 6.72047 9.80113 7.06218C9.53597 7.40389 9.10606 7.40389 8.8409 7.06218L5.67898 2.98744L5.67898 21L4.32102 21L4.32102 2.98744L1.15909 7.06218C0.893935 7.40389 0.464027 7.40389 0.198868 7.06218C-0.0662914 6.72048 -0.0662915 6.16646 0.198868 5.82475Z"
                />
            </svg>
        </button>
    );
};

export default ArrowUp;
