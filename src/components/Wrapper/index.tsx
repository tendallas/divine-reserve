import React from 'react';
import { Wrapper as StyledWrapper } from './styled';

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <StyledWrapper>
      {children}
    </StyledWrapper>
);

export default React.memo(Wrapper);
