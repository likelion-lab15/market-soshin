//JSON 웹서버
const url = "http://localhost:3000/products";

//JSON 문자열을 객체로 반환해준다
export async function getJsonData() {
  const response = await fetch(url);
  const jsonArray = await response.json();
  return jsonArray;
}