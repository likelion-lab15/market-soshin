# <span id="top">✋🏻 MARKET-소신</span>

[🔗 배포 URL](http://#)

## 개요

- 🦁 멋쟁이사자처럼 프론트엔드스쿨 4기 LAB 15에서 프로젝트를 진행한 <b> 소신있조 </b> 팀입니다.
- ✋🏻 <b>MARKET-소신</b> 서비스는 탱탱쫄면을 판매합니다. 원하는 상품을 장바구니에 추가하여
- ✋🏻 <b>MARKET-소신</b> 서비스는 탱탱쫄면을 판매합니다. 원하는 상품을 장바구니에 추가하여
- ✋🏻 <b>MARKET-소신</b> 서비스는 탱탱쫄면을 판매합니다. 원하는 상품을 장바구니에 추가하여
- ✋🏻 <b>MARKET-소신</b> 서비스는 탱탱쫄면을 판매합니다. 원하는 상품을 장바구니에 추가하여

## 🐣 팀원 구성

- ⛄️ 김진우 🔗[github/rlawlsdn263](https://github.com/rlawlsdn263)
- ⛄️ 김도현 🔗[github/kimzeze](https://github.com/kimzeze)
- ⛄️ 조성찬 🔗[github/zerocalorie1226](https://github.com/zerocalorie1226)
- ⛄️ 채하은 🔗[github/chaehaeun](https://github.com/chaehaeun)
- ⛄️ 현지수 🔗[github/hyunzsu](https://github.com/hyunzsu)

<details>
<summary>목차</summary>

1. [프로젝트 목표](#goal)
2. [개발 환경 및 배포 URL](#dev)
3. [프로젝트 구조](#tree)
4. [역할 분담](#role)
5. [개발 기간 및 이슈 관리](#task)
6. [UI](#ui)
7. [페이지 기능](#pages)
8. [개발하며 겪은 이슈](#issues)

</details>

---

## <span id="goal">1. 프로젝트 목표</span>

- 프로젝트 목표를 적습니다
- 프로젝트 목표를 적습니다
- 프로젝트 목표를 적습니다

<p align="right"><a href="#top">(Top)</a></p>

## <span id="dev">2. 개발 환경 및 배포 URL</span>

### 개발 환경

- Front : HTML, CSS, Vanilla JS
- Back : 제공된 API 사용
- 버전 관리 및 이슈 :
  🔗[GitHub](https://github.com/likelion-lab15/market-soshin),
  🔗[GitHub Issues](https://github.com/likelion-lab15/market-soshin/issues),
  🔗[GitHub Project](https://github.com/likelion-lab15/market-soshin/projects)

### 배포 URL

URL : 🔗 https://######

<p align="right"><a href="#top">(Top)</a></p>

## <span id="tree">3. 프로젝트 구조</span>

- assets/ : 이미지, 파비콘, 아이콘 등
- html/ : 개발용 html 디렉토리
- pages/ : 서비스용 html 디렉토리
- js/ : pages의 html과 매칭되는 JS 디렉토리. script.js는 pages 공통으로 사용되는 함수가 등록된 파일

```bash
***********************************미완성***********************************
***********************************미완성***********************************

│  README.md
│  package.json
│  package-lock.json
│  .prettierrc
│  .gitignore
│  .eslintrc.js
├── node_modules
├── client
│    ├── index.html
│    ├── assets
│    ├── css
│    ├── js
│    ├── lib
│    └── pages
│
├── server
│    └── db
│         └── data.json
├── font
├── html
├── js
│    ├── main.js
│    └── useredit.js
└── pages
     ├── cart.html
     ├── login.html
     ├── productDetail.html
     ├── productList.html
     └── register.html
***********************************미완성***********************************
***********************************미완성***********************************
```

<p align="right"><a href="#top">(Top)</a></p>

## <span id="role">4. 역할 분담</span>

- 하단 이미지와 같이 개인, 공동 작업 페이지로 나누어 진행하였습니다.
- 프로젝트를 진행하며 비교적 중요하다 생각되는 메인페이지, 상품 상세 페이지를 공통으로 진행하였습니다.

<img src="https://user-images.githubusercontent.com/92960723/153541899-7a566b69-f9f6-4e34-846c-112ff6dfa35a.png">

### 🛠 공통 담당

- splash 페이지, 로그인 페이지, 회원가입 페이지

### 🙋‍♀️ 김진우

- 🔗[github/nurimeansworld](https://github.com/nurimeansworld)
- 프로필 페이지, 팔로잉 페이지, 상품 등록 페이지, 상품 수정 페이지

### 🙋🏼‍♀️ 김도현

- 🔗[github/zeroyouth](https://github.com/zeroyouth)
- 홈 피드 페이지, 채팅 페이지

### 🙋🏻‍♀️ 조성찬

- 🔗[github/zeroto99](https://github.com/zeroto99)
- 게시글 작성 페이지, 게시글 상세 페이지, 검색 페이지

### 🙋🏽‍♀️ 채하은

- 🔗[github/greenknight03](https://github.com/greenknight03)
- 모달 페이지, 하단 탭 메뉴 페이지

### 🙋🏽‍♀️ 현지수

- 🔗[github/greenknight03](https://github.com/greenknight03)
- 모달 페이지, 하단 탭 메뉴 페이지

<p align="right"><a href="#top">(Top)</a></p>

## <span id="task">5. 개발 기간 및 작업 관리</span>

- 전체 개발 기간 : 2022-01-03 ~ 2022-02-13

### 작업 관리

- 배포용 HTML과 개발용 HTML을 분리하여 작업하였습니다. ([🔗 개발용 퍼블리싱 리스트](https://nurimeansworld.github.io/strawberry_market/html/index.html))
- 🔗[GitHub Projects](https://github.com/nurimeansworld/strawberry_market/projects/1)와 🔗[Issues](https://github.com/nurimeansworld/strawberry_market/issues)를 사용하여 진행도와 상황을 꾸준히 공유하였습니다.
  <img src="https://">

### 일일 스크럼

주간회의를 진행하여 작업 방향이나 코드 고민에 대해 나누었고 GitHub Wiki를 사용하여 기록하였습니다.

- 🔗[230000 회의록](https://#)

<p align="right"><a href="#top">(Top)</a></p>

## <span id="ui">6. UI</span>

<img src="https://">

<p align="right"><a href="#top">(Top)</a></p>

## <span id="pages">7. 페이지 기능</span>

- 상세 기능 설명은 각 페이지별 링크 연결해두었습니다.

### 1) 홈

이미지, gif 추가

## 2) 게시글

이미지, gif 추가

## 3) 프로필

이미지, gif 추가

## 4) 판매 상품

이미지, gif 추가

## <span id="issues">8. 개발하며 겪은 이슈</span>

### 1) 코딩 컨벤션, 커밋 컨벤션 정하기

#### 내용

- 협업에 앞서 가독성과 개발 방식 통합을 위해 컨벤션 통일의 필요성에 대해 모두 동의하였습니다.
- 첫 협업에 앞서 다양한 컨벤션 사례와 여러 자료를 서로 찾아보며 공유하였습니다.
- 기존 사례를 무조건 따라가기 보다는 우리에게 더 적합하고 효율적인 규칙에 대해서 고민하는 시간을 가졌습니다.

#### 결론

- 우리만의 코딩 컨벤션, 커밋 컨벤션을 만들었습니다.

  <details>
  <summary>코딩 컨벤션</summary>

  #### 코딩 컨벤션

  - prettier 사용 X
  - 들여쓰기 2개
  - `reset.css`는 http://meyerweb.com/eric/tools/css/reset/ 사용
  - z-index는 10단위로
  - class명은 형태 + 의미 + 상태
  - [toast-ko_HTMLCSS](https://ui.toast.com/fe-guide/ko_HTMLCSS), [toast-ko_CODING-CONVENTION](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)을 주로 따름

  </details>

  <details>
  <summary>커밋 컨벤션</summary>

  ### 커밋 컨벤션

  ```
  Add: 새로운 기능 추가
  Fix: 버그 수정(단순 수정 X)
  Docs: 문서 수정
  Edit : 코드 포맷팅, 누락된 세미콜론 추가 등의 코드 변경은 없고 단순 style 수정
  Refactor: 리팩토링
  Test: 테스트 관련 코드 추가 및 삭제 등
  ```

  </details>

### 2) createElement vs innerHTML

#### 내용

- 내용이 들어갑니다.
- 내용이 들어갑니다.
- 내용이 들어갑니다.

#### 결론

- 내용이 들어갑니다.
- 내용이 들어갑니다.

### 3) 이슈를 적습니다.

#### 내용

- 내용이 들어갑니다.
- 내용이 들어갑니다.
- 내용이 들어갑니다.

#### 결론

- 내용이 들어갑니다.
- 내용이 들어갑니다.

### 3) 이슈를 적습니다.

#### 내용

- 내용이 들어갑니다.
- 내용이 들어갑니다.
- 내용이 들어갑니다.

#### 결론

- 내용이 들어갑니다.
- 내용이 들어갑니다.

### 4) 이슈를 적습니다.

- 게시물마다 지정된 post id를 url에 넘겨줘야 되는 상황이 있었습니다. 해당 데이터를 로컬스토리지에 저장해서 쓰는 거보다 쿼리 스트링으로 쓰는 것이 메모리 효율이나 직관성이 높다는 의견이 나왔습니다. 그래서 URLSearchParams.get 메서드를 사용하기로 했습니다.

<p align="right"><a href="#top">(Top)</a></p>
