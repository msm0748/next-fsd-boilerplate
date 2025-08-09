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

## 🧩 Plop 템플릿 사용법 (`/plop-templates`)

이 보일러플레이트는 Plop을 이용해 FSD 구조의 코드를 자동 생성합니다. `package.json`의 스크립트로 Plop을 실행할 수 있습니다.

### 사전 준비

- 의존성 설치가 완료되어 있어야 합니다: `npm install`

### 실행 방법

1. 인터랙티브 실행

```bash
npm run fsd
```

2. 특정 생성기 바로 실행

````bash
# 위젯 생성기 실행 (이름은 프롬프트에서 입력)
npm run fsd widget

`package.json`에 정의된 스크립트:

```json
{
  "scripts": {
    "fsd": "plop"
  }
}
````

### 제공되는 생성기

- **widget**: 독립적인 UI 블록 생성

  - **생성 경로**: `src/widgets/{{kebabCase name}}`
  - **템플릿 베이스**: `plop-templates/widget`
  - **예시 결과** (`name = main-header`):

    ```
    src/widgets/main-header/
    ├── index.ts
    └── ui/
        └── main-header.tsx
    ```

- **feature**: 비즈니스 로직 단위 생성

  - **생성 경로**: `src/features/{{kebabCase name}}`
  - **템플릿 베이스**: `plop-templates/feature`
  - **예시 결과** (`name = create-post`):

    ```
    src/features/create-post/
    ├── index.ts
    ├── api/
    │   └── index.ts
    ├── model/
    │   ├── use-create-post.ts
    │   └── create-post.types.ts
    └── ui/
        └── create-post-form.tsx
    ```

- **entity**: 비즈니스 모델 단위 생성

  - **생성 경로**: `src/entities/{{kebabCase name}}`
  - **템플릿 베이스**: `plop-templates/entity`
  - **예시 결과** (`name = user`):

    ```
    src/entities/user/
    ├── index.ts
    ├── api/
    │   └── index.ts
    ├── model/
    │   ├── user.types.ts
    │   └── user.queries.ts
    └── ui/
        └── user-card.tsx
    ```

### 네이밍 규칙

- 입력한 `name`은 내부적으로 `kebabCase`가 적용됩니다. 예: `CreatePost` → `create-post`
- 템플릿에서는 보조 헬퍼 `lastOfKebab`이 사용 가능합니다. 예: `"create-post-form" → "form"`

### 템플릿 수정/추가

- 템플릿 파일은 모두 `/plop-templates` 하위에 있습니다. 필요에 따라 파일을 수정하면 생성 결과가 바뀝니다.
  - `plop-templates/widget/...`
  - `plop-templates/feature/...`
  - `plop-templates/entity/...`
- 새로운 생성기를 추가하려면 `plopfile.js`에 `plop.setGenerator(...)`를 추가하세요.
