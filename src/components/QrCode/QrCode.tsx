import React from 'react';
import QRCode from 'qrcode.react';
import { AMZN_LINK } from '@/constant';
interface QrCodeProps {
  value: string,
  size:number | undefined
}

const QrCode: React.FC<QrCodeProps> = ({ value,size }) => {
  const amazon_uri = AMZN_LINK(value);
  const qrCodeSize = size || 128;
  return (
    <div>
      <QRCode value={amazon_uri} size={qrCodeSize} />
    </div>
  );
};

export default QrCode;
