'use client'
import React, { useState ,useRef} from 'react';
import { 
  MakerList, 
  MakerListProvide, 
} from '@/type';
import useDetailsSetting from './customHooks/useDetailsSetting';
import MakerListContext from '@/context/makerListContext';
import useHtml2canvas from '@/components/html2canvas/useHtml2canvas';
type makerProvider = {
  children: React.ReactNode,
}

const MakerProvider = ({ children }: makerProvider) => {
  const [makeList, setMakeList] = useState<MakerList[] | null>(null);
  const {settingList,updateSettingList} = useDetailsSetting();
  const [captureElement,html2canvasElementRef,resultImage] = useHtml2canvas();
  const removeItemByIndex = (number:number) => {
    setMakeList((prevList) => {
      if (!prevList) return prevList;
      const updatedList = [...prevList];
      updatedList.splice(number, 1);
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
  const makerListProvide: MakerListProvide = { 
    makeList, //作成するリスト
    changeMakeList,//リストのonChange関数
    removeItemByIndex,//リストのアイテム削除関数
    settingList,//設定リスト
    updateSettingList,//設定更新関数
    captureElement,//html2canvasの対象要素
    html2canvasElementRef,//画像化関数
    resultImage
   };
  return (
    <MakerListContext.Provider value={makerListProvide}>
      {children}
    </MakerListContext.Provider>
  )
}
export default MakerProvider;