import styled from "styled-components";
import MoonImg from '../../assets/svgs/moon.svg'
import SunImg from '../../assets/svgs/sun.svg'

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    width: 55px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.active ? '#323232aa' : '#d2d2d2aa'};

    ::before{
        content: "";
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #1550FF;
        transition: all .3s;
        background-image: ${props => props.active ? `url(${MoonImg})` : `url(${SunImg})`};
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        transform: ${props => props.active ? 'translateX(100%) rotate(0)' : 'translateX(0) rotate(-90deg)'};
    }
`