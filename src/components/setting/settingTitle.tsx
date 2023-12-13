import { useState, useContext, useEffect } from 'react';
import { Radio, RadioGroup, Stack, Box, Heading } from '@chakra-ui/react'
import MakerListContext from '@/context/makerListContext';

export const SettingTitleDisplay = () => {
  const makerList = useContext(MakerListContext);
  const display = (makerList ? (makerList.settingList.title.display) : true) ? "0" : "1";
  const [value, setValue] = useState(display);
  const updateDisplaySetting = () => {
    makerList?.updateSettingList({
      ...makerList?.settingList, title: {
        ...makerList?.settingList.title,
        display: value == "0" ? true : false
      }
    })
  }
  useEffect(() => {
    updateDisplaySetting();
  }, [value])
  return (
      <Box pt={4}>
        <Heading as="h2" size="sm" mb={2}>
          商品名表示
        </Heading>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio value='0'>表示</Radio>
            <Radio value='1'>非表示</Radio>
          </Stack>
        </RadioGroup>
      </Box>
  );
}

export const SettingTitleSize = () => {
  const makerList = useContext(MakerListContext);
  const initValue = (makerList ? ()=>{
    return makerList.settingList.title.fontSize
  } : '20' ) 
  const [value, setValue] = useState(initValue);
  const updateSetting = () => {
    makerList?.updateSettingList({
      ...makerList?.settingList, title: {
        ...makerList?.settingList.title,
        fontSize:value
      }
    })
  }
  useEffect(() => {
    updateSetting();
  }, [value])
  return (
      <Box pt={4}>
        <Heading as="h2" size="sm" mb={2}>
          商品名サイズ
        </Heading>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction='row'>
            <Radio value='15'>小</Radio>
            <Radio value='20'>ふつう</Radio>
            <Radio value='25'>大</Radio>
          </Stack>
        </RadioGroup>
      </Box>
  );
}