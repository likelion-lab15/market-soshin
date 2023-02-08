// 인풋 값이 비어있는지 확인
export const gapIsValid = inputValue => {
  return inputValue.trim().length !== 0; // true = 유효
};
