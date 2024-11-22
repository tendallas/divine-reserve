import styled from 'styled-components';
import { ContainerWidthPx } from './constants';
import {Colors} from '@/theme';

export const Container = styled.div`
  width: ${ContainerWidthPx};
  margin: 0 auto;
  max-width: 100%;
  padding: 5px 15px;
`;

export const SectionSubTitle = styled.h2`
  text-align: center;
  font-size: 22px;
`;

export const SectionSubDescription = styled.p`
  text-align: center;
  font-size: 18px;
`;

export const SectionTitle = styled.p`
  font-size: 28px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
  span {
    display: inline-flex;
    padding: 0 15px 10px;
    border-bottom: 2px solid ${Colors.MountainMeadow};
  }
  & + ${SectionSubTitle} {
    margin: -30px 0 0;
  }
`;
export const Loader = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${Colors.MountainMeadow};
  width: 54px;
  height: 54px;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid ${Colors.MountainMeadow};
    position: absolute;
    left: 0;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

