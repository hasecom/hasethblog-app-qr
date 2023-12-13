
export type MakerList = {
  number:number
  asin:string,
  image:string,
  price:string,
  title:string,
  url:string
}

export type MakerListProvide = {
  makeList:MakerList[] | null,
  changeMakeList: (asin:string,number:number,image:string,price:string,title:string,url:string)=>void,
  changeMakeListTitle:(title:string)=>void,
  removeItemByIndex:(number:number)=>void,
  settingList:DetailSetting,
  updateSettingList:(newSettingList:DetailSetting)=>void,
  captureElement:React.MutableRefObject<null> | (() => Promise<void>) ,
  html2canvasElementRef:(() => Promise<void>) | React.MutableRefObject<null> ,
  resultImage:string | null,
  handleAsyncMakerList:(isAsync:boolean)=>void,
  asyncMakerList:boolean
}

export type DetailSetting = {
  title:{
    fontColor:string,
    fontSize:string,
    display:boolean
  }
  price:{
    display:boolean
  },
  qr:{
    size:number
  }
}