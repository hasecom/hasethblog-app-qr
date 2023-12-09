import React, {  useContext,useEffect } from 'react';
import { Box,Text } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
import DefaultView from './type/defaultView';
const PreviewChild = () => {
  const makerList = useContext(MakerListContext);
  useEffect(()=>{
    console.log(makerList?.makeList);
  },[makerList?.makeList])
  return (
    <>
      <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
        <Box position="relative">
        <Box
            border="2px solid #add8e6"
            borderRadius="8px"
            overflow="hidden"
            position="relative"
            ref={makerList?.html2canvasElementRef}
          >
        {(makerList?.makeList || []).filter(item => item.asin !== "").map((item, index) => (
            <DefaultView key={index} list={item} />
        ))}
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