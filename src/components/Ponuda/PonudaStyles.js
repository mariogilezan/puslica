import styled from 'styled-components';

export const PonudaSection = styled.section`
  margin-top: ${({ theme }) => theme.size.val3};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.sectionHeading};
    margin-bottom: ${({ theme }) => theme.size.val2};
  }
  .cardsWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${({ theme }) => theme.bp.tablet}) {
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.size.val3};
    }
  }
  .card {
    position: relative;
    width: 14rem;
    height: 14rem;
    text-align: center;
    @media screen and (max-width: ${({ theme }) => theme.bp.tablet}) {
      width: 20rem;
      height: 20rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.bp.mobileM}) {
      width: 100%;
      height: 20rem;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      box-shadow: ${({ theme }) => theme.shadow.light};
    }
    h5 {
      width: 100%;
      position: absolute;
      bottom: 0;
      border-radius: 0 0 8px 8px;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.mediumHeading};
      padding: ${({ theme }) => theme.size.val1};
      color: ${({ theme }) => theme.color.secondary};
      background-color: ${({ theme }) => theme.color.rgbaWhite};
    }
  }
`;
