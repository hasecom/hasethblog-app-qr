'use client'
import React, { useState } from 'react';
import { 
  MakerList, 
  MakerListProvide, 
} from '@/type';
import useDetailsSetting from './customHooks/useDetailsSetting';
import MakerListContext from '@/context/makerListContext';
import useHtml2canvas from '@/components/html2canvas/useHtml2canvas';
import useAsyncMakerList from './customHooks/useAsyncMarkerList';
type makerProvider = {
  children: React.ReactNode,
}

const MakerProvider = ({ children }: makerProvider) => {
  const [makeList, setMakeList] = useState<MakerList[] | null>(null);
  const {settingList,updateSettingList} = useDetailsSetting();
  const [captureElement,html2canvasElementRef,resultImage] = useHtml2canvas();
  const [handleAsyncMakerList,asyncMakerList] = useAsyncMakerList();
  const removeItemByIndex = async(number:number) => {
    setMakeList((prevList) => {
      if (!prevList) return prevList;
      const updatedList = prevList.filter(item => item.number !== number);
      return updatedList;
    });
  };
  const changeMakeList = (asinStr: string, number: number,image:string,price:string,title:string,url:string) => {
    const list: MakerList = { asin: asinStr,number: number,image:image,price:price,title:title,url:url };
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
  const changeMakeListTitle = (title: string) => {
    setMakeList((prevList: MakerList[] | null) => {
      if (prevList === null) {
        return null; 
      }
      return prevList.map((item) => ({
        ...item,
        title: title,
      }));
    });
  };
  const makerListProvide: MakerListProvide = { 
    makeList, //作成するリスト
    changeMakeList,//リストのonChange関数
    changeMakeListTitle,
    removeItemByIndex,//リストのアイテム削除関数
    settingList,//設定リスト
    updateSettingList,//設定更新関数
    captureElement,//html2canvasの対象要素
    html2canvasElementRef,//画像化関数
    resultImage,
    handleAsyncMakerList,//非同期通信中の待機判定用(セット)
    asyncMakerList//非同期通信中の待機判定用
   };
  return (
    <MakerListContext.Provider value={makerListProvide}>
      {children}
    </MakerListContext.Provider>
  )
}
export default MakerProvider;