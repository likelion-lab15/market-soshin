const url = "http://localhost:3000/products";

// async, await + fetch
export async function getData() {
  const response = await fetch(url);
  const jsonArray = await response.json();
  //데이터 배열인 jsonArray 반환
  // console.log(jsonArray);
  return jsonArray;
}