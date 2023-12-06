
import React, { useState ,useRef} from 'react';
import html2canvas from 'html2canvas';

const useHtml2canvas =  () => {
  const html2canvasElementRef = useRef(null);
  const [resultImage,setResultImage] = useState<string>('')
  const captureElement = async () => {
    const targetElement = html2canvasElementRef.current;
    if (!targetElement) {
      console.error('Target element not found');
      return;
    }
    try {
      const canvas = await html2canvas(targetElement);
      const imageDataUrl:string = canvas.toDataURL();
      setResultImage(imageDataUrl);
    } catch (error) {
      console.error('Error capturing element:', error);
    }
  };
  type UseHtml2canvasReturnType = [typeof captureElement, typeof html2canvasElementRef, string];
  const returnValue: UseHtml2canvasReturnType = [captureElement, html2canvasElementRef, resultImage];
  return returnValue;
}
export default useHtml2canvas;