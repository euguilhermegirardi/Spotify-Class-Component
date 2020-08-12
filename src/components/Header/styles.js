import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 24px;
  width: 221px;
  padding: 6px 7px 6p 26px;
  background: #FFF url(${SearchIcon}) no-repeat 7px center; 

  input {
    flex: 1; 
    font-size: 13px;
    color: #121212;
    border: 0;
    margin-left: 20px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #FFF;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
