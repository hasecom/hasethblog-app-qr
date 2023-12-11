
export const getAsin = (url:string) => {
  const match = url.match(/dp\/([A-Z0-9]{10})/i);
  return match ? match[1] : null;
}

export const getShortUrl = (url:string) => {
  const urlRegex = /(https?:\/\/)?(amzn\.to|amzn\.asia)\/d\/[a-zA-Z0-9_-]+/i;
  const matches = url.match(urlRegex);
  if (matches) {
    // 抽出したURLが正規なものであればセット
    return matches[0];
  } else {
    // 正規でない場合は空にする
    return null;
  }
}