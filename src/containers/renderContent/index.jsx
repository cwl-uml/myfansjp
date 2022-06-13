import React,{ useState, useEffect } from 'react';

import { 
  Box, 
  Text
} from '@chakra-ui/react';

import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

import ContentList from '../contentList';

// constants
const outerLimit = 2;
const innerLimit = 2;

const itemPerPage = 10;

const RenderContent = (props) => {
  const { selectedUser, content } = props;
  const userContent = content[selectedUser];
  console.log('userContent',userContent);
  
  const [pageContent, setPageContent] = useState(userContent?.slice(0, itemPerPage));
  
  console.log('pageContent',pageContent);

  // effects
  useEffect(() => {
    setPageContent(userContent?.slice(0, itemPerPage))
  }, [selectedUser]);

  const {
    pages,
    pagesCount,
    currentPage,
    setCurrentPage
  } = usePagination({
    total: userContent?.length ?? 0,
    limits: {
      outer: outerLimit,
      inner: innerLimit
    },
    initialState: {
      pageSize: itemPerPage,
      isDisabled: false,
      currentPage: 1
    }
  });

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    handlePageContent(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageContent = (nextPage) => {
    setPageContent(userContent?.slice((nextPage - 1) * itemPerPage, nextPage * itemPerPage));
  }

  return selectedUser && (
    <Box>
      <ContentList items={pageContent}/>
      <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="space-between"
            p={4}
            w="full"
          >
            <PaginationPrevious
              _hover={{
                bg: "yellow.400"
              }}
              bg="yellow.300"
            >
              <Text>Previous</Text>
            </PaginationPrevious>
            <PaginationPageGroup
              isInline
              align="center"
              separator={
                <PaginationSeparator
                  bg="blue.300"
                  fontSize="sm"
                  w={7}
                  jumpSize={11}
                />
              }
            >
              {pages.map((page) => (
                <PaginationPage
                  w={7}
                  bg="red.300"
                  key={`pagination_page_${page}`}
                  page={page}
                  fontSize="sm"
                  _hover={{
                    bg: "green.300"
                  }}
                  _current={{
                    bg: "green.300",
                    fontSize: "sm",
                    w: 7
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              _hover={{
                bg: "yellow.400"
              }}
              bg="yellow.300"
            >
              <Text>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
    </Box>
  )
}

export default RenderContent;