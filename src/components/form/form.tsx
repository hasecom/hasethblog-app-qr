import { useState, useRef, useEffect } from 'react';
import { Box, Button, Flex,Checkbox } from '@chakra-ui/react'
import InputUrl from "./inputUrl";
const Form = () => {
  const [inputCount, setInputCount] = useState<number>(1);
  const { divHeight, divRef } = useInputWrapHeight(inputCount);
  const [isChecked, setIsChecked] = useState(false);
  const addInput = () => {
    if (10 <= inputCount) {
      alert('最大10個までしか追加できません。');
      return;
    }
    setInputCount(inputCount + 1)
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Box>
        <Box overflow={3 < inputCount ? 'scroll' : 'auto'} ref={divRef} height={divHeight}
          mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['95%', '70%']}
        >
          {Array.from({ length: inputCount }, (_, index) => (
            <InputUrl key={index} number={index} isManual={isChecked} />
          ))}
        </Box>
        <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
          <Flex justifyContent='flex-end' mt={2} py={2}>
          <Checkbox size='md' colorScheme='blue'
          onChange={handleCheckboxChange}
          isChecked={isChecked}
          >商品名を手動で入力</Checkbox>
            <Button colorScheme='blue'
              variant='outline'
              size='sm'
              ml='auto'
              py={2}
              px={2}
              onClick={addInput}
            >
              リンクを追加する
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
export default Form;

type UseInputWrapHeight = {
  divHeight: string,
  divRef: React.RefObject<HTMLDivElement>;
}
const useInputWrapHeight = (inputCount: number): UseInputWrapHeight => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState('auto');
  useEffect(() => {
    if (3 < inputCount) {
      if (divRef && divRef.current) {
        setDivHeight(divRef.current.clientHeight + 'px');
        divRef.current.scrollTop = divRef.current.scrollHeight;//scroll
      }
    } else {
      setDivHeight('auto');
    }
  }, [inputCount])
  return { divHeight, divRef };
}