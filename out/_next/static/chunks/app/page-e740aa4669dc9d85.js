(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7710:function(e,t,n){Promise.resolve().then(n.bind(n,821))},821:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eh}});var l=n(7437),i=n(6621),s=n(9933),r=()=>(0,l.jsx)(i.k,{as:"header",align:"center",justify:"space-between",p:4,bg:"blue.500",color:"white",children:(0,l.jsx)(s.X,{fontSize:"xl",children:"Amazon商品QRコードメーカー"})}),a=n(2265),o=n(3621),c=n(8154),u=n(1504),d=n(7100),h=n(1091),x=n(6243);let p=(0,a.createContext)(null),g=e=>{let t=e.match(/dp\/([A-Z0-9]{10})/i);return t?t[1]:null},j=e=>{let t=e.match(/(https?:\/\/)?(amzn\.to|amzn\.asia)\/d\/[a-zA-Z0-9_-]+/i);return t?t[0]:null};var m=n(2173);async function v(e,t){try{return await m.Z.post(t,e,{headers:{"Content-Type":"multipart/form-data"}})}catch(e){throw e}}var f=e=>{let{number:t,isManual:n}=e,[s,r]=(0,a.useState)(""),[o,c]=(0,a.useState)(""),[m,f]=(0,a.useState)(""),[z,S]=(0,a.useState)(""),y=(0,a.useContext)(p),w=async e=>{try{let n=decodeURIComponent(e);if(r(n),""==e)throw f(""),null==y||y.removeItemByIndex(t),"";if(!n||""==n)throw"";let l=g(n),i=j(n);if(!l&&!i)throw"URLが正しくありません。";if(m==l)throw"";null==y||y.handleAsyncMakerList(!0);let s=await v({asin:l,amzn_url:i},"https://hasecom.angry.jp/amazon-qr-maker/request.php");null==y||y.handleAsyncMakerList(!1);let a=s.data&&s.data;if(!a||!("code"in a))throw"商品の取得に失敗しました。";if(0!=a.code)throw"この商品は存在しません。";f(a.result.asin),c(a.result.title),null==y||y.changeMakeList(a.result.asin,t,a.result.image,a.result.price,a.result.title,a.result.url)}catch(e){S("string"==typeof e?e:"")}};return(0,l.jsxs)(d.NI,{isInvalid:!!z,children:[(0,l.jsxs)(i.k,{justifyContent:"space-between",alignItems:"center",py:2,children:[(0,l.jsx)(h.I,{flex:n?.5:1,mr:1,type:"text",placeholder:n?"商品リンク[ ".concat(t+1," ]"):"Amazonの商品リンクを入力[ ".concat(t+1," ]"),_placeholder:{fontSize:"0.75rem"},value:s,onChange:e=>{w(e.target.value)}}),n&&(0,l.jsx)(h.I,{flex:"0.5",mr:1,type:"text",value:o,onChange:e=>{c(e.target.value),null==y||y.changeMakeListTitle(e.target.value)},placeholder:"商品名[ ".concat(t+1," ]"),_placeholder:{fontSize:"0.70rem"}}),(0,l.jsx)(u.z,{colorScheme:"red",variant:"ghost",size:"xs",onClick:()=>{w(""),c("")},mr:"2px",children:"クリア"}),(0,l.jsx)(u.z,{colorScheme:"teal",variant:"ghost",size:"xs",onClick:()=>{if(!navigator.clipboard){alert("ペースト機能が、お使いの環境に対応していないか、クリップボードにコピーされていません。");return}navigator.clipboard.readText().then(e=>{w(e)}).catch(e=>{alert("ペースト機能を使うには、ブラウザの許可設定が必要です。")})},children:"ペースト"})]}),(0,l.jsx)(x.J1,{children:z})]})},z=()=>{let[e,t]=(0,a.useState)(1),{divHeight:n,divRef:s}=S(e),[r,d]=(0,a.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.xu,{children:[(0,l.jsx)(o.xu,{overflow:3<e?"scroll":"auto",ref:s,height:n,mx:["auto","auto","auto","10%","20%","30%"],width:["95%","70%"],children:Array.from({length:e},(e,t)=>(0,l.jsx)(f,{number:t,isManual:r},t))}),(0,l.jsx)(o.xu,{mx:["auto","auto","auto","10%","20%","30%"],width:["90%","70%"],children:(0,l.jsxs)(i.k,{justifyContent:"flex-end",mt:2,py:2,children:[(0,l.jsx)(c.X,{size:"md",colorScheme:"blue",onChange:()=>{d(!r)},isChecked:r,children:"商品名を手動で入力"}),(0,l.jsx)(u.z,{colorScheme:"blue",variant:"outline",size:"sm",ml:"auto",py:2,px:2,onClick:()=>{if(10<=e){alert("最大10個までしか追加できません。");return}t(e+1)},children:"リンクを追加する"})]})})]})})};let S=e=>{let t=(0,a.useRef)(null),[n,l]=(0,a.useState)("auto");return(0,a.useEffect)(()=>{3<e?t&&t.current&&(l(t.current.clientHeight+"px"),t.current.scrollTop=t.current.scrollHeight):l("auto")},[e]),{divHeight:n,divRef:t}};var y=n(4748),w=n(839),b=n(2395);let C=e=>"https://www.amazon.co.jp/dp/".concat(e,"/ref=nosim?tag=").concat("qrcodemaker-22");var L=e=>{let{value:t,size:n}=e,i=C(t);return(0,l.jsx)("div",{children:(0,l.jsx)(b.ZP,{value:i,size:n||128})})},k=e=>{let{list:t}=e,n=(0,a.useContext)(p);return(0,l.jsx)(o.xu,{p:2,children:(0,l.jsxs)(i.k,{align:"center",children:[(0,l.jsx)(o.xu,{mr:2,children:(0,l.jsx)(L,{value:t.asin,size:null==n?void 0:n.settingList.qr.size})}),(0,l.jsxs)(o.xu,{children:[(null==n?void 0:n.settingList.title.display)&&(0,l.jsx)(w.x,{fontSize:(null==n?void 0:n.settingList.title.fontSize)+"px",whiteSpace:"pre-line",children:t.title}),(null==n?void 0:n.settingList.price.display)&&(0,l.jsx)(w.x,{fontSize:"sm",color:"gray.500",children:t.price})]})]})})},R=e=>{let{list:t}=e,n=(0,a.useContext)(p);return(0,l.jsx)(o.xu,{p:2,children:(0,l.jsxs)(i.k,{align:"center",flexDirection:"column",children:[(0,l.jsx)(i.k,{children:(0,l.jsx)(o.xu,{p:2,children:(0,l.jsx)(L,{value:t.asin,size:null==n?void 0:n.settingList.qr.size})})}),(0,l.jsxs)(o.xu,{children:[(null==n?void 0:n.settingList.title.display)&&(0,l.jsx)(w.x,{fontSize:(null==n?void 0:n.settingList.title.fontSize)+"px",whiteSpace:"pre-line",children:t.title}),(null==n?void 0:n.settingList.price.display)&&(0,l.jsx)(w.x,{fontSize:"sm",color:"gray.500",textAlign:"right",children:t.price})]})]})})},A=()=>{let e=(0,a.useContext)(p);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.xu,{mx:["auto","auto","auto","10%","20%","30%"],width:["90%","70%"],children:(0,l.jsxs)(o.xu,{position:"relative",border:"2px solid #add8e6",borderRadius:"8px",children:[(0,l.jsx)(o.xu,{overflow:"hidden",position:"relative",ref:null==e?void 0:e.html2canvasElementRef,paddingX:5,paddingY:10,children:(null==e?void 0:e.asyncMakerList)?(0,l.jsx)(o.xu,{p:4,children:(0,l.jsxs)(y.O,{children:[(0,l.jsx)("div",{children:"contents wrapped"}),(0,l.jsx)("div",{})]})}):((null==e?void 0:e.makeList)||[]).filter(e=>""!==e.asin).map((t,n)=>(null==e?void 0:e.settingList.type.layout)=="default"?(0,l.jsx)(k,{list:t},n):(null==e?void 0:e.settingList.type.layout)=="vertical"?(0,l.jsx)(R,{list:t},n):(0,l.jsx)(l.Fragment,{}))}),(0,l.jsx)(o.xu,{position:"absolute",top:"0",left:"0",background:"#add8e6",padding:"4px",borderRadius:"4px 0 0 0",children:(0,l.jsx)(w.x,{color:"white",children:"Preview"})})]})})})},_=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.xu,{maxW:"650px",mx:"auto",children:(0,l.jsx)(A,{})})}),E=()=>{let[e,t]=(0,a.useState)({type:{layout:"default"},title:{fontColor:"blue",fontSize:"20",display:!0},price:{display:!0},qr:{size:128}});return{settingList:e,updateSettingList:e=>{t(e)}}},I=n(2692),Q=n.n(I),Y=()=>{let e=(0,a.useRef)(null),[t,n]=(0,a.useState)("");return[async()=>{let t=e.current;if(!t){console.error("Target element not found");return}try{let e=await Q()(t);e.getContext("2d",{willReadFrequently:!0});let l=e.toDataURL();n(l)}catch(e){alert("作成失敗しました。"),console.error("Error capturing element:",e)}},e,t]},q=()=>{let[e,t]=(0,a.useState)(!1);return[e=>{t(e)},e]},F=e=>{let{children:t}=e,[n,i]=(0,a.useState)(null),{settingList:s,updateSettingList:r}=E(),[o,c,u]=Y(),[d,h]=q(),x=async e=>{i(t=>t?t.filter(t=>t.number!==e):t)};return(0,l.jsx)(p.Provider,{value:{makeList:n,changeMakeList:(e,t,n,l,s,r)=>{let a={asin:e,number:t,image:n,price:l,title:s,url:r};i(e=>{if(!e)return[a];let n=[...e],l=e.findIndex(e=>e.number===t);return -1!==l?n[l]=a:n.push(a),n})},changeMakeListTitle:e=>{i(t=>null===t?null:t.map(t=>({...t,title:e})))},removeItemByIndex:x,settingList:s,updateSettingList:r,captureElement:o,html2canvasElementRef:c,resultImage:u,handleAsyncMakerList:d,asyncMakerList:h},children:t})},M=n(8402),N=n(954),P=n(6526),T=n(501),X=n(3391),U=n(1629),Z=n(4159),K=n(8610),O=n(6691),B=n.n(O),D=n(8613);let G=()=>{let e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0"),r=String(e.getSeconds()).padStart(2,"0");return"".concat(t).concat(n).concat(l,"_").concat(i).concat(s).concat(r)};var H=()=>{let e=(0,a.useContext)(p),{isOpen:t,onOpen:n,onClose:i}=(0,M.q)();(0,a.useEffect)(()=>{(null==e?void 0:e.resultImage)&&n()},[null==e?void 0:e.resultImage,n]);let s=async()=>{if(null==e?void 0:e.resultImage){let t=atob((await e.resultImage).split(",")[1]),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);let l="QRメーカー_"+G()+".png",i=new Blob([n],{type:"image/png"}),s=new File([i],l,{type:i.type});navigator.share?navigator.share({files:[s],title:"アマゾン商品QRコードメーカー",text:"アマゾンの商品をQR化しました！"}).then(()=>console.log("Shared successfully")).catch(e=>console.log(e)):(0,D.saveAs)(i,l)}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(N.u_,{isOpen:t,onClose:i,children:[(0,l.jsx)(P.Z,{}),(0,l.jsxs)(T.h,{children:[(0,l.jsx)(X.x,{children:"生成完了"}),(0,l.jsx)(U.o,{}),(0,l.jsx)(Z.f,{children:(null==e?void 0:e.resultImage)?(0,l.jsx)(B(),{src:null==e?void 0:e.resultImage,alt:"Captured Image",width:500,height:300}):(0,l.jsx)("p",{children:"No image available"})}),(0,l.jsxs)(K.m,{children:[(0,l.jsx)(u.z,{variant:"ghost",mr:3,onClick:i,children:"閉じる"}),(0,l.jsx)(u.z,{colorScheme:"blue",onClick:s,children:"画像を保存"})]})]})]})})},W=n(3881);n(4117);var J=()=>(0,l.jsx)(W.U,{className:"custom-markdown",children:"\n#### プライバシーポリシー・免責事項\n　   \n　 \n##### 当サービスが利用する情報\n　\n当サービスでは、ASINを元にAmazonの商品URLを取得して、QRコードを生成します。  \nサービス品質向上のため、QRコード化した商品のログを取得しております。    \nこれは、個人を特定する情報を含んでおりません。  \n##### 当サービスが利用するサードパーティーサービスの使用\n当サービスでは利用状況を把握するため、\nまたサービス品質向上のためにGoogleによるアクセス解析ツール「Googleアナリティクス」を利用しております。  \nトラフィックデータ収集のためCookieを使用しておりますが、  \n個人情報を含まないデータを収集しております。\n##### 広告の配信\n　  \n当サービスはGoogleAdSenseおよびAmazonアソシエイト・プログラムの参加者です。\n　  \n　  \n##### 免責事項\n　  \n当サービスを使用して作成されたリンク先で提供される情報、サービスについては、一切の責任を負いません。  \n当サービスで取得する情報は、Product Advertising API (以下PA-API）を使用しており、  \nAmazonの正確な情報を取得することができますが、生成した画像が古い場合、記載情報が古くなっていることもございます。\n　  \n　  \n##### お問合せ\n　  \nご要望、ご用件を記入の上、メールにてご連絡ください。  \n運営者 hasethblog@gmail.com\n　  \n"});let V=e=>(0,l.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:e.children});var $=()=>(0,l.jsx)(W.U,{className:"custom-markdown",components:{a:V},children:"\n#### サービス概要\n　   \n　  \nこのサービスでは、[Amazon](https://www.amazon.co.jp/) のリンクからQRコードを生成し、画像保存できるフリーのAmazon QRコードメーカーです。このサービスを利用することで、定期的に購入したい商品を簡単に購入できるようになります。   \n　   \n - **保存した画像を印刷し必要に応じてカメラをかざすことで、直感的に商品ページに移動できます。**  \n　  \n　 \n ![QRコードをカメラロールから読み取る](https://hasethblog.com/wp-content/uploads/2023/12/無題478_20231211211630-1.png) \n　  \n　  \n - **カメラロールから、QRコードを長押しすると、リンクへ移動することができます。**  \n　  \n　  \n ![QRコードをカメラロールから読み取る](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211211102-1.png) \n　  \n　   \n #### 使い方\n　  \n　  \n### 1.Amazonの商品リンクをコピー\nAmazonのアプリやWebサイトから、QRコード化する商品リンクをコピーします。\n　  \n　  \n![Amazonの商品リンクコピー](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211080412-1.png)\n　  \n　  \n### 2.商品リンクをペースト\n本アプリの入力欄右の「ペースト」ボタンクリックまたは、直接ペーストをする。 \n　  \n　   \n![Amazonの商品リンクペースト](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211210822-1.png)\n　  \n　  \n### 3.「QR画像生成」ボタンをクリック\n詳細設定から、画像化するQRコードのデザインを決め、\nQR画像生成ボタンをクリックすることで、画像が生成されます。\n　  \n　  \n![Amazonの商品QRを画像化](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211210930-1.png)\n　  \n　  \n### 4.「画像を保存」ボタンをクリック\n　  \n　  \n![Amazonの商品QRコードの保存](https://hasethblog.com/wp-content/uploads/2023/12/無題477_20231211211010-1.png)\n　  \n"}),ee=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.xu,{mx:["auto","auto"],width:["90%","65%"],children:[(0,l.jsx)(o.xu,{position:"relative",paddingTop:"100px",children:(0,l.jsx)($,{})}),(0,l.jsx)(o.xu,{position:"relative",paddingTop:"10px",paddingBottom:"10px",children:(0,l.jsx)(J,{})}),(0,l.jsx)(o.xu,{position:"relative",paddingBottom:"300px"})]})}),et=n(1469),en=n(2830),el=n(7035);let ei=()=>{let e=(0,a.useContext)(p),t=!e||e.settingList.title.display?"0":"1",[n,i]=(0,a.useState)(t),r=()=>{null==e||e.updateSettingList({...null==e?void 0:e.settingList,title:{...null==e?void 0:e.settingList.title,display:"0"==n}})};return(0,a.useEffect)(()=>{r()},[n]),(0,l.jsxs)(o.xu,{pt:4,children:[(0,l.jsx)(s.X,{as:"h2",size:"sm",mb:2,children:"商品名表示"}),(0,l.jsx)(et.E,{onChange:i,value:n,children:(0,l.jsxs)(en.K,{direction:"row",children:[(0,l.jsx)(el.Y,{value:"0",children:"表示"}),(0,l.jsx)(el.Y,{value:"1",children:"非表示"})]})})]})},es=()=>{let e=(0,a.useContext)(p),[t,n]=(0,a.useState)(e?()=>e.settingList.title.fontSize:"20"),i=()=>{null==e||e.updateSettingList({...null==e?void 0:e.settingList,title:{...null==e?void 0:e.settingList.title,fontSize:t}})};return(0,a.useEffect)(()=>{i()},[t]),(0,l.jsxs)(o.xu,{pt:4,children:[(0,l.jsx)(s.X,{as:"h2",size:"sm",mb:2,children:"商品名サイズ"}),(0,l.jsx)(et.E,{onChange:n,value:t,children:(0,l.jsxs)(en.K,{direction:"row",children:[(0,l.jsx)(el.Y,{value:"15",children:"小"}),(0,l.jsx)(el.Y,{value:"20",children:"ふつう"}),(0,l.jsx)(el.Y,{value:"25",children:"大"})]})})]})},er=()=>{let e=(0,a.useContext)(p),t=!e||e.settingList.price.display?"0":"1",[n,i]=(0,a.useState)(t),r=()=>{null==e||e.updateSettingList({...null==e?void 0:e.settingList,price:{...null==e?void 0:e.settingList.price,display:"0"==n}})};return(0,a.useEffect)(()=>{r()},[n]),(0,l.jsxs)(o.xu,{pt:4,children:[(0,l.jsx)(s.X,{as:"h2",size:"sm",mb:2,children:"価格表示"}),(0,l.jsx)(et.E,{onChange:i,value:n,children:(0,l.jsxs)(en.K,{direction:"row",children:[(0,l.jsx)(el.Y,{value:"0",children:"表示"}),(0,l.jsx)(el.Y,{value:"1",children:"非表示"})]})})]})},ea=()=>{let e=(0,a.useContext)(p),t=e?e.settingList.qr.size:128,[n,i]=(0,a.useState)(t.toString()),r=()=>{null==e||e.updateSettingList({...null==e?void 0:e.settingList,qr:{...null==e?void 0:e.settingList.qr,size:parseInt(n,10)}})};return(0,a.useEffect)(()=>{r()},[n]),(0,l.jsxs)(o.xu,{pt:4,children:[(0,l.jsx)(s.X,{as:"h2",size:"sm",mb:2,children:"QRコードサイズ"}),(0,l.jsx)(et.E,{onChange:i,value:n,children:(0,l.jsxs)(en.K,{direction:"row",children:[(0,l.jsx)(el.Y,{value:"64",children:"小"}),(0,l.jsx)(el.Y,{value:"128",children:"中"}),(0,l.jsx)(el.Y,{value:"256",children:"大"})]})})]})},eo=()=>{let e=(0,a.useContext)(p),[t,n]=(0,a.useState)(e?()=>e.settingList.type.layout:"default"),i=()=>{null==e||e.updateSettingList({...null==e?void 0:e.settingList,type:{...null==e?void 0:e.settingList.type,layout:t}})};return(0,a.useEffect)(()=>{i()},[t]),(0,l.jsxs)(o.xu,{pt:4,children:[(0,l.jsx)(s.X,{as:"h2",size:"sm",mb:2,children:"表示タイプ"}),(0,l.jsx)(et.E,{onChange:n,value:t,children:(0,l.jsxs)(en.K,{direction:"row",children:[(0,l.jsx)(el.Y,{value:"default",children:"標準"}),(0,l.jsx)(el.Y,{value:"vertical",children:"縦向き"})]})})]})};var ec=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eo,{}),(0,l.jsx)(ei,{}),(0,l.jsx)(es,{}),(0,l.jsx)(er,{}),(0,l.jsx)(ea,{})]}),eu=()=>{let{isOpen:e,onOpen:t,onClose:n}=(0,M.q)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.z,{colorScheme:"blue",size:"md",mx:2,onClick:t,children:"詳細設定"}),(0,l.jsxs)(N.u_,{isOpen:e,onClose:n,children:[(0,l.jsx)(P.Z,{}),(0,l.jsxs)(T.h,{children:[(0,l.jsx)(X.x,{children:"詳細設定"}),(0,l.jsx)(U.o,{}),(0,l.jsx)(Z.f,{children:(0,l.jsx)(ec,{})}),(0,l.jsx)(K.m,{children:(0,l.jsx)(u.z,{colorScheme:"blue",mr:3,onClick:n,children:"閉じる"})})]})]})]})},ed=()=>{let e=(0,a.useContext)(p),t=async()=>{(null==e?void 0:e.captureElement)instanceof Function?await e.captureElement():console.error("captureElement is not a function")};return(0,l.jsxs)(i.k,{position:"fixed",bottom:0,left:0,right:0,p:4,bg:"gray.200",justify:"center",align:"center",children:[(0,l.jsx)(eu,{}),(0,l.jsx)(u.z,{colorScheme:"blue",size:"md",mx:2,onClick:t,children:"QR画像生成"})]})},eh=()=>(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,l.jsx)(r,{}),(0,l.jsxs)(F,{children:[(0,l.jsx)(z,{}),(0,l.jsx)(_,{}),(0,l.jsx)(H,{}),(0,l.jsx)(ee,{}),(0,l.jsx)(ed,{})]})]})},4117:function(){}},function(e){e.O(0,[337,985,904,971,938,744],function(){return e(e.s=7710)}),_N_E=e.O()}]);