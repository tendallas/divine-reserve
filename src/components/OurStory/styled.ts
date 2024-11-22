import styled from 'styled-components';
import {Colors} from '@/theme';

export const Text = styled.div`
  span, strong {
    color: ${Colors.MountainMeadow};
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 270px;
  height: 270px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 270px;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 30px;
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  & + & {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 2px solid ${Colors.Alto};
    @media screen and (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
