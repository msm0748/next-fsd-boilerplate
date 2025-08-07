# 🏗️ FSD Architecture Project

Feature-Sliced Design(FSD) 아키텍처를 적용한 boilerplate 입니다.

## 📦 기술 스택

- **프레임워크**: Next.js 15.4.6
- **언어**: TypeScript
- **UI 라이브러리**: Chakra UI v3
- **상태 관리**: TanStack Query (React Query) v5
- **HTTP 클라이언트**: ofetch
- **아이콘**: React Icons

## 🚀 시작하기

### 1. 의존성 설치

프로젝트 의존성을 설치합니다:

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
# 또는
bun install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📁 FSD 아키텍처 구조

이 프로젝트는 Feature-Sliced Design 아키텍처를 따릅니다:

```
src/
├── app/           # 애플리케이션 레이어 (라우팅, 프로바이더)
├── widgets/       # 위젯 레이어 (독립적인 UI 블록)
├── features/      # 기능 레이어 (비즈니스 로직)
├── entities/      # 엔티티 레이어 (비즈니스 모델)
└── shared/        # 공유 레이어 (재사용 가능한 코드)
    ├── api/       # API 관련 코드
    ├── lib/       # 라이브러리 설정
    ├── types/     # 타입 정의
    ├── ui/        # 공통 UI 컴포넌트
    └── utils/     # 유틸리티 함수
```

### FSD 폴더 생성

만약 FSD 폴더들이 `src` 디렉토리에 없다면, 아래 명령어로 생성할 수 있습니다:

```bash
mkdir -p src/{widgets,features,entities,shared}
```

## 🎨 주요 기능

- ✅ Chakra UI v3를 사용한 모던한 UI
- ✅ TanStack Query를 통한 서버 상태 관리
- ✅ TypeScript 완전 지원
- ✅ ESLint 설정 완료
  - FSD 구조에 따라 하위 계층이 상위 계층을 의존하지 않도록 제한하는 규칙을 적용
- ✅ FSD 아키텍처 적용

## 📚 FSD 아키텍처에 대해 더 알아보기

- [Feature-Sliced Design 공식 문서](https://feature-sliced.design/)
- [FSD 아키텍처 가이드](https://feature-sliced.design/docs/get-started/overview)
