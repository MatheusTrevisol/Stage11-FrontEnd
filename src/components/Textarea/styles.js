import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 10px;
  border: none;
  resize: none;

  margin-bottom: 8px;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;