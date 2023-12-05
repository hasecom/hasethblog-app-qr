

import { useState, useContext, useEffect } from 'react';
import { Radio, RadioGroup, Stack,Box,Heading } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';

export const SettingQrSize = () => {
  const makerList = useContext(MakerListContext);
  const size = makerList ? (makerList.settingList.qr.size) : 128;
  const [value, setValue] = useState(size.toString());
  const updateSetting = () => {
    makerList?.updateSettingList({...makerList?.settingList,qr:{
      ...makerList?.settingList.qr,
      size:parseInt(value,10)
    }})
  }
  useEffect(()=>{
    updateSetting();
  },[value])
  return (
    <Box pt={4}>
      <Heading as="h2" size="sm" mb={2}>
        QRコードサイズ
      </Heading>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='64'>小</Radio>
          <Radio value='128'>中</Radio>
          <Radio value='256'>大</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}
