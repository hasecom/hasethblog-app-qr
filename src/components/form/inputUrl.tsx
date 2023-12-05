import { useState,useContext } from 'react';
import { Input,Flex,Button } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
type Props = {
  number:number
}
const InputUrl:React.FC<Props> = ({number}) => {
  const [inputValue, setInputValue] = useState('');
  const makeListContext = useContext(MakerListContext);
  const handleChange = (e:any) => {
    setInputValue(e.target.value);
    if (inputValue === null) {
      makeListContext?.removeItemByIndex(number);
    } else {
      makeListContext?.changeMakeList(e.target.value, number);
    }
  };

  const handlePaste = async () => {
    if(!navigator.clipboard){
      alert('ペースト機能が、お使いの環境に対応していないか、クリップボードにコピーされていません。');
      return;
    }
    navigator.clipboard.readText()
    .then(text => {
      setInputValue(text);
    })
    .catch(err => {
      alert('ペースト機能を使うには、ブラウザの許可設定が必要です。')
    });
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" p={2}>
    <Input
      flex="1"
      mr={2}
      type="text"
      placeholder={`Amazonの商品リンクを入力【 ${number+1} 】`}
      _placeholder={{ fontSize: '0.75rem' }}
      value={inputValue}
      onChange={handleChange}
    />
    <Button size="sm" onClick={handlePaste}>
      ペースト
    </Button>
  </Flex>
  );
};
export default InputUrl;