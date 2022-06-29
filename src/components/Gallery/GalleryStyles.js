import styled from 'styled-components';

export const GallerySection = styled.section`
  margin-top: ${({ theme }) => theme.size.val3};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.sectionHeading};
    margin-bottom: ${({ theme }) => theme.size.val2};
  }
  .imagesWrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: ${({ theme }) => theme.size.val2};
  }
  .imageWrapper {
    width: 12.5rem;
    height: 9rem;
    @media screen and (max-width: ${({ theme }) => theme.bp.mobileS}) {
      width: 100%;
      height: 12rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      border-radius: ${({ theme }) => theme.borderRadius.primary};
      box-shadow: ${({ theme }) => theme.shadow.light};
      transition: filter 0.25s;
      &:hover {
        filter: brightness(55%);
      }
    }
  }
`;
