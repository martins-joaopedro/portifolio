import React from "react"
import './styles.jsx';

import { Header } from '../../components/Header'
import { GlassCard } from '../../components/GlassCard'
import { Blob } from '../../components/Blob'
import { Container } from "./styles.jsx";

export const Home = () => {
  return (
    <Container>
       <Header></Header>
       <Blob>A</Blob>
       <GlassCard></GlassCard>
    </Container>
  )
}
