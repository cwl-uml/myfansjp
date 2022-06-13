import React from "react";
import { VStack, Box, Spacer, Checkbox, StackDivider} from "@chakra-ui/react";

import ContentAccordion from '../contentAccordion';

const ContentList = (props) => {
  const { items } = props;

  return (
    <VStack
      className="margin-top-16"
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
    >
      {
        items && items.map((content) => {
          const conten_body = content.body;
          const mp4_url = content.mp4_video_url;
          return (conten_body || mp4_url) && (
            <Box 
              key={content.id} 
              p='2' 
              shadow='md' 
              borderWidth='1px' 
              fontWeight='semibold'
              letterSpacing='wide'
              borderRadius='lg'>
              <Box display='flex' alignItems='baseline' >
                <Box
                  color='gray.500'
                  fontSize='sm'
                  textTransform='uppercase'
                >
                  {content.humanized_publish_start_at}
                </Box>
                <Spacer/>
                <Checkbox size='sm'>Check</Checkbox>
              </Box>
              
              <Box>
                {conten_body}
              </Box>
              {mp4_url && <ContentAccordion id={content.id} content={mp4_url}/>}
            </Box>
          )
        })
      }
    </VStack>
  );
}

export default ContentList;
