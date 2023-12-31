import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Section({ title, disable, children }) {
    return (
        <>
            <Accordion disabled={disable} expanded={!disable}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='h6'>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </>
    )
}

export default Section;
