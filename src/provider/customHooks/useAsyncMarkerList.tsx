import { useState } from 'react';

type AsyncMakerListHook = () => [(isAsync:boolean) => void, boolean];
//同期処理のリクエスト中のプレイビュー待機表示用
const useAsyncMakerList:AsyncMakerListHook = () => {
  const [asyncMakerList,setAsyncMakerList] = useState<boolean>(false);
  const handleAsyncMakerList = (isAsync:boolean) =>  {
    setAsyncMakerList(isAsync)
  }
  return [handleAsyncMakerList,asyncMakerList];
}

export default useAsyncMakerList;