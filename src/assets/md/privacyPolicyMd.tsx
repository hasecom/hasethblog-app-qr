import ReactMarkdown from 'react-markdown';
import '@/assets/style/custom-markdown.css';

const markdownText = `
#### プライバシーポリシー・免責事項
　   
　 
##### 当サービスが利用する情報
　
当サービスでは、ASINを元にAmazonの商品URLを取得して、QRコードを生成します。  
サービス品質向上のため、QRコード化した商品のログを取得しております。    
これは、個人を特定する情報を含んでおりません。  
##### 当サービスが利用するサードパーティーサービスの使用
当サービスでは利用状況を把握するため、
またサービス品質向上のためにGoogleによるアクセス解析ツール「Googleアナリティクス」を利用しております。  
トラフィックデータ収集のためCookieを使用しておりますが、  
個人情報を含まないデータを収集しております。
##### 広告の配信
　  
当サービスはGoogleAdSenseおよびAmazonアソシエイト・プログラムの参加者です。
　  
　  
##### 免責事項
　  
当サービスを使用して作成されたリンク先で提供される情報、サービスについては、一切の責任を負いません。  
当サービスで取得する情報は、Product Advertising API (以下PA-API）を使用しており、  
Amazonの正確な情報を取得することができますが、生成した画像が古い場合、記載情報が古くなっていることもございます。
　  
　  
##### お問合せ
　  
ご要望、ご用件を記入の上、メールにてご連絡ください。  
運営者 hasethblog@gmail.com
　  
`;


const PrivacyPolicyMd =  () =>  {
   return (
      <ReactMarkdown className="custom-markdown">
         {markdownText}
      </ReactMarkdown>
   );
}
export default PrivacyPolicyMd;

