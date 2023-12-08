export const timestamp = () => {
  // 現在の日時を取得
  const currentDate = new Date();
  // 年、月、日、時、分、秒を取得
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 0-based months
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  // タイムスタンプを生成
  const timestamp = `${year}${month}${day}_${hours}${minutes}${seconds}`;
  return timestamp;
}