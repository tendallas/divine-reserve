import styled from 'styled-components';
import {Colors} from '@/theme';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 991px) {
    padding-bottom: 120px;
  }
  &:before {
    content: '';
    display: block;
    padding-top: 54%;
    position: relative;
    z-index: 1;
  }
  .slick-slider {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  .slick-list, .slick-track, .slick-slide > * {
    height: 100%;
  }
`;

export const Slide = styled.div`
  height: 100%;
  display: flex!important;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,hsla(0,0%,100%,0) 80%,hsla(0,0%,100%,1));
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,hsla(0,0%,100%,0) 80%,hsla(0,0%,100%,1));
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Meta = styled.div`
  position: absolute;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  right: 60px;
  width: 600px;
  z-index: 2;
  @media screen and (max-width: 991px) {
    width: 100%;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
  }
`;

export const Text = styled.p`
    font-size: 34px;
    text-align: center;
    margin: 0;
    border-radius: 2px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 0 10px rgb(13 12 12 / 80%);
    @media screen and (max-width: 991px) {
        display: none;
    }
`;

export const TextSub = styled.p`
    font-size: 28px;
    text-align: right;
    width: 100%;
    margin: 0;
    color: #ffffff;
    border-radius: 2px;
    font-weight: 700;
    text-shadow: 0 0 10px rgb(13 12 12 / 80%);
    @media screen and (max-width: 991px) {
        font-size: 22px;
        color: #171616;
        text-shadow: 0 0 3px rgba(255,255,255, .8);
    }
`;

export const Text2 = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0;
  border-radius: 2px;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(255,255,255, .8);
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const Button = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background-color: ${Colors.MountainMeadow};
  font-size: 18px;
  color: ${Colors.White}!important;
  font-weight: 600;
  padding: 15px 30px;
  gap: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  transition: all .3s ease 0s;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
  }
`;
