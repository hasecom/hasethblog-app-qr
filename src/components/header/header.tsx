// components/HeaderComponent.tsx
import { Flex, Heading } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="blue.500"
      color="white"
    >
      <Heading fontSize="xl">Amazon商品QRコードメーカー</Heading>
    </Flex>
  );
};

export default Header;
