import React from "react";
import styled, { keyframes } from "styled-components";
import { ThemeConsumer } from "../../providers/ThemeProvider";
import ToggleButton from "./ToggleButton";

const Home = () => (
   <ThemeConsumer>
      {value => (
         <HomeContainer value={value}>
            <SocialMedia value={value}>
               <a
                  href="https://github.com/DanielJBailey"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Icon>
                     <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        value={value}
                     >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                     </SVG>
                  </Icon>
               </a>
               <a
                  href="https://www.linkedin.com/in/daniel-j-bailey/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Icon>
                     <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        value={value}
                     >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                     </SVG>
                  </Icon>
               </a>
               <a
                  href="https://twitter.com/Daniel_J_Bailey"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Icon>
                     <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        value={value}
                     >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                     </SVG>
                  </Icon>
               </a>
               <a
                  href="https://www.instagram.com/daniel.bailey/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Icon>
                     <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        value={value}
                     >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                     </SVG>
                  </Icon>
               </a>
               <a href="mailto:daniel.justin.bailey@gmail.com">
                  <Icon>
                     <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        value={value}
                     >
                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                     </SVG>
                  </Icon>
               </a>
            </SocialMedia>
            <InfoWrapper>
               <Title value={value}>Software Engineer @ Verisys</Title>
               <hr />
               <Name value={value}>Daniel Bailey</Name>
               <hr />
               <Location value={value}>
                  Salt Lake City, UT
                  <SVG
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512"
                     value={value}
                  >
                     <path d="M635.73 406.91l-194.04-297.6c-11.57-17.75-39.8-17.75-51.37 0l-32.84 50.37 67.68 105.68c2.38 3.72 1.3 8.67-2.42 11.05l-13.46 8.62c-3.72 2.38-8.67 1.3-11.05-2.42l-59.9-93.54-70.81-110.55c-12.4-19.36-42.64-19.36-55.04 0L4.58 403.18C-7.99 422.81 6.81 448 30.92 448h580.22c22.5 0 36.32-23.09 24.59-41.09z" />
                  </SVG>
               </Location>
               <ToggleButton />
            </InfoWrapper>
         </HomeContainer>
      )}
   </ThemeConsumer>
);

const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   border-right: 2px solid #ccc;
   padding-right: 1em;

   hr {
      width: 100%;
      height: 2px;
      background-color: #ccc;
      border: none;
      margin: 5px 0;
   }
`;

const fadeIn = keyframes`
    0% {
       opacity: 0;
      }
      100% {
         opacity: 1.0;
      }
`;

const SocialMedia = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   top: 0;
   left: 0;
   margin-left: 2em;

   a {
      width: 35px;
      height: 35px;
      padding: 5px;
      margin-top: 5px;
      @media (max-width: 425px) {
         width: 25px;
         height: 25px;
         padding: 0;
         margin-top: 7px;
      }
      @media (min-height: 700px) and (orientation: portrait) {
         margin-top: 5px;
         padding: 5px;
         width: 35px;
         height: 35px;
      }
   }

   &:before {
      content: "";
      display: block;
      transition: 0.75s;
      height: 32px;
      background-color: ${({
         value: {
            darkTheme,
            colors: { light, dark }
         }
      }) => {
         if (darkTheme) {
            return dark.fontColor;
         } else return light.fontColor;
      }};
      width: 2px;
      @media (max-width: 425px) {
         height: 15px;
      }
      @media (max-height: 325px) and (orientation: landscape) {
         height: 15px;
      }
      @media (min-height: 500px) and (orientation: portrait) {
         height: 32px;
      }
   }
   @media (max-width: 425px) {
      margin-left: 1em;
   }
   @media (max-height: 325px) and (orientation: landscape) {
      margin-left: 1em;
   }
`;

const Icon = styled.i`
   transition: 0.75s;
`;

const Name = styled.h1`
   font-size: 100px;
   transition: 0.75s;
   font-family: "Staatliches", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
   letter-spacing: 2px;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.fontColor;
      } else return light.fontColor;
   }};
   line-height: 1;
   @media (max-width: 425px) {
      font-size: 60px;
   }
   @media (max-width: 325px) {
      font-size: 50px;
   }
   @media (max-height: 425px) and (orientation: landscape) {
      font-size: 50px;
   }
`;

const Title = styled.p`
   font-size: 16px;
   line-height: 1;
   padding-top: 40px;
   display: flex;
   align-items: center;
   transition: 0.75s;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.fontColor;
      } else return light.fontColor;
   }};
   margin: 5px 0;
   font-family: "Sarabun", sans-serif;
   @media (max-width: 325px) {
      font-size: 14px;
   }
   @media (max-height: 425px) and (orientation: landscape) {
      font-size: 14px;
   }
`;

const Location = styled.div`
   display: flex;
   transition: 0.75s;
   align-items: center;
   color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.fontColor;
      } else return light.fontColor;
   }};

   svg {
      height: 25px;
      width: 25px;
      margin-left: 5px;
   }
   @media (max-width: 325px) {
      font-size: 14px;
   }
   @media (max-height: 425px) and (orientation: landscape) {
      font-size: 14px;
   }
`;

const SVG = styled.svg`
   fill: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.fontColor;
      } else return light.fontColor;
   }};
   transition: 0.75s;
`;

const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   align-items: center;
   justify-content: center;
   height: 100%;
   transition: 0.75s;
   min-height: 100vh;
   width: 100%;
   padding: 2em;
   z-index: 1;
   animation: ${fadeIn} 1s linear;
   background-color: ${({
      value: {
         darkTheme,
         colors: { light, dark }
      }
   }) => {
      if (darkTheme) {
         return dark.background;
      } else return light.background;
   }};
   @media (max-width: 425px) {
      padding: 1em;
   }
   @media (max-height: 325px) and (orientation: landscape) {
      padding: 1em;
   }
`;

export default Home;
