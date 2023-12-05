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
} from '@chakra-ui/react'
import SettingForm from './settingForm';
const Setting = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
    <Button colorScheme="blue" size="md"  mx={2} onClick={onOpen} >
        詳細設定
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>詳細設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SettingForm />
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
export default Setting;