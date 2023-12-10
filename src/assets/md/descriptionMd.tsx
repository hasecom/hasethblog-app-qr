import ReactMarkdown from 'react-markdown';
import '@/assets/style/custom-markdown.css';

const markdownText = `
#### サービス概要
***  
　  
このサービスでは、AmazonのリンクからQRコードを生成し、画像保存できるフリーのAmazon QRコードメーカーです。このサービスを利用することで、定期的に購入したい商品を簡単に購入できるようになります。   
　   
 - **保存した画像を印刷し必要に応じてカメラをかざすことで、直感的に商品ページに移動できます。**  
　  
 - **カメラロールから、QRコードを長押しすると、リンクへ移動することができます。**  
 #### 使い方
### 1.Amazonの商品リンクをコピー
AmazonのアプリやWebサイトから、QRコード化する商品リンクをコピーします。
　  
![Amazonの商品リンクコピー](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211080412-1.png)
　  

### 2.商品リンクをペースト
本アプリの入力欄右の「ペースト」ボタンクリックまたは、直接ペーストをする。  

### 3.「QR画像生成」ボタンをクリック
詳細設定から、画像化するQRコードのデザインを決め、
QR画像生成ボタンをクリックすることで、画像が生成されます。
### 4.「画像を保存」ボタンをクリック
`;


const DescriptionMd =  () =>  {
   return (
      <ReactMarkdown className="custom-markdown">
         {markdownText}
      </ReactMarkdown>
   );
}
export default DescriptionMd;

