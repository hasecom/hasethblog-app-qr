import { useState, useEffect } from 'react';
import { SettingTitleDisplay } from './settingTitle';
import { SettingPriceDisplay } from './settingPrice';
import { SettingQrSize} from './settingQr';
const SettingForm = () => {
  

  return (
    <>
      <SettingTitleDisplay />
      <SettingPriceDisplay />
      <SettingQrSize />
    </>
  );
}
export default SettingForm;

