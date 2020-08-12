import styled from 'styled-components';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;

  ::-webkit-scrollbar {
  width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
  background: #414141;
  border-radius: 8px;
  }

  > div {
    padding: 25px 25px 0px 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;


  &:first-child {
    margin-top: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;

      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #FFF;
      }
    }

    span {
      font-size: 13px;
      text-decoration: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
      margin-top: 10px;
      }

    ${Spinner} {
      height: 15px;
      margin-top: 5px;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #FFF;
  }

  img {
    margin-left: 12px;
  }

  p {
    margin-left: 12px;
  }
`;
