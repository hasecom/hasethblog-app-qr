import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
  ModalFooter
} from '@chakra-ui/react'
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import MakerListContext from '@/context/makerListContext';
import { saveAs } from 'file-saver';

const ResultModal = () => {
  const makerList = useContext(MakerListContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (makerList?.resultImage) {
      console.log(makerList?.resultImage)
      onOpen();
    }
  }, [makerList?.resultImage]);
  const saveImage = async() => {
    if (makerList?.resultImage) {
      const resultImage = await makerList.resultImage;
      const binaryData  = atob(resultImage.split(',')[1]);
      const dataArray = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        dataArray[i] = binaryData.charCodeAt(i);
      }
      // Data URL から Blob を生成
      const dataBlob = new Blob([dataArray], { type: 'image/png' });
      // ファイル保存ダイアログを表示
      saveAs(dataBlob, 'fkorw.png');
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>生成完了</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {makerList?.resultImage ? (
               <Image src={makerList?.resultImage} alt="Captured Image" width={500} height={300} />
            ) : (
              <p>No image available</p>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant='ghost' onClick={saveImage}>画像を保存</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ResultModal;