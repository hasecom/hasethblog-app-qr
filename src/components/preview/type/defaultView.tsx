import { useContext } from 'react';
import QrCode from '@/components/QrCode/QrCode';
import { Box,Flex,Text } from '@chakra-ui/react'
import { MakerList } from '@/type';
import MakerListContext from '@/context/makerListContext';
type Props = {
  list:MakerList
}
const DefaultView:React.FC<Props> = ({list}) => {
  const makerList = useContext(MakerListContext);
  return (
    <Box p={2}>
    <Flex align="center">
      {/* 左側のQRコード */}
      <Box mr={2}>
        <QrCode value={list.asin} size={makerList?.settingList.qr.size} />
      </Box>

      {/* 右側のテキスト */}
      <Box>
      {makerList?.settingList.title.display &&
        <Text fontSize="xl">{list.title}</Text>
      }
      {makerList?.settingList.price.display &&
        <Text fontSize="sm" color="gray.500">
          {list.price}
        </Text>
      }
      </Box>
    </Flex>
  </Box>
  )
}
export default DefaultView;