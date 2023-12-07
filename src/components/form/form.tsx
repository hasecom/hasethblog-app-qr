import { useState,useRef,useEffect } from 'react';
import { Box, Button,Flex } from '@chakra-ui/react'
import InputUrl from "./inputUrl";
const Form = () => {
  
  const [inputCount, setInputCount] = useState<number>(1);
  const {divHeight,divRef}  = useInputWrapHeight(inputCount);
  const addInput = () => {
    if(10 <= inputCount){
      alert('最大10個までしか追加できません。');
      return;
    }
    setInputCount(inputCount + 1)
  }
  return (
    <>

      <Box mx={['auto', 'auto', 'auto', '10%', '20%', '30%']} width={['90%', '70%']}>
        <Box overflow={3 < inputCount ? 'scroll':'auto'} ref={divRef} height={divHeight}>
          {Array.from({ length: inputCount }, (_, index) => (
            <InputUrl key={index} number={index} />
          ))}
        </Box>
         <Flex justifyContent='flex-end' mt={2} py={2}>
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
    </>
  );
}
export default Form;

type UseInputWrapHeight = {
  divHeight:string,
  divRef:React.RefObject<HTMLDivElement>;
}
const useInputWrapHeight = (inputCount:number):UseInputWrapHeight => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState('auto');
  useEffect(()=>{
    if(3 < inputCount){
      if (divRef && divRef.current) {
        setDivHeight(divRef.current.clientHeight + 'px');
        divRef.current.scrollTop = divRef.current.scrollHeight;//scroll
      }
    }else{
      setDivHeight('auto');
    }
  },[inputCount])
  return {divHeight,divRef};
}