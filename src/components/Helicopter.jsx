import React from 'react'
import styled from 'styled-components'

const HeliSection = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 15rem;
`;

const Button = styled.button`
    background-color: #888888;
    padding: .5rem 1rem;
`;

export default function Helicopter(props){
    const helicopterText = "Helicopter Money "
        return (
            <HeliSection>
                {helicopterText}
                <Button onClick={props.helicopterFunds}>Printer go brrrr</Button>
            </HeliSection>
    )
}
