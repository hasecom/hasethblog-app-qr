import { SettingTitleDisplay,SettingTitleSize } from './settingTitle';
import { SettingPriceDisplay } from './settingPrice';
import { SettingQrSize} from './settingQr';
import { SettingTypeLayout } from './settingType';
const SettingForm = () => {
  return (
    <>
      <SettingTypeLayout />
      <SettingTitleDisplay />
      <SettingTitleSize />
      <SettingPriceDisplay />
      <SettingQrSize />
    </>
  );
}
export default SettingForm;

