import React from 'react'
import './styles.jsx';

import me from '../../assets/pic.png'
import { Container, ImageMask, Image, Text } from './styles.jsx';

export const Banner = () => {
    return (
        <Container>
            <ImageMask>
                <Image src={me} />
            </ImageMask>
            <Text>Olá, meu nome é João Pedro!</Text>
        </Container>
    )
}