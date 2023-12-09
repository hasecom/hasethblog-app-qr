import { useState, useContext } from 'react';
import { Input, Flex, Button, FormControl, FormErrorMessage } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
import { getAsin } from '@/utill/asin';
import { fetch } from '@/utill/axios';
type Props = {
  number: number
}
const InputUrl: React.FC<Props> = ({ number }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState('');
  const makeListContext = useContext(MakerListContext);

  const handleChange = (e: any) => {
    if(e.target.value != null) getProduct(e.target.value);
  }
  const handlePaste =  () => {
    if (!navigator.clipboard) {
      alert('ペースト機能が、お使いの環境に対応していないか、クリップボードにコピーされていません。');
      return;
    }
    navigator.clipboard.readText()
      .then(text => {
        getProduct(text);
      })
      .catch(err => {
        alert('ペースト機能を使うには、ブラウザの許可設定が必要です。')
      });
  };
  const getProduct = async(getInputValue: string) => {
    try {
      const decodeInputValue = decodeURIComponent(getInputValue)
      setInputValue(decodeInputValue);
      if (inputValue == null) {
        makeListContext?.removeItemByIndex(number);
        return;
      }
      if (!decodeInputValue || decodeInputValue == "") throw '';
      //asinチェック
      const asin = getAsin(decodeInputValue);
      if (!asin) throw 'URLが正しくありません。';
      const postData = { 'asin': asin }
      const response = await fetch(postData, 'https://hasecom.angry.jp/amazon-qr-maker/request.php');
      const responseData = response.data && response.data;
      if (!responseData || !responseData['code']) throw '商品の取得に失敗しました。'
      if (responseData['code'] != 0) throw 'この商品は存在しません。';
      makeListContext?.changeMakeList(
        asin,
        number,
        responseData.result.image,
        responseData.result.price,
        responseData.result.title,
        responseData.result.url
      );
    } catch (error: unknown) {
      setError(typeof error === 'string' ? error : '');
    }
  }
  return (
    <FormControl isInvalid={!!error}>
      <Flex justifyContent="space-between" alignItems="center" p={2}>
        <Input
          flex="1"
          mr={2}
          type="text"
          placeholder={`Amazonの商品リンクを入力【 ${number + 1} 】`}
          _placeholder={{ fontSize: '0.75rem' }}
          value={inputValue}
          onChange={handleChange}
        />
        <Button size="sm" onClick={handlePaste}>
          ペースト
        </Button>
      </Flex>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
export default InputUrl;