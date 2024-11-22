import styled from 'styled-components';
import {Colors} from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  text-align: center;
  gap: 30px;
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  & > * {
    flex: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 991px) {
      flex: auto;
    }
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  &>*:first-child {
    display: flex;
    width: 54px;
    height: 54px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: 700;
    margin-bottom: 5px;
    background-color: ${Colors.MountainMeadow};
    color: ${Colors.White};
  }
  &>*:last-child {
    font-weight: 700;
  }
`;

export const Description = styled.div`
  //font-size: 16px;
`;
