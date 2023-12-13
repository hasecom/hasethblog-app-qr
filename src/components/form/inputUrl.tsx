import { useState, useContext } from 'react';
import { Input, Flex, Button, FormControl, FormErrorMessage } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';
import { getAsin,getShortUrl } from '@/utill/asin';
import { fetchWithData } from '@/utill/axios';
type Props = {
  number: number,
  isManual:boolean
}
const InputUrl: React.FC<Props> = ({ number,isManual }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');//商品名
  const [lastResquestAsin,setLastRequestAsin] = useState('');
  const [error, setError] = useState('');
  const makeListContext = useContext(MakerListContext);

  const handleChange = (e: any) => {
    getProduct(e.target.value);
  }
  const handleChangeName = (e:any) =>{
    setInputName(e.target.value);
    makeListContext?.changeMakeListTitle(e.target.value)
  }
  const handleClear = () =>  {
    getProduct('');
    setInputName('');
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
        setLastRequestAsin('');
        makeListContext?.removeItemByIndex(number);
        throw '';
     }
      if (!decodeInputValue || decodeInputValue == "") throw '';
      //asinチェック
      const asin = getAsin(decodeInputValue);
      const amzn_url = getShortUrl(decodeInputValue);
      if (!asin && !amzn_url) throw 'URLが正しくありません。';
      const postData = { 'asin': asin,'amzn_url':amzn_url }
      if(lastResquestAsin == asin ) throw '';
      makeListContext?.handleAsyncMakerList(true);
      const response = await fetchWithData(postData, process.env.NEXT_PUBLIC_API_URL+'/amazon-qr-maker/request.php');
      makeListContext?.handleAsyncMakerList(false);
      const responseData = response.data && response.data;
      if (!responseData ||!('code' in responseData)) throw '商品の取得に失敗しました。'
      if (responseData['code'] != 0) throw 'この商品は存在しません。';
      setLastRequestAsin(responseData.result.asin);
      setInputName(responseData.result.title);
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
      <Flex justifyContent="space-between" alignItems="center" py={2}>
        <Input
          flex={!isManual ? 1 : 0.5}
          mr={1}
          type="text"
          placeholder={!isManual ? `Amazonの商品リンクを入力[ ${number + 1} ]` : `商品リンク[ ${number + 1} ]`}
          _placeholder={{ fontSize: '0.75rem' }}
          value={inputValue}
          onChange={handleChange}
        />
        {isManual && (
                  <Input
                  flex="0.5"
                  mr={1}
                  type="text"
                  value={inputName}
                  onChange={handleChangeName}
                  placeholder={`商品名[ ${number + 1} ]`}
                  _placeholder={{ fontSize: '0.70rem' }}
                />
        )}
        <Button colorScheme='red' variant='ghost' size="xs" onClick={handleClear} mr="2px">
          クリア
        </Button>
        <Button colorScheme='teal' variant='ghost' size="xs" onClick={handlePaste}>
          ペースト
        </Button>
      </Flex>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
export default InputUrl;