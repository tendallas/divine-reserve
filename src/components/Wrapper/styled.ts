import styled from 'styled-components';
import {Colors} from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  max-width: 100vw;
  overflow: hidden;
  padding-top: 78px;
  @media screen and (max-width: 991px) {
    gap: 30px;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
