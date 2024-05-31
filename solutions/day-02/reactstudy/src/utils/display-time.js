export const showDate = (date) => {
  const _date = new Date(date);
  return `${_date.getFullYear()}年${_date.getMonth() + 1}月${_date.getDay()}日`;
};
