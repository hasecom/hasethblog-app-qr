
export type MakerList = {
  number:number
  asin:string
}

export type MakerListProvide = {
  makeList:MakerList[] | null,
  changeMakeList: (asin:string,number:number)=>void,
  removeItemByIndex:(number:number)=>void,
  settingList:DetailSetting,
  updateSettingList:(newSettingList:DetailSetting)=>void
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