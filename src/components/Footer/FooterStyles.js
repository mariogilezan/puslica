import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: ${({ theme }) => theme.size.val2};
  color: ${({ theme }) => theme.color.lightText};
  background-color: ${({ theme }) => theme.color.darkText};
  margin-top: ${({ theme }) => theme.size.val3};
  padding: ${({ theme }) => theme.size.val2};
  @media screen and (max-width: ${({ theme }) => theme.bp.mobileS}) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
  .contactWrapper {
    h2 {
      font-size: ${({ theme }) => theme.fontSize.mediumHeading};
      margin-bottom: ${({ theme }) => theme.size.val1};
      span {
        color: ${({ theme }) => theme.color.secondary};
      }
    }
    p {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.secondary};
      transition: color 0.25s;
      &:hover {
        color: ${({ theme }) => theme.color.rgbaSecondaryPhoneLink};
      }
    }
  }
  .socialsWrapper {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.size.val1};
    h5 {
      font-size: ${({ theme }) => theme.fontSize.smallText};
    }
    a {
      display: inline-block;
      color: none;
      width: ${({ theme }) => theme.size.val2};
      height: ${({ theme }) => theme.size.val2};
      transition: transform 0.25s;
      &:hover {
        transform: scale(1.2);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .copyrightWrapper {
    grid-column: 1 / -1;
    align-self: center;
    justify-self: center;
    margin-top: ${({ theme }) => theme.size.val2};
    p {
      font-size: ${({ theme }) => theme.fontSize.smallText};
      span {
        color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;
