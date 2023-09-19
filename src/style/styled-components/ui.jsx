import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

// Navbar

export const Navbar = styled.div`
    width: 100%;
    display: flex;
    padding: 15px 75px;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: white;

    .footer {
        width: 100%;
        height: 100% !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &.container_footer {
        background-color: #EBEDF8;
        flex-direction: column;
    }

    @media screen and (max-width: 900px) {
        padding: 15px 5px;
    }
`;

export const Navbar__About = styled.div`
    ul {
        display: flex;
        list-style: none;
        gap: 20px;

        @media screen and (max-width: 719px) {
            display: none;
        }

        li {
            font-size: 13px;
            position: relative;
            font-weight: 600;

            &::before {
                content: "";
                width: 100%;
                height: 3px;
                transform: scaleX(0);
                position: absolute;
                bottom: -3px;
                left: 0;
                background-color: blue;
                transition: 200ms;
            }
            
            &:hover {
                &::before {
                    transform: scaleX(0.5);
                }
            }
        }
    }
    
    &.footer_about {
        li::before {
            background-color: black;
            height: 1px;
            bottom: 0px;
            transition: 400ms;
        }
        li:hover {
            &::before {
                transform: scaleX(1);
            }
        }
    }
`;

export const Navbar__Profile = styled.div`
    display: flex;
    gap: 5px;

    button {
        background-color: rgba(128,128,128 , 0.2);
        color: black;
        padding: 8px 10px;
        border-radius: 6px;
        border: 0;
        transition: 200ms;
        display: flex;
        align-items:center;
        gap: 7px;
        font-size: 14px;

        .down {
            font-size: 11px;
            transition: 300ms;
        }

        &:hover {
            background-color: rgba(128,128,128 , 0.4);
            .down {
                rotate: -180deg;
            }
        }
    }
`;

export const Cart__Button = styled.button`
        background-color: rgba(128,128,128 , 0.2);
        color: black;
        padding: 8px 10px;
        border-radius: 6px;
        border: 0;
        transition: 200ms;
        display: flex;
        align-items:center;
        gap: 7px;
        font-size: 14px;  

        ${(props) =>
        props.cart &&
        `
                background: green;
                color: white;
            `
    }
`

// Footer

export const Footer = Navbar;
export const Footer__About = Navbar__About;
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin-top: 25px;
`

// Content

export const ContactUs = styled.div`
    margin: 15px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        width: 20px;
        margin: 0 5px;
        color: green;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F6F8F9;
    padding: 0px 75px;
`;

export const Title = styled.div`
    width: 100%;
    text-align: center;
    margin: 30px 0;

    h1 {
        font-size: 35px;
    }
`;

export const CarouselDiv = styled.div`
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 6px;

    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
    h2 {
        width: 100%;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;

        &.price {
            color: green;
            margin-top: 15px;
        }
    }
    h3 {
        color: #848e92;
        margin: 15px 0 0 0;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    button {
        width: 100%;
        margin: 15px 0 0 0;
        padding: 10px 0;
        font-size: 20px;
        border: 0;
        background-color: #F6F8F9;
        border-radius: 3px;
        transition: 200ms;

        &:hover {
            background-color: yellow;
        }
    }
`;

export const Block = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 35px;

    .box {
        width: 33%;
        min-height: 350px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 25px 45px;
        transition: 200ms;
        text-align: center;

        @media screen and (max-width: 1100px) {
            width: 50%;
            &:nth-child(1),
            &:nth-child(3),
            &:nth-child(5) {border-right: 1px solid lightgray !important    }
        }
        @media screen and (max-width: 700px) {
            width: 100%;
            border: 0;
        }

        &:hover {
            background-color: white;
        }

        .header_icon {
            background-color: #F5FFF3;
            padding: 13px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
        }

        h2 , h3 {
            margin-top: 10px;
        }

        h3 {
            font-size: 16px;
            color: gray;
            font-weight: 500;
            line-height: 23px;

            span {
                color: red;
            }
        }

        &:nth-child(1) {
            border-right: 1px solid lightgray;
            border-bottom: 1px solid lightgray;
        }
        
        &:nth-child(2) { border-bottom: 1px solid lightgray }
        &:nth-child(3) { border-left: 1px solid lightgray } 
        &:nth-child(4) { border-right: 1px solid lightgray }
        &:nth-child(6) {
            border-left: 1px solid lightgray;
            border-top: 1px solid lightgray;
        }
    }
`;

// Drawer

export const Drawer__Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .hr {
        border: 0.3px solid lightgray;
    }
`;

export const Drawer__Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 10px 0;

    h3 {
        font-size: 18px;
    }

    h3:nth-child(2) {
        color: red; 
        cursor: pointer;
    }
`;

export const Drawer__Body = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Drawer__Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
        display: flex;
        justify-content: space-between;

        h1:last-child {
                color: green;
        }
    }

    button {
        background-color: #19A555;
        border: 0;
        font-size: 15px;
        padding: 10px 0;
        color: white;
        border-radius: 3px;
    }
`;

export const Opposite = styled.div`
    
`;

// Modal 

export const Modal__Content = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 13px;
    }

    .captcha {
        margin-top: 15px;
        overflow-x: auto;
        overflow-y: hidden;
    }

    button {
        margin-top: 15px;
    }
`;