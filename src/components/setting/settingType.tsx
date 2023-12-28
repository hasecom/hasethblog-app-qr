import { useState, useContext, useEffect } from 'react';
import { Radio, RadioGroup, Stack,Box,Heading } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';

export const SettingTypeLayout = () => {
  const makerList = useContext(MakerListContext);
  const initValue = (makerList ? ()=>{
    return makerList.settingList.type.layout
  } : 'default' ) 
  const [value, setValue] = useState(initValue);
  const updateTypeLayoutSetting = () => {
    makerList?.updateSettingList({
      ...makerList?.settingList,type:{
      ...makerList?.settingList.type,
      layout:value
    }})
  }
  useEffect(()=>{
    updateTypeLayoutSetting();
  },[value])
  return (
    <Box pt={4}>
      <Heading as="h2" size="sm" mb={2}>
        表示タイプ
      </Heading>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='default'>標準</Radio>
          <Radio value='vertical'>縦向き</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}
