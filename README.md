# 📈 시계열 차트

- 주어진 데이터를 기반으로 시계열 차트를 구현하는 프로젝트입니다.
- 이는 원티드 프리온보딩 프론트엔드 12차 4주차 과제에 해당합니다.

## 🚀 [배포 사이트](http://time-ser-chart.s3-website.ap-northeast-2.amazonaws.com/)
GitHub Actions를 활용하여 코드를 자동으로 AWS S3로 배포하였습니다.

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

<br /> 

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

## ✅ 요구사항
1. [x] 시계열 차트 만들기
    - [x] 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - [x] 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - [x] Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - [x] Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - [x] 차트의 Y축에 대략적인 수치를 표현해주세요
  
2. [x] 호버 기능 구현
    - [x] 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요
  
3. [x] 필터링 기능 구현
    - [x] 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
    - [x] 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - [x] 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - [x] 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

<br /> 

## 💡 핵심기능 구현

<div align='center'>
<img width="800" src="https://github.com/dbwlgp1yng/time-ser-chart/assets/126330595/b3bc95a4-74e4-42ee-b826-6321424d7d11" alt="filtering btn" />
</div>

**1. Recharts 라이브러리를 사용해 차트 구현**
   > Chart Library 선정
   
   > 시각화 기능을 제공하는 라이브러리는 Recharts, Chart.js, D3.js, react-chartjs-2, apexchart 등 다양하게 존재한다. 
   > 해당 라이브러리는 React에서 개발되었기 때문에 React 앱에서의 사용성이 뛰어나다. 또한 빠르고 가벼우며, 데이터 양이 적을 때 빠르게 렌더링 된다는 장점이 있다.
   > 이번 프로젝트에 사용되는 데이터 양은 많지 않다고 판단되어 해당 라이브러리를 사용하기로 하였다. 리액트 프로젝트와의 통합이 잘 되어 있으며,
   > 간단한 API와 커스터마이징 가능한 옵션을 제공해주기 때문에, 공식 문서를 참고하여 쉽게 시작할 수 있었다.

**2. 데이터 가공**
- ```getChart``` 함수를 통해 데이터를 비동기적으로 가져오고, 가져온 데이터를 가공하여 ```chartArray``` 배열에 저장합니다.
- 데이터 객체의 키를 순회하면서 데이터를 새로운 구조로 매핑하고, time 및 date 프로퍼티에는 날짜 및 시간 형식의 문자열을 할당합니다.
- 다른 컴포넌트에서 이러한 데이터에 접근할 수 있도록 가공하여 필요한 정보를 반환합니다. 
```typescript
const useChartData = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);

  useEffect(() => {
    const getChart = async () => {
      const data: IResponse = await getChartData();

      const chartArray: IChart[] = Object.keys(data).map((key) => {
        return {
          ...data[key],
          time: new Date(key).toLocaleTimeString(),
          date: new Date(key).toLocaleDateString()
        };
      });
      setChartData(chartArray);
    };
    getChart();
  }, []);
  
  const districtName = [...new Set(chartData.map((data) => (data.id)))].sort(); // 고유한 id 값 추출 후 정렬
  const uniqueDate = [...new Set(chartData.map((item) => (item.date)))];        // 고유한 date 값 추출

  return { data: chartData, districtName, uniqueDate };
};
```

**3. hover 기능 구현**
- 사용자에게 데이터 포인트에 대한 정보를 제공하는 커스텀 툴팁을 생성하였습니다.
- 툴팁이 활성화되었는지 여부(active)와 툴팁에 표시될 데이터를 포함하는 배열(payload)을 가져옵니다.
- active가 true이고 payload 배열이 존재하며 비어 있지 않은 경우, 즉 툴팁이 활성화되고 데이터가 있는 경우, 커스텀 툴팁을 렌더링합니다.

```typescript
const CustomToolTip: React.FC<CustomToolTipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) 
    return (
      <StyledToolTip>
        <h4 className='tooltip-id'>🚩 {payload[0].payload.id}</h4>
        <div className='tooltip-value'>
          <p><span className='tooltip-value-area'>value_area : </span>{payload[0].payload.value_area}</p>
          <p><span className='tooltip-value-bar'>value_bar : </span>{payload[0].payload.value_bar}</p>
        </div>
      </StyledToolTip>
    );

  return null;
};
```

**4. query string으로 필터링 구현**
- url의 쿼리 매개변수를 변경할 수 있는 useSearchParams 훅을 사용하여 필터링을 구현하였습니다. 새로고침하더라도 상태를 유지하기 때문에 private한 값이 아니라면 query string으로 상태 관리하는 것이 유용해 보입니다. 필터링된 데이터를 쉽게 공유할 수 있으며, 브라우저 히스토리를 관리하여 뒤로 & 앞으로 가기 기능도 지원됩니다. 
- ```handleClickFiltering``` 함수는 필터 버튼이 클릭되면 호출됩니다. 이 함수는 선택한 지역의 "id" 값을 URL의 쿼리 매개변수로 설정합니다. 버튼을 클릭한 경우에만 ```setSearchParams```를 호출하여 쿼리 매개변수를 변경합니다. 필터링된 결과는 URL의 "id" 쿼리 매개변수로 설정되어 해당 지역의 차트를 렌더링하게 됩니다.
```ts
const handleClickFiltering = (clickedId: string) => {
  if (clickedId) setSearchParams({ id: clickedId });
};
```

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
