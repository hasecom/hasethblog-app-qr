'use client'
import React, { useState} from 'react';
import { 
  MakerList, 
  MakerListProvide, 
} from '@/type';
import useDetailsSetting from './customHooks/useDetailsSetting';
import MakerListContext from '@/context/makerListContext';

type makerProvider = {
  children: React.ReactNode,
}

const MakerProvider = ({ children }: makerProvider) => {
  const [makeList, setMakeList] = useState<MakerList[] | null>(null);
  const {settingList,updateSettingList} = useDetailsSetting();
  const removeItemByIndex = (number:number) => {
    setMakeList((prevList) => {
      if (!prevList) return prevList;
      const updatedList = [...prevList];
      updatedList.splice(number, 1);
      return updatedList;
    });
  };
  const changeMakeList = (asinStr: string, number: number) => {
    const list: MakerList = { asin: asinStr,number: number };
    setMakeList((prevList) => {
      if (!prevList) {
        return [list];
      }
      const updatedList = [...prevList];
      const existingIndex = prevList.findIndex((item) => item.number === number);
      if (existingIndex !== -1) {
        // 既存のリストに同じインデックスが存在する場合、更新
        updatedList[existingIndex] = list;
      } else {
        // 既存のリストに同じインデックスが存在しない場合、追加
        updatedList.push(list);
      }
      return updatedList;
    });
  }
  const makerListProvide: MakerListProvide = { makeList, changeMakeList,removeItemByIndex,settingList,updateSettingList };
  return (
    <MakerListContext.Provider value={makerListProvide}>
      {children}
    </MakerListContext.Provider>
  )
}
export default MakerProvider;