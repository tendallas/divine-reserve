import React from 'react';
import {
  GlobalStyles, Carousel, Products, WhyUs, Technology
} from '@/components';
import Wrapper from '@/components/Wrapper';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyles/>
      <Carousel />
      <WhyUs />
      <Products />
      <Technology />
    </Wrapper>
  );
};
export default React.memo(Home);
