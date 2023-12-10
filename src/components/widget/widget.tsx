import { Box } from "@chakra-ui/react";
import PrivacyPolicyMd from "@/assets/md/privacyPolicyMd";
const Widget =  () =>  {
  return (
    <>
      <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
        <Box position="relative">
          <PrivacyPolicyMd />
       </Box>
      </Box>
    </>
  )  
}

export default Widget;