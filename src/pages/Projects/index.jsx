import styled from 'styled-components'
import './styles.css'
import { SideBarLights } from '../../components/SideBarLights'

export const Projects = () => {
    return(
        <Container>
          {/*  <Cards>
                <Card>

                </Card>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
           </Cards> */}
           
            <SideBarLights></SideBarLights>
           
            
        </Container>
    )
}


const Container = styled.div`
    height: 150vh;
    background: linear-gradient(0deg, #6e3500ea, #070031);
    background-size: 500%;
`

const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    
    padding: 1em;
    background-color: #7270dd7a;
    border-radius: 10px;

`

const Card = styled.div`
    width: 200px;
    height: 300px;
    background-color: red;
`