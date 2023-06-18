import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 140px;

  @media screen and (min-width: 376px) {
    max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    max-width: 600px;
  }
  `;

export const Name = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  line-height: calc(24 / 18);
  `;

export const Phone = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  line-height: calc(24 / 18);
  `;

export const Button = styled.button`
  display: inline-block;
  margin-bottom: 8px;


  border: 2px solid #a75f06;
  border-radius: 8px;
  background-color: #e6f4f1;

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  transition: border-color 300ms ease-in, background-color 300ms ease-in;
  
  :hover,
  :focus {
    border-color: #f5b05c;
    background-color: #C0C0C0;
  }
  `;
  