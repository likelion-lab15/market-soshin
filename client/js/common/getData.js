// fetch사용해 'http://localhost:3000/products'에서 데이터 뽑아오기
//https://dewworld27.tistory.com/entry/%EC%84%9C%EB%B2%84%EC%97%90%EC%84%9C-Promise%EC%99%80-fetch%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0-%EC%8B%A4%EB%AC%B4%ED%8E%B8

export function getData() {
  fetch("http://localhost:3000/products")
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      return json;
    });
}
