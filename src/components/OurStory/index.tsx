import React from 'react';
import { Container, SectionTitle } from '../styled';
import {useTranslation} from 'react-i18next';
import { ImageWrapper, Text, Item } from './styled';


const OurStory: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container id="our-story">
      <SectionTitle><span>{t('OUR_STORY')}</span></SectionTitle>
      <Item>
        <ImageWrapper>
          <img src="/Rihard.jpeg" alt="Rihard"/>
        </ImageWrapper>
        <Text>
          <p>In a world where finding a 4-in-1 meal solution (delicious, convenient, affordable and healthy) seemed impossible, friends Shawn, Alex, German & Rihards came together with a common goal—to create a company that would revolutionise the way we approach food and save the planet.</p>
          <p>Each of them had tasted the daily challenge of balancing deliciousness, convenience, affordability, and health in their meals. They realized that the best gift they could give themselves and their families is love and health. With unwavering determination, they founded the <span>525 Food Production Company in the EU and Paradigm Shift for Better Living company in the USA.</span></p>
          <p>The number &quot;525&quot; symbolised their commitment to utilizing every minute to make a positive impact: <strong>&quot;LOVE in ACTION&quot;</strong></p>
        </Text>
      </Item>
      <Item>
        <Text>
          <p>We craft amazingly delicious food using clean ingredients, sourced ethically and sustainably. Our mission is to provide humanity with love and health through eating while making it accessible and affordable for all.</p>
          <p>With award winning <span>Chefs Rihards, Matt and London, a professional nutritionist Tatiana</span>, they created recipes that not only tantalized taste buds but also nourished the body and mind.</p>
          <p>As 525 Food Production aimed to impact on food insecurity decrease and waste reductions.</p>
          <p>WE are founded to create the PARADIGM SHIFT of food retail and change the way people eat today forever. WE are founded to contribute to a healthier planet.</p>
        </Text>
        <ImageWrapper>
          <img src="/Matt.jpg" alt="Matt"/>
        </ImageWrapper>
      </Item>
    </Container>
  );
};

export default React.memo(OurStory);
