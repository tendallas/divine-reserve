import React from 'react';
import { SectionTitle } from '../styled';

import { Container } from '../styled';
import { ProductsWrapper, Product } from './styled';
import {useTranslation} from 'react-i18next';

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1500,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 1, arrows: false }
    }
  ]
};

const Products: React.FC = () => {
  const { t } = useTranslation();

  return (
      <Container id="products">
        <SectionTitle>
          <span>{t('OUR_PRODUCTS')}</span>
        </SectionTitle>
        <ProductsWrapper>
          <Product>
            <img src="/best-sellers/wild-walnuts.jpg" alt="Wild Walnuts"/>
            <h3>Wild Walnuts</h3>
            <div>
              <p>Sourced from the Mountain Biosphere Reserves of the Kyrgyz Republic, our Wild Walnuts are a true gift of nature. This region, the birthplace of modern walnuts, produces nuts with unmatched purity, flavor, and nutritional richness.</p>
            </div>
          </Product>
          <Product>
            <img src="/best-sellers/sun-dried-apricots.jpg" alt="Sun-Dried Apricots"/>
            <h3>Sun-Dried Apricots & Plums</h3>
            <p>Our Apricots and Plums are grown and naturally sun-dried in the fresh air of the Tian Shan Mountains, nestled in the foothills of the Himalayas. Free from preservatives, chemicals, dyes, or sulfur, these dried fruits retain their natural, rich flavor and exceptional nutritional qualities.</p>
          </Product>
          <Product>
            <img src="/best-sellers/wild-honey.jpg" alt="Wild Honey"/>
            <h3>Wild Honey & Honey Fusion Spreads</h3>
            <p>Our Pure Raw Honey is harvested from pristine, high-altitude regions, where bees gather nectar from the purest flowers. This honey is never temperature treated or filtered, preserving its natural enzymes and full-spectrum nutrients. With a high diastase content, it is a mature honey that offers a rich, robust flavor and offers exceptional health benefits. Perfect for those who seek the purest form of honey, packed with nature’s goodness in every drop.</p>
          </Product>
        </ProductsWrapper>
      </Container>
  );
};

export default React.memo(Products);
