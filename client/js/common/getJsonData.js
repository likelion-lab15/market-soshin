//JSON 웹서버
const url = "http://localhost:3000/products";

//JSON 문자열을 객체로 반환해준다
export async function getJsonData() {
  const response = await fetch(url);
  const jsonArray = await response.json();
  return jsonArray;
}

  //템플릿 함수를 만들어서 재사용을 할 수는 있다.
  //캐래설 자체도 renderSwiper. swiper를 만들고 내보내는 함수가 있을 거임
  //naming이 중요하다.
  //유틸함수에서 애초에 객체로 받아서 구조분해할당으로 받아서 쓸 수 있다. 
  //swiper까지 