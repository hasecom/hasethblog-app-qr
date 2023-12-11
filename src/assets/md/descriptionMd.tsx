import ReactMarkdown from 'react-markdown';
import '@/assets/style/custom-markdown.css';

const markdownText = `
#### サービス概要
　   
　  
このサービスでは、AmazonのリンクからQRコードを生成し、画像保存できるフリーのAmazon QRコードメーカーです。このサービスを利用することで、定期的に購入したい商品を簡単に購入できるようになります。   
　   
 - **保存した画像を印刷し必要に応じてカメラをかざすことで、直感的に商品ページに移動できます。**  
　  
　 
 ![QRコードをカメラロールから読み取る](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211211102-1.png) 
　  
　  
 - **カメラロールから、QRコードを長押しすると、リンクへ移動することができます。**  
　  
　  
 ![QRコードをカメラロールから読み取る](https://hasethblog.com/wp-content/uploads/2023/12/無題478_20231211211630-1.png) 
　  
　   
 #### 使い方
　  
　  
### 1.Amazonの商品リンクをコピー
AmazonのアプリやWebサイトから、QRコード化する商品リンクをコピーします。
　  
　  
![Amazonの商品リンクコピー](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211080412-1.png)
　  
　  
### 2.商品リンクをペースト
本アプリの入力欄右の「ペースト」ボタンクリックまたは、直接ペーストをする。 
　  
　   
![Amazonの商品リンクペースト](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211210822-1.png)
　  
　  
### 3.「QR画像生成」ボタンをクリック
詳細設定から、画像化するQRコードのデザインを決め、
QR画像生成ボタンをクリックすることで、画像が生成されます。
　  
　  
![Amazonの商品QRを画像化](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211210930-1.png)
　  
　  
### 4.「画像を保存」ボタンをクリック
　  
　  
![Amazonの商品QRコードの保存](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211211010-1.png)
　  
`;


const DescriptionMd =  () =>  {
   return (
      <ReactMarkdown className="custom-markdown">
         {markdownText}
      </ReactMarkdown>
   );
}
export default DescriptionMd;

