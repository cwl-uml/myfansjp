import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import RenderPlayer from '../renderPlayer';

const contentAccordion = (props) => {
  const { id, content } = props;
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Video
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <RenderPlayer id={id} content={content} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default contentAccordion;