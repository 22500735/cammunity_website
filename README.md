# Cammunity Website

일본과 한국을 연결하는 혁신적인 회사 Cammunity의 공식 웹사이트입니다.

## 🚀 프로젝트 소개

Cammunity는 일본과 한국의 문화적 차이를 이해하고, 이를 바탕으로 혁신적인 디지털 솔루션을 제공하는 회사입니다. 이 웹사이트는 회사 소개, 팀원 소개, 프로젝트 소개, 그리고 메인 프로젝트인 캐뮤니티 플랫폼을 상세히 소개합니다.

## ✨ 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- **다국어 지원**: 한국어와 일본어를 동시에 지원
- **애니메이션**: Framer Motion을 활용한 부드러운 애니메이션 효과
- **모던 UI/UX**: Tailwind CSS를 활용한 현대적이고 아름다운 디자인
- **탭 기반 네비게이션**: 프로젝트 상세 정보를 체계적으로 구성

## 🛠️ 기술 스택

### Frontend
- **React 18**: 최신 React 기능을 활용한 컴포넌트 기반 개발
- **Vite**: 빠른 개발 환경과 빌드 도구
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion**: 부드러운 애니메이션과 전환 효과

### 라우팅
- **React Router DOM**: SPA 라우팅 구현

### 아이콘
- **Lucide React**: 모던하고 일관된 아이콘 세트

## 📁 프로젝트 구조

```
cammunity_website/
├── public/                 # 정적 파일
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Navbar.jsx     # 네비게이션 바
│   │   ├── Footer.jsx     # 푸터
│   │   └── sections/      # 페이지 섹션 컴포넌트
│   │       ├── HeroSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── StatsSection.jsx
│   │       └── CTASection.jsx
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Home.jsx       # 홈페이지
│   │   ├── About.jsx      # 회사 소개
│   │   ├── Team.jsx       # 팀원 소개
│   │   ├── Projects.jsx   # 프로젝트 소개
│   │   └── CammunityProject.jsx  # 캐뮤니티 프로젝트 상세
│   ├── App.jsx            # 메인 앱 컴포넌트
│   ├── main.jsx           # 앱 진입점
│   └── index.css          # 전역 스타일
├── package.json           # 프로젝트 의존성 및 스크립트
├── vite.config.js         # Vite 설정
├── tailwind.config.js     # Tailwind CSS 설정
├── postcss.config.js      # PostCSS 설정
└── index.html             # HTML 템플릿
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: rgb(106, 220, 164) - 밝은 그린
- **Secondary**: rgb(53, 41, 226) - 딥 블루
- **Accent**: rgb(255, 255, 255) - 화이트
- **Variants**: 각 컬러의 밝고 어두운 변형

### 타이포그래피
- **한국어**: Noto Sans KR
- **일본어**: IBM Plex Sans JP
- **영어**: IBM Plex Sans JP

### 컴포넌트
- **카드**: 그림자와 호버 효과가 있는 컨테이너
- **버튼**: Primary, Secondary, Outline 스타일
- **섹션**: 일관된 패딩과 마진을 가진 페이지 섹션

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
```bash
git clone <repository-url>
cd cammunity_website
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 배포

1. **프로덕션 빌드**
```bash
npm run build
# 또는
yarn build
```

2. **빌드 결과 미리보기**
```bash
npm run preview
# 또는
yarn preview
```

## 📱 페이지 구성

### 1. 홈페이지 (/)
- 히어로 섹션
- 주요 특징 소개
- 통계 정보
- 행동 유도 섹션

### 2. 회사 소개 (/about)
- 회사 개요
- 핵심 가치
- 회사 연혁
- 미래 비전

### 3. 팀원 소개 (/team)
- 팀 통계
- 부서별 필터링
- 팀원 상세 정보 모달
- 채용 정보

### 4. 프로젝트 소개 (/projects)
- 프로젝트 카테고리별 필터링
- 프로젝트 상세 정보 모달
- 기술 스택 및 성과

### 5. 캐뮤니티 프로젝트 (/cammunity)
- 프로젝트 개요
- 주요 기능 (탭 기반)
- 기술 스택
- 개발 로드맵
- 개발 팀

## 🔧 개발 가이드

### 컴포넌트 생성
새로운 컴포넌트를 생성할 때는 다음 구조를 따릅니다:

```jsx
import React from 'react'
import { motion } from 'framer-motion'

const ComponentName = () => {
  return (
    <div className="component-container">
      {/* 컴포넌트 내용 */}
    </div>
  )
}

export default ComponentName
```

### 스타일링
- Tailwind CSS 클래스를 우선적으로 사용
- 커스텀 CSS는 `src/index.css`에 추가
- 컴포넌트별 스타일은 해당 컴포넌트 파일에 인라인으로 작성

### 애니메이션
- Framer Motion을 활용한 부드러운 애니메이션
- `motion.div`를 사용하여 애니메이션 효과 적용
- `initial`, `animate`, `transition` props 활용

## 🌐 다국어 지원

웹사이트는 한국어와 일본어를 동시에 지원합니다:
- 모든 텍스트는 한국어와 일본어 버전을 포함
- 일본어는 작은 글씨로 표시하여 가독성 향상
- 문화적 맥락을 고려한 번역

## 📊 성능 최적화

- **코드 스플리팅**: React Router를 통한 라우트별 코드 분할
- **이미지 최적화**: 적절한 이미지 크기와 포맷 사용
- **애니메이션 최적화**: Framer Motion의 성능 최적화 기능 활용
- **CSS 최적화**: Tailwind CSS의 JIT 컴파일러 활용

## 🚀 배포

### Vercel (권장)
1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### Netlify
1. Netlify 계정 생성
2. GitHub 저장소 연결
3. 빌드 명령어 설정: `npm run build`
4. 배포 디렉토리 설정: `dist`

### 기타 정적 호스팅
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 다음 연락처로 문의해주세요:

- **이메일**: contact@cammunity.com
- **웹사이트**: https://cammunity.com
- **GitHub**: https://github.com/cammunity

## 🙏 감사의 말

이 프로젝트를 위해 다음과 같은 오픈소스 프로젝트들을 활용했습니다:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

**Cammunity** - 일본과 한국을 연결하는 혁신적인 커뮤니티 플랫폼
