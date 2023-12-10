import { Box } from "@chakra-ui/react";
import PrivacyPolicyMd from "@/assets/md/privacyPolicyMd";
import DescriptionMd from "@/assets/md/descriptionMd";
const Widget =  () =>  {
  return (
    <>
      <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
      <Box position="relative" paddingTop="100px">
       <DescriptionMd />
       </Box>
        <Box position="relative" paddingTop='10px' paddingBottom='10px'>
          <PrivacyPolicyMd />
       </Box>
       <Box position="relative" paddingBottom="300px"></Box>
      </Box>
    </>
  )  
}

export default Widget;