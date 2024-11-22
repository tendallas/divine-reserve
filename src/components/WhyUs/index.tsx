import React from 'react';
import {
  Container,
  SectionTitle,
  SectionSubTitle,
  SectionSubDescription
} from '../styled';
import {useTranslation} from 'react-i18next';
import { Title, Description, Wrapper } from './styled';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container id="why-us">
      <SectionSubTitle>{t('WHY_US_SUB')}</SectionSubTitle>
      <SectionSubDescription>{t('WHY_US_SUB_SUB')}</SectionSubDescription>
      <Wrapper>
        <div>
          <Title><span>#1</span><span>{t('HIGH_QUALITY')}</span></Title>
          <Description>
            <p>{t('HIGH_QUALITY_DESC1')}</p>
          </Description>
        </div>
        <div>
          <Title><span>#2</span><span>{t('CONVENIENT')}</span></Title>
          <Description>
            <p>{t('CONVENIENT_DESC1')}</p>
          </Description>
        </div>
        <div>
          <Title><span>#3</span><span>{t('AFFORDABLE')}</span></Title>
          <Description>
          <p>{t('AFFORDABLE_DESC1')}</p>
          </Description>
        </div>
      </Wrapper>
    </Container>
  );
};

export default React.memo(WhyUs);
