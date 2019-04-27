/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
);

export default Header;
