import { useState, useEffect } from 'react';
import { SettingTitleDisplay,SettingTitleSize } from './settingTitle';
import { SettingPriceDisplay } from './settingPrice';
import { SettingQrSize} from './settingQr';
const SettingForm = () => {
  

  return (
    <>
      <SettingTitleDisplay />
      <SettingTitleSize />
      <SettingPriceDisplay />
      <SettingQrSize />
    </>
  );
}
export default SettingForm;

