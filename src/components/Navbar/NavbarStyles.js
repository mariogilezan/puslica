import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const Nav = styled.nav`
  min-height: 5rem;
  width: 100%;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.navbar};
`;

export const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 7rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
      transition: filter 0.25s;
      filter: ${({ theme }) => theme.shadow.logo};
    }
    &:hover {
      img {
        filter: ${({ theme }) => theme.shadow.logoHover};
      }
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    a {
      font-weight: 600;
      border-bottom: 2px solid transparent;
      color: ${({ theme }) => theme.color.darkText};
      transition: border 0.25s;
      &:hover {
        border-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
  .active {
    border-color: ${({ theme }) => theme.color.secondary};
  }
`;
