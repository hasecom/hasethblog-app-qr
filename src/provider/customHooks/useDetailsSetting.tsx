import {useState,useEffect} from 'react';
import { 
  DetailSetting
} from '@/type';

const useDetailsSetting = () => {
  const initSettingList:DetailSetting = {
    title:{
      fontColor:'blue',
      fontSize:'20px',
      display:true
    },
    price:{
      display:true
    },
    qr:{
      size:128
    }
  }
  const [settingList,setSettingList] = useState<DetailSetting>(initSettingList);
  const updateSettingList = (newSettingList: DetailSetting) => {
    setSettingList(newSettingList);
  };
  return {settingList,updateSettingList};
}
export default useDetailsSetting;