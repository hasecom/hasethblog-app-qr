import { useContext } from 'react';
import QrCode from '@/components/QrCode/QrCode';
import { Box,Flex,Text } from '@chakra-ui/react'
import { MakerList } from '@/type';
import MakerListContext from '@/context/makerListContext';
type Props = {
  list:MakerList
}
const VerticalView:React.FC<Props> = ({list}) => {
  const makerList = useContext(MakerListContext);
  return (
<Box p={2}>
  <Flex align="center" flexDirection="column">
    <Flex>
      <Box p={2}>
        <QrCode value={list.asin} size={makerList?.settingList.qr.size} />
      </Box>
    </Flex>
    <Box>
      {makerList?.settingList.title.display &&
        <Text fontSize={makerList?.settingList.title.fontSize + 'px'} whiteSpace="pre-line">{list.title}</Text>
      }
      {makerList?.settingList.price.display &&
        <Text fontSize="sm" color="gray.500" textAlign="right">
          {list.price}
        </Text>
      }
    </Box>
  </Flex>
</Box>
  )
}
export default VerticalView;