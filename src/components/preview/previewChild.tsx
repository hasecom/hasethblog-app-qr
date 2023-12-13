import React, { useContext, useEffect } from 'react';
import { Box, Text, Skeleton } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
import DefaultView from './type/defaultView';
const PreviewChild = () => {
  const makerList = useContext(MakerListContext);
  return (
    <>
      <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
        <Box position="relative"
            border="2px solid #add8e6"
            borderRadius="8px"
                    >
          <Box
            overflow="hidden"
            position="relative"
            ref={makerList?.html2canvasElementRef}
            paddingX={5}
            paddingY={10} 
          >
            {makerList?.asyncMakerList ? (
               <Box p={4}> 
                <Skeleton>
                  <div>contents wrapped</div>
                  <div></div>
                </Skeleton>
              </Box>
            ) : (
              (makerList?.makeList || []).filter(item => item.asin !== "").map((item, index) => (
                <DefaultView key={index} list={item} />
              ))
            )}
          </Box>
          <Box
            position="absolute"
            top="0"
            left="0"
            background="#add8e6"
            padding="4px"
            borderRadius="4px 0 0 0"
          >
            <Text color="white">Preview</Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default PreviewChild;