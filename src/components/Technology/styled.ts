import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
    align-items: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const CertificationWrapper = styled.div`
    display: flex;
    gap: 80px;
    margin-top: 40px;
    justify-content: center;
    @media screen and (max-width: 991px) {
        gap: 15px;
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageWrapper = styled.div`
    flex: auto;
    padding: 50px;
    margin: 0 auto;
  @media screen and (max-width: 991px) {
    
    max-width: 280px;
  }
  img {
    max-width: 100%;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Icon = styled.div`
  width: 125px;
  flex: 0 0 125px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0;
`;
