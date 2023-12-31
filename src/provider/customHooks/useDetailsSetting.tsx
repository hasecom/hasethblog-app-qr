import {useState} from 'react';
import { 
  DetailSetting
} from '@/type';

const useDetailsSetting = () => {
  const initSettingList:DetailSetting = {
    type:{
      layout:'default'
    },
    title:{
      fontColor:'blue',
      fontSize:'20',
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