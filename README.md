# 📈 시계열 차트

- 주어진 데이터를 기반으로 시계열 차트를 구현하는 프로젝트입니다.
- 이는 원티드 프리온보딩 프론트엔드 12차 4주차 과제에 해당합니다.

## 🚀 [배포 사이트](http://time-ser-chart.s3-website.ap-northeast-2.amazonaws.com/)
GitHub Actions를 활용하여 코드를 자동으로 AWS S3로 배포했습니다.

<br /> 

## 📌 프로젝트 실행 방법
1. Clone the repo
```javascript
$ git clone https://github.com/dbwlgp1yng/time-ser-chart.git
```

2. Install npm packages 
```javascript
$ npm install
```

3. Get start
```
$ npm start
```

## ✨ 기술 스택
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/-Recharts-CA4245?style=flat&logo=Recharts&logoColor=white">
</div>
<br />

## 💼 디렉토리 구조
```
src/
┣ 📂 apis/
┃   ┗ 📜 index.ts
┣ 📂 components/
┃   ┣ 📂 common/
┃   ┃   ┣ 📂 header/
┃   ┃   ┗ 📂 layout/
┃   ┣ 📂 Chart/
┃   ┃   ┗ 📜 Chart.tsx
┃   ┣ 📂 CustomDot/
┃   ┃   ┗ 📜 CustomDot.tsx
┃   ┗ 📂 CustomToolTip/
┃       ┗ 📜 CustomToolTip.tsx
┣ 📂 hooks/
┃   ┗ 📜 useChartData.ts
┣ 📂 pages/
┃   ┣ 📂 error/
┃   ┣ 📂 home/
┃   ┗ 📜 index.ts
┣ 📂 router/
┃   ┗ 📜 Router.tsx
┣ 📂 types/
┃   ┗ 📜 chart.ts
┣ 📂 styles/
┃   ┗ 📜 GlobalStyle.tsx
┣ 📜 App.tsx
┗ 📜 Index.tsx
```

## 💡 핵심기능 구현

1. Recharts 라이브러리를 사용해 차트 구현
   > recharts 선택 이유

3. hover 기능 구현

4. query string으로 필터링 구현

<p>버튼 필터링</p>
<img style="center" width="800" src="https://github.com/dbwlgp1yng/time-ser-chart/assets/126330595/5df96355-201b-4e72-81c6-a283c2fce828" alt="filtering btn" />


<p>특정 데이터 클릭시 필터링</p>
<img style="center" width="800" src="https://github.com/dbwlgp1yng/time-ser-chart/assets/126330595/4329b29a-4f58-4b32-ae50-131a32687308" alt="filtering btn" />
