# 아날로그 시계

아래는 아날로그 시계 구현에 대한 정보입니다.

## 실행방법

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 디렉토리 구조

- src
  - app
    - css
      - folder storing all css files. It is organized with css modules.
    - layout
      - file added from Next.js that contains the site's meta data.
    - page
      - base component renders clock component wrapped with redux Provider.
    - clockFace
      - contains the static elements for the clock.
    - clock
      - main clock component that contains clockFace, clockHands, and Tooltip. It also updates mouse cursor position on hover.
    - clockHands
      - contains secondHand, minuteHand, and hourHand rotating based on time.
    - tooltip
      - shows tooltip with current time. It is visible only when a user hover over clock.
    - useClock
      - custom hook that returns clock state from redux. It updates current time every second.
  - redux
    - timeSlice
    - store

## 기능 구현

1. 현재 시간을 시침, 분침, 초침으로 표시

2. 시계 마우스 오버시 현재시간을 tooltip으로 표시
