import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  margin-top: ${({ theme }) => theme.size.val1};
  .heroImageWrapper {
    width: 100%;
    height: 35rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
    }
  }
  .heroDetails {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .heroText {
    text-align: center;
    padding: 1rem 2rem;
    margin-bottom: ${({ theme }) => theme.size.val1};
    background-color: ${({ theme }) => theme.color.rgbaWhite};
    box-shadow: ${({ theme }) => theme.shadow.primary};
    h1 {
      padding: 0;
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize.heroHeading};
      color: ${({ theme }) => theme.color.secondary};
    }
  }
  .heroCtaButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    a {
      padding: 0.7rem 1.5rem;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.heroBtn};
      color: ${({ theme }) => theme.color.darkText};
      background-color: ${({ theme }) => theme.color.rgbLight};
      box-shadow: ${({ theme }) => theme.shadow.primary};
      transition: background 0.25s;
      &:hover {
        background-color: ${({ theme }) => theme.color.rgbaLight};
      }
      &:nth-child(1) {
        background-color: ${({ theme }) => theme.color.rgbSecondaryHeroBtn};
        color: ${({ theme }) => theme.color.lightText};
        &:hover {
          background-color: ${({ theme }) => theme.color.rgbaSecondaryHeroBtn};
        }
      }
    }
  }
`;
