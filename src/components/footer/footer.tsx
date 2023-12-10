import  {  useContext, } from 'react';
import { Button, Flex } from "@chakra-ui/react";
import Setting from "../setting/setting";
import MakerListContext from '@/context/makerListContext';
import Description from '../description/description';

const Footer = () => {
  const makerList = useContext(MakerListContext);
  const handleCreate = async () => {
    if (makerList?.captureElement instanceof Function) {
      await makerList.captureElement();
    } else {
      console.error('captureElement is not a function');
    }
  };
  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      p={4}
      bg="gray.200"
      justify="center"
      align="center"
    >
      <Description />
      <Setting />
      <Button colorScheme="blue" size="md" mx={2} onClick={handleCreate}>
        QR画像生成
      </Button>
    </Flex>
  );
};

export default Footer;
