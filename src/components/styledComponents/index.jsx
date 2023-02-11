import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 8rem);
  max-width: 1200px;
  width: calc(100% - 6rem);
  padding: 2rem;
  margin: 2rem auto;
  background-color: white;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  /* background-image: url("https://source.unsplash.com/1600x900/?Clouds,night,dark");
  background-size: cover; */

  background: rgba(255, 255, 255, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.23);

  @media (max-width: ${({ theme }) => theme.screenSizes.smallDesktops}) {
    flex-wrap: wrap;
  }
`;

export const CurrentWeatherContainer = styled.div`
  width: 40%;
  height: 100%;
  padding-right: 2rem;
  @media (max-width: ${({ theme }) => theme.screenSizes.smallDesktops}) {
    width: 100%;
    padding: 0;
    margin-bottom: 3rem;
    border-bottom: 1px solid #747474;
    padding-bottom: 3rem;
  }
`;

export const ForecastContainer = styled.div`
  width: 60%;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 0 0 2rem;

  @media (max-width: ${({ theme }) => theme.screenSizes.smallDesktops}) {
    width: 100%;
    padding: 0;
    border-left: 0px;
  }
`;

export const CardTitle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 800;
`;

export const CardImg = styled.div`
  text-align: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CardSubtitle = styled.div`
  text-align: center;
  font-size: 1rem;
`;

export const CardContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 20px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
  width: ${(props) =>
    props.forecastType === "hourly"
      ? "25%"
      : "calc(33% - 1.5rem); margin: 0 0 1.5rem 0;"};
  min-width: 100px;
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    width: calc(50% - 1rem);
    margin: 0;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    flex-wrap: wrap;
  }

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
