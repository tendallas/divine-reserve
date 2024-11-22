import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    SectionTitle,
    SectionSubTitle
} from '../styled';
import {
    Wrapper,
    ImageWrapper,
    Technologies,
    Item,
    Icon,
    Title,
    Description,
    CertificationWrapper
} from './styled';

const Technology: React.FC = () => {
    const {t} = useTranslation();
    return (
        <Container id="technology">
            <SectionTitle><span>{t('TECHNOLOGY')}</span></SectionTitle>
            <SectionSubTitle>{t('TECHNOLOGY_SUB')}</SectionSubTitle>
            <CertificationWrapper>
                <Icon>
                    <img src="/certifications/fair-trade.svg" alt="fair_trade"/>
                </Icon>
                <Icon>
                    <img src="/certifications/fssc-22000.svg" alt="icon_fssc"/>
                </Icon>
                <Icon>
                    <img src="/certifications/organic.png" alt="icon_organic"/>
                </Icon>
                <Icon>
                    <img src="/certifications/usda-organic.png" alt="icon_usda"/>
                </Icon>
            </CertificationWrapper>
        </Container>
    );
};

export default React.memo(Technology);
