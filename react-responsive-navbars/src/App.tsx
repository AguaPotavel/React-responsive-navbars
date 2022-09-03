import react from 'react'
import styled from 'styled-components';
import { RNavbar } from './lib';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 200vh;
    background-color: red;
    padding: 0;

`;

export default function App(){
    return(
    <Page>
        <RNavbar>
            <RNavbar.Button className={'type-1'}>
                Botão
            </RNavbar.Button>
        </RNavbar>
        App
    </Page>)
}