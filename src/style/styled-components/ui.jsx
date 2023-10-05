import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
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
    border-bottom: 1px solid lightgray;

    img {
        object-fit: cover;
        cursor: pointer;
    }

    .footer {
        width: 100%;
        height: 100%;
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

        @media screen and (max-width: 795px) {
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

        &.full {
            background-color: green;
            color: white;
        }
`

// Footer

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    width: 100%;
    z-index: 2;
    background-color: white;
    padding: 10px 75px;
    border-top: 1px solid lightgray; 

    @media screen and (max-width: 900px) {
        padding: 15px 5px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Footer__About = styled.div`
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
`;
export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin-top: 15px;
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
    background-color: #F6F8F9;
    padding: 0px 75px;
    height: 100%;

    @media screen and (max-width: 900px) {
        padding: 0 5px;
    }

    .oneProduct {
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px;

        .card_container {
            max-width: 90%;
            display: flex;
            justify-content: center;

            .img_side {
                width: 50%;
                display: flex;
                justify-content: center;

                img {
                    width: 200px;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .text_side {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: start;

                h4 {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }

                button {
                    background-color: #19A555;
                    border: 0;
                    font-size: 15px;
                    padding: 13px 10px;
                    color: white;
                    border-radius: 3px;
                    transition: 150ms;
                    width: fit-content;
                    margin-top: 10px;
                    span {
                        margin-left: 15px;
                    }

                        &:hover {
                            background-color:rgba(25, 165, 85, 0.85)
                        }
                }
            }
        }
    }
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
    background-color: white;
    margin-bottom: 10px;
    border-radius: 6px;
    transition: 300ms;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 25px 0px;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        transition: 300ms;

        &:hover {
            scale: 1.03;
        }   
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
`;

export const AddToCardBtn = styled.button`
        width: 100%;
        margin: 15px 0 0 0;
        padding: 10px 0;
        font-size: 20px;
        border: 0;
        background-color: #F6F8F9;
        border-radius: 3px;
        transition: 200ms;

        &.cart-active-button {
            background-color: green;
        }

        &:hover {
            background-color: yellow;
        }
`;

export const Counter = styled.button`
     margin-top: 15px;
        height: 45px;
        width: 100%;

        border: 0;
        background-color: #F6F8F9;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            border-radius: 6px;

            &:hover {
                background-color: gold;
            }
        }
`

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
            border: 0;

            &:nth-child(5) {
                border-top: 1px solid lightgray;
            }
        }
        @media screen and (max-width: 700px) {
            width: 100%;
            border: 0;

            border-right: 0 !important;
            border-left: 0 !important;
            border-top: 0 !important;
            border-bottom: 1px solid lightgray !important;
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

export const ProductDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    div {
        width: calc((100% / 4) - 25px);
        padding: 15px 10px;
        border-radius: 6px;    
        display: flex;
        flex-direction: column;
        background-color: white;
        position:relative;

        img {
            width: 100%;
            height: 150px;
            object-fit: contain;
        }

        h4 {
            margin-top: 10px;
            color: gray;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        h3 {
            color: green;
            margin-top: 10px;
        }

        @media screen and (max-width: 450px) {
            width: 100%;
        }

        @media (min-width:450px) and (max-width: 700px) {
            width: calc((100% / 2) - 15px);
            padding: 5px;
        }

        @media (min-width: 700px) and (max-width: 950px) {
            width: calc((100% / 3) - 25px);
        }
    }
`

// Drawer

export const Drawer__Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .hr {
        border-bottom: 1px solid lightgray;
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
    height: 100%;
    margin: 10px 0 0 0;

    img , h4 , h3 , p { user-select: none; }

    .drawerDiv {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .img {
            display: flex;
            gap: 10px;
            img {
                height: 115px;
                width: 115px;
                object-fit: contain;
            }
        }


        svg {
            &:hover {
                animation: shake 0.75s linear 1;
                color: red;

                    @keyframes shake {
                            10% {
                                transform: translateX(3px) rotate(2deg);
                            }

                            20% {
                                transform: translateX(-3px) rotate(-2deg);
                            }

                            30% {
                                transform: translateX(3px) rotate(2deg);
                            }

                            40% {
                                transform: translateX(-3px) rotate(-2deg);
                            }

                            50% {
                                transform: translateX(2px) rotate(1deg);
                            }

                            60% {
                                transform: translateX(-2px) rotate(-1deg);
                            }

                            70% {
                                transform: translateX(2px) rotate(1deg);
                            }

                            80% {
                                transform: translateX(-2px) rotate(-1deg);
                            }

                            90% {
                                transform: translateX(1px) rotate(0);
                            }

                            100% {
                                transform: translateX(-1px) rotate(0);
                            }
}
            }
        }

        .productInfo {
            display: flex;
            flex-direction: column;
            padding: 0 0 0 10px;

            p {
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding: 0 10px 0 0;
                margin: 7px 0 0 0;
            }
        }
        .endInfo {
            text-align: center;
            gap: 20px;

            h3 {
                margin: 0 0 7px 0;
            }
        }
    }
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
        padding: 20px 0;
        color: white;
        border-radius: 3px;
        transition: 150ms;

        &:hover {
           background-color:rgba(25, 165, 85, 0.85)
        }
    }
`;

export const ArrowsDiv = styled.div`
    text-align: center;
    margin-top: 10px;

    button {
        border-radius: 50%;
        border: 0;
        padding: 10px;
        margin: 0 10px;
        background-color: white;
        box-shadow: 0 4.4px 12px -1px rgba(19,16,34,.06), 0 2px 6.4px -1px rgba(19,16,34,.03);
    }
`

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
