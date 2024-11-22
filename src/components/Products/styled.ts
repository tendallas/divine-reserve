import styled from 'styled-components';
import { Colors } from '@/theme';

export const Title = styled.p`
  margin: 0;
  padding: 15px 0;
  min-height: 94px;
  text-align: center;
  transition: all .15s ease 0s;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-decoration-color: ${Colors.Alto};
  font-size: 16px;
  text-underline-offset: 2px;
`;

export const SlideWrapper = styled.div`
  padding: 15px;
`;

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    @media screen and (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Product = styled.div`
    width: 30%;
    text-align: center;

    @media screen and (max-width: 991px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
    }
    
    img {
        max-width: 100%;
        border-radius: 8px;
    }
`;

export const Slide = styled.div`
  background-color: ${Colors.White};
  cursor: pointer;
  &:hover {
    ${Title} {
      color: ${Colors.MountainMeadow};
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 14px 0;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto -60px;
  @media screen and (max-width: 1500px) {
    max-width: 1100px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }
  @media screen and (max-width: 900px) {
    max-width: 280px;
  }
  .slick-arrow {
    border-style: solid;
    border-color: ${Colors.MineShaft};
    border-width: 2px 2px 2px 0;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    z-index: 3;
    background-color: ${Colors.White};
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIA0KCSB2aWV3Qm94PSIwIDAgMTg1LjM0MyAxODUuMzQzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTUxLjcwNywxODUuMzQzYy0yLjc0MSwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTQ5Yy00LjE5NC00LjE5NC00LjE5NC0xMC45ODEsMC0xNS4xNzUNCgkJCWw3NC4zNTItNzQuMzQ3TDQ0LjExNCwxOC4zMmMtNC4xOTQtNC4xOTQtNC4xOTQtMTAuOTg3LDAtMTUuMTc1YzQuMTk0LTQuMTk0LDEwLjk4Ny00LjE5NCwxNS4xOCwwbDgxLjkzNCw4MS45MzQNCgkJCWM0LjE5NCw0LjE5NCw0LjE5NCwxMC45ODcsMCwxNS4xNzVsLTgxLjkzNCw4MS45MzlDNTcuMjAxLDE4NC4yOTMsNTQuNDU0LDE4NS4zNDMsNTEuNzA3LDE4NS4zNDN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+");
    background-size: 16px;
    background-position: 50%;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .slick-prev {
    transform: rotate(180deg);
    &:before {
      content: '';
    }
  }
  .slick-next {
    transform: rotate(0);
    &:before {
      content: '';
    }
  }
`;

export const LoaderWrapper = styled.div`
  height: 374px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
