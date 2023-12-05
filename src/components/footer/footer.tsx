import { Button, Flex, Text } from "@chakra-ui/react";
import Setting from "../setting/setting";
const Footer = () => {
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
      <Button colorScheme="gray" size="md"  mx={2} >
        使い方
      </Button>
      <Setting />
      <Button colorScheme="blue" size="md" mx={2}>
        作成する
      </Button>
    </Flex>
  );
};

export default Footer;
