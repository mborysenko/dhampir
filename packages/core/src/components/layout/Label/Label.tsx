import { forwardRef, HTMLAttributes } from 'react';

import styled from 'styled-components';
import { Box } from '../Box';
export type LabelProps = unknown;

export const Label = styled(
    forwardRef<HTMLDivElement, LabelProps & HTMLAttributes<HTMLDivElement>>(({ ...other }, ref) => {
        return <Box {...other} ref={ref}/>;
    })
)`
    display: flex;
`;
