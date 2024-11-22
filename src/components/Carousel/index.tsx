import React from 'react';
import {useTranslation} from 'react-i18next';
import Slider from 'react-slick';

import { Container as DefaultContainer } from '../styled';
import { Icons } from '../../theme';
import { Wrapper, Slide, Meta, Text, Text2, TextSub, Button } from './styled';

const slides = [
  {
    image: '/hero.png',
    text: 'SLIDE1',
    text2: 'SLIDE1_MOB',
    textSub: 'SLIDE1_SUB',
  },
]

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
};


const Carousel: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToNextSlide = React.useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const toForm = React.useCallback(() => {
    window.location.href = 'https://5mingourmet.com/collections/treats';
  }, []);

  React.useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, goToNextSlide]);

  return (
    <DefaultContainer>
      <Wrapper>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide key={slide.image}>
              <img src={slide.image} alt={`Slide ${index}`} />
              <Meta>
                <Text>{t(slide.text)}</Text>
                <Text2>{t(slide.text2)}</Text2>
                <TextSub>{t(slide.textSub)}</TextSub>
                <Button onClick={toForm}><Icons.Map color="#fff" />{t('SLIDE_ACTION')}</Button>
              </Meta>
            </Slide>
          ))}
        </Slider>
      </Wrapper>
    </DefaultContainer>
  );
};

export default React.memo(Carousel);
