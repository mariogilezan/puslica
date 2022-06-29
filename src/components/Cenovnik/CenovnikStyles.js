import styled from 'styled-components';

export const CenovnikSection = styled.section`
  margin-top: ${({ theme }) => theme.size.val3};
  h2 {
    font-size: ${({ theme }) => theme.fontSize.sectionHeading};
    margin-bottom: ${({ theme }) => theme.size.val2};
  }
`;

export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border-spacing: 1;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  box-shadow: ${({ theme }) => theme.shadow.secondary};
  @media screen and (max-width: ${({ theme }) => theme.bp.mobileM}) {
    width: 100%;
  }
  th,
  td {
    text-align: center;
  }
  thead {
    tr {
      height: ${({ theme }) => theme.size.val4};
      background-color: ${({ theme }) => theme.color.secondary};
      color: ${({ theme }) => theme.color.primary};
    }
  }
  tbody {
    tr {
      height: ${({ theme }) => theme.size.val3};
      transition: background-color 0.25s;
      @media screen and (max-width: ${({ theme }) => theme.bp.mobileM}) {
        height: ${({ theme }) => theme.size.val4};
      }
    }
    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.color.rgbaSecondaryTableStripe};
    }
    tr:hover {
      background-color: ${({ theme }) => theme.color.rgbaSecondaryTableStripe};
    }
  }
`;
