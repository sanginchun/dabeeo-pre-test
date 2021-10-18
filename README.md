## 실행 방법

```
npm i

npm start
```

### 컴포넌트 구조

```jsx
<App>
  <MapView>
    <MarkerResetButton />
    <MapContainer>
      <MarkerLayer />
    </MapContainer>
  </MapView>
</App>
```

- App: 자식 컴포넌트들의 동작 제어
- MapView: 1024 x 768 크기로 지도를 표시
- MapContainer: 지도(이미지) 자체를 담음. \*MapView를 기준으로 위치가 지정됨 (position: absolute)
- MarkerLayer: 마커들을 위치대로 지도에 표시

### hooks

App 컴포넌트가 제어하는 기능이 많아짐에 따라 로직들을 hook으로 분리해보았습니다.

- useMap: 지도(이미지) 위치 제어
- useDrag: 지도 드래그 기능
- useMarkers: 마커 추가, 리셋 기능

### 그 외

- types: 프로젝트 전반에 걸쳐 사용되는 타입들
- utils
  - positions: 위치 계산 함수들
