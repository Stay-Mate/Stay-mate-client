const formatDateTime = (dateTimeString: string | number | Date) => {
  const dateTime = new Date(dateTimeString);
  const month = dateTime.toLocaleString("default", { month: "long" });
  const day = dateTime.getDate();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();

  return `${month} ${day}일 ${hour}시 ${minute}분`;
};

export default formatDateTime;
