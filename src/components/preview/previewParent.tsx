import { Box } from '@chakra-ui/react'
import PreviewChild from './previewChild';
const PreviewParent = () => {
  return (
  <>
    <Box maxW="650px" mx="auto">
      <PreviewChild />
    </Box>
  </>
  );
}
export default PreviewParent;