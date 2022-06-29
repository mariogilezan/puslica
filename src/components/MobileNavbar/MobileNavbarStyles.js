import { Link } from 'react-scroll';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  font-weight: 600;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.color.darkText};
  transition: border 0.25s;
  &:hover {
    border-color: ${({ theme }) => theme.color.secondary};
  }
`;
