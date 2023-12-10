import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import DescriptionMd from '@/assets/md/descriptionMd';

const Description = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
    <Button colorScheme="gray" size="md"  mx={2} onClick={onOpen} >
      使い方
    </Button>
    <Modal isOpen={isOpen} 
            onClose={onClose}
            scrollBehavior={'inside'}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>使い方</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DescriptionMd />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Description;