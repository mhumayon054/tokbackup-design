import * as React from 'react';
import "./SimpleAccordion.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SimpleAccordion() {
  return (
    <div className="accordian-parent">
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do I have to login?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can i download any profiles?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why should I download my TikToks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the video quality?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Will slideshows be included?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        <div className="accordian-components">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is the max amount of videos i can download?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Content for Accordion 1 goes here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
  );
}

export default SimpleAccordion;
