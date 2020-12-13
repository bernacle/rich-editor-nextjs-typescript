import React from 'react';
import Link from 'next/link'

import { Container } from './styles';

const Header: React.FunctionComponent = () => {
    return (
        <Container>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/editor">Editor</Link>
            </nav>
        </Container>
    )
}

export default Header;