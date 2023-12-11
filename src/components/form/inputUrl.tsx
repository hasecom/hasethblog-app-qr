import { useState, useContext } from 'react';
import { Input, Flex, Button, FormControl, FormErrorMessage } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
import { getAsin,getShortUrl } from '@/utill/asin';
import { fetchWithData } from '@/utill/axios';
type Props = {
  number: number
}
const InputUrl: React.FC<Props> = ({ number }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [lastResquestAsin,setLastRequestAsin] = useState('');
  const [error, setError] = useState('');
  const makeListContext = useContext(MakerListContext);

  const handleChange = (e: any) => {
    getProduct(e.target.value);
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
      if (getInputValue == "") {
        makeListContext?.removeItemByIndex(number);
        throw '';
     }
      if (!decodeInputValue || decodeInputValue == "") throw '';
      //asinチェック
      const asin = getAsin(decodeInputValue);
      const amzn_url = getShortUrl(decodeInputValue);
      if (!asin && !amzn_url) throw 'URLが正しくありません。';
      const postData = { 'asin': asin,'amzn_url':amzn_url }
      if(lastResquestAsin == asin) throw '';
      makeListContext?.handleAsyncMakerList(true);
      const response = await fetchWithData(postData, 'https://hasecom.angry.jp/amazon-qr-maker/request.php');
      makeListContext?.handleAsyncMakerList(false);
      const responseData = response.data && response.data;
      if (!responseData ||!('code' in responseData)) throw '商品の取得に失敗しました。'
      if (responseData['code'] != 0) throw 'この商品は存在しません。';
      setLastRequestAsin(responseData.result.asin);
      makeListContext?.changeMakeList(
        responseData.result.asin,
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