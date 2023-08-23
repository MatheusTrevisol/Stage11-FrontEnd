import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;

    width: 100%;
    height: 14.4rem;

    padding: 0 12.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    svg { 
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }

    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;

    width: 18.6rem;
    height: 18.6rem;
  }

  > label {    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    cursor: pointer;

    input {
      display: none;
    }
  }
`;