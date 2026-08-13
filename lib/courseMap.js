/**
 * courseMap — 강의 전체 커리큘럼 맵 데이터.
 * 문구는 초안이므로 강사가 자유롭게 수정하면 된다.
 */
export const courseMap = [
  {
    id: 1,
    title: "개발 환경 & AI 기초",
    topics: [
      {
        id: "terminal",
        label: "Terminal",
        desc: "명령어로 컴퓨터에게 직접 지시를 내리는 창입니다. 오늘 모든 실습은 여기서 시작합니다. 윈도우엔 여러 종류의 터미널이 있어요.",
        children: [
          {
            label: "CMD",
            desc: "윈도우 기본 명령 프롬프트. 가장 오래되고 기본적인 터미널입니다.",
          },
          {
            label: "PowerShell",
            desc: "윈도우 전용 터미널. CMD보다 기능이 많아 이 수업에서는 주로 이걸 사용합니다.",
          },
          {
            label: "Git Bash",
            desc: "윈도우에서도 Mac/Linux 명령어를 그대로 쓸 수 있게 해주는 터미널. Git 사용 시 표준입니다.",
          },
        ],
      },
      {
        id: "cli",
        label: "CLI vs GUI",
        desc: "명령어를 입력해서 컴퓨터를 조작하는 방식입니다. 마우스로 클릭하는 GUI와 대비됩니다.",
        children: [
          {
            label: "CLI",
            desc: "명령어를 입력해서 컴퓨터를 조작하는 방식입니다. 빠르고 정확하며, 자동화나 반복 작업에 강합니다.",
          },
          {
            label: "GUI",
            desc: "마우스로 아이콘·버튼을 클릭해서 컴퓨터를 조작하는 방식입니다. 직관적이라 처음 배우기 쉽습니다.",
          },
          {
            label: "왜 배우나요?",
            desc: "자동화, 원격 서버 작업, 대부분의 AI 개발 도구가 CLI 기반이라 개발자에게 꼭 필요한 능력입니다.",
          },
        ],
      },
      {
        id: "language",
        label: "Language",
        desc: "컴퓨터에게 명령을 내리기 위해 만들어진 다양한 프로그래밍 언어가 있습니다.",
        children: [
          { label: "Assembly (1949)", desc: "기계어에 가장 가까운 저수준 언어입니다. 컴퓨터 하드웨어를 직접 다루는 초창기 프로그래밍 방식입니다." },
          { label: "Fortran (1957)", desc: "IBM이 만든, 세계 최초의 고급 프로그래밍 언어 중 하나입니다. 과학·공학 계산용으로 쓰였습니다." },
          { label: "COBOL (1959)", desc: "은행·금융 업무 전산화에 널리 쓰인 언어입니다. 지금도 일부 금융 시스템에 남아 있습니다." },
          { label: "BASIC (1964)", desc: "80~90년대 학교 전산 수업에서 가장 많이 가르쳤던 입문용 언어입니다." },
          { label: "Pascal (1970)", desc: "대학 전산과 초창기 필수 과목이었던, 구조적 프로그래밍을 가르치기 위한 언어입니다." },
          { label: "C (1972)", desc: "하드웨어를 직접 다룰 수 있는 저수준 언어로, 다른 여러 언어의 뿌리가 됐습니다." },
          {
            label: "SQL (1974)",
            desc: "데이터베이스에 데이터를 조회·저장·수정할 때 쓰는 쿼리 언어입니다.",
            note: "Session 3 Supabase 실습에서 자세히 다룹니다.",
          },
          { label: "Python (1991)", desc: "문법이 쉬워 입문자와 AI·데이터 분석 분야에서 널리 쓰이는 언어입니다." },
          { label: "R (1993)", desc: "통계 계산과 데이터 분석·시각화에 특화된 언어입니다. 통계학·연구 분야에서 널리 쓰입니다." },
          { label: "Java (1995)", desc: "대규모 시스템과 안드로이드 앱 개발에 많이 쓰이는, 안정적이고 오래된 언어입니다." },
          { label: "JavaScript (1995)", desc: "웹페이지에 동작을 부여하는 언어로, 웹 프론트엔드의 필수 언어입니다." },
        ],
      },
      {
        id: "python",
        label: "Python",
        desc: "AI·자동화 실습에 쓰는 프로그래밍 언어. 문법이 쉬워 입문자에게 적합합니다.",
        children: [
          { label: "탄생 배경", desc: "네덜란드의 귀도 반 로섬이 1989년 크리스마스 연휴에 취미로 만들기 시작해 1991년 공개했습니다. 어렵고 복잡한 코드 대신, 사람이 읽기 쉬운 문법을 목표로 설계했습니다." },
          { label: "pip", desc: "다른 사람이 만든 코드 뭉치(패키지)를 설치해주는 도구입니다. 'Pip Installs Packages'의 재귀적 약자입니다." },
          { label: "가상환경", desc: "프로젝트마다 독립된 파이썬 공간을 만들어 패키지 충돌을 막습니다." },
          { label: "왜 AI 시대에 각광받나", desc: "문법이 간단해 코드를 빨리 짤 수 있고, PyTorch·TensorFlow 같은 AI·머신러닝 라이브러리 대부분이 Python으로 만들어져 있습니다. AI가 생성하는 코드로도 가장 많이 쓰입니다." },
        ],
      },
      {
        id: "ide",
        label: "IDE",
        desc: "코드를 작성·실행·디버깅하는 통합 개발 환경. 목적에 따라 여러 종류를 골라 씁니다.",
        children: [
          { label: "IDLE", desc: "파이썬 설치 시 기본으로 함께 설치되는 가장 단순한 코드 편집기입니다." },
          { label: "주피터 노트북", desc: "코드와 실행 결과, 설명을 한 화면에서 볼 수 있는 노트북 형태의 개발 환경. 데이터 분석·AI 실습에 많이 씁니다." },
          { label: "구글 Colab", desc: "구글 클라우드에서 무료로 실행되는 주피터 노트북. 설치 없이 브라우저에서 바로 코드를 실행할 수 있습니다." },
          { label: "VS Code", desc: "탐색기·에디터·터미널이 한 화면에 모인 범용 코드 편집기. 확장 프로그램으로 기능을 자유롭게 확장할 수 있습니다." },
        ],
      },
      {
        id: "chatgpt",
        label: "ChatGPT",
        desc: "ChatGPT 같은 생성형 AI가 나오기까지, 어떤 기술이 쌓여왔는지 순서대로 살펴봅니다.",
        children: [
          { label: "머신러닝", desc: "데이터를 통해 규칙을 스스로 학습하는 프로그래밍 방식입니다. 사람이 규칙을 일일이 코딩하지 않아도 됩니다." },
          { label: "딥러닝", desc: "인공신경망을 여러 층으로 쌓아 학습하는 머신러닝의 한 갈래로, 이미지·음성·언어 인식 성능을 크게 끌어올렸습니다." },
          { label: "CNN", desc: "이미지의 패턴(선, 모양 등)을 인식하는 데 특화된 딥러닝 구조입니다. 사진 분류, 얼굴 인식 등에 쓰입니다." },
          { label: "RNN", desc: "순서가 있는 데이터(문장, 시계열)를 처리하기 위해 이전 정보를 기억하며 학습하는 구조입니다." },
          { label: "언어모델", desc: "다음에 올 단어를 확률적으로 예측하도록 학습된 모델입니다. 문장을 생성하는 능력의 기반이 됩니다." },
          { label: "트랜스포머 이전 언어모델", desc: "N-gram 모델(통계 기반), Word2Vec·GloVe(단어 임베딩), ELMo(RNN/LSTM 기반)." },
          { label: "구글 트랜스포머", desc: "2017년 구글이 발표한 구조로, 문장 전체를 한 번에 보고 관계를 파악합니다. 오늘날 모든 생성형 AI의 근간입니다." },
          { label: "Foundation Model", desc: "대량의 데이터로 미리 학습된 범용 모델입니다. 이걸 바탕으로 ChatGPT 같은 다양한 AI 서비스가 만들어집니다." },
        ],
      },
      {
        id: "front-backend",
        label: "Front/Backend",
        desc: "웹 서비스는 사용자가 보는 부분과, 뒤에서 데이터를 처리하는 부분으로 나뉩니다.",
        children: [
          { label: "Frontend", desc: "사용자가 직접 보고 클릭하는 화면(UI)을 만드는 영역입니다. HTML/CSS/JavaScript가 대표적입니다." },
          { label: "Backend", desc: "데이터 저장, 로그인 처리 등 화면 뒤에서 로직을 처리하는 영역입니다. 서버와 데이터베이스가 여기 속합니다." },
          { label: "API", desc: "프론트엔드와 백엔드가 데이터를 주고받는 약속된 통로입니다." },
          { label: "Full Stack", desc: "프론트엔드와 백엔드를 모두 다룰 줄 아는 개발자·개발 방식을 가리키는 업계 용어입니다." },
        ],
      },
      {
        id: "ai-ecosystem",
        label: "AI Ecosystem",
        desc: "시중의 AI 제품은 크게 5가지 유형으로 나눠볼 수 있습니다.",
        children: [
          {
            label: "① LLM 보유 업체",
            desc: "직접 대규모 언어모델을 만들어 API로 제공하는 회사입니다. 예: OpenAI(GPT), Anthropic(Claude), Google(Gemini), Meta(Llama).",
          },
          {
            label: "② LLM 활용 프로그램",
            desc: "다른 회사의 LLM을 가져와 특정 서비스로 만든 프로그램입니다. 예: 뤼튼, Perplexity, Notion AI, 감마(Gamma).",
          },
          {
            label: "③ 코딩 에이전트",
            desc: "코드 작성·수정·실행을 대신 해주는 AI 도구입니다. 예: Cursor, 구글 Antigravity, Claude Code.",
          },
          {
            label: "④ 에이전트 특화 프로그램",
            desc: "목표만 주면 스스로 계획을 세우고 여러 단계를 실행하는 자율형 AI입니다. 예: Manus, OpenAI Operator, AutoGPT.",
          },
          {
            label: "⑤ 자동화 툴",
            desc: "여러 앱을 연결해 반복 업무를 자동으로 처리해주는 도구입니다. 예: Zapier, Make, n8n.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "웹앱 제작 & 간단 수동 배포",
    topics: [
      {
        id: "git-vs-github",
        label: "Git vs GitHub",
        desc: "이름은 비슷하지만 역할이 다른 두 도구입니다.",
        children: [
          { label: "Git", desc: "내 컴퓨터에서 코드 변경 이력을 기록·관리하는 버전 관리 프로그램입니다." },
          { label: "GitHub", desc: "Git으로 관리한 코드를 온라인에 올려 백업하고 다른 사람과 공유하는 웹 서비스입니다." },
          { label: "Repository", desc: "코드와 변경 이력이 저장되는 공간입니다. 줄여서 '레포(repo)'라고 부르며, 로컬 저장소와 GitHub의 원격 저장소로 나뉩니다." },
          { label: "git clone", desc: "GitHub 같은 원격 저장소의 코드를 내 컴퓨터로 통째로 복제해오는 명령어입니다." },
        ],
      },
      {
        id: "claude-features",
        label: "Claude 3가지 활용법",
        desc: "본격적으로 웹앱을 만들기 전에, 클로드가 할 수 있는 일을 먼저 살펴봅니다.",
        children: [
          { label: "챗팅 방식", desc: "대화창에서 질문하고 답을 받는 가장 기본적인 사용 방식입니다. 글쓰기, 요약, 브레인스토밍 등에 씁니다." },
          { label: "Co-work", desc: "문서나 기획안을 클로드와 함께 다듬어가며 만드는 협업 방식입니다. 결과물을 주고받으며 완성도를 높입니다." },
          { label: "Code", desc: "클로드 코드로 실제 코드를 작성·실행·수정하는 방식입니다. 터미널이나 IDE 안에서 개발자와 함께 작업합니다." },
        ],
      },
      {
        id: "claude-code-usage",
        label: "클로드 코드 사용방법 3가지",
        desc: "클로드 코드를 실제로 쓰는 세 가지 방식입니다.",
        children: [
          { label: "PC 설치형으로 사용", desc: "컴퓨터에 앱을 설치해서 GUI 화면으로 클로드 코드를 사용하는 방식입니다." },
          { label: "터미널에서 사용 (CLI)", desc: "터미널에서 claude 명령어로 실행해서 코드 작성·수정을 대화형으로 요청합니다." },
          { label: "IDE 확장", desc: "VS Code 같은 에디터 안에 통합돼서, 코드를 보면서 바로 요청하고 적용합니다." },
        ],
      },
      {
        id: "vanilla-webapp",
        label: "Vanilla Webapp 제작",
        desc: "프레임워크 없이 순수 HTML/CSS/JavaScript만으로 나만의 웹앱을 만듭니다.",
        children: [
          { label: "HTML", desc: "웹페이지의 뼈대(구조)를 만드는 마크업 언어입니다." },
          { label: "CSS", desc: "색상, 레이아웃, 폰트 등 디자인을 입히는 스타일 언어입니다." },
          { label: "JavaScript", desc: "버튼 클릭, 데이터 처리 등 웹페이지에 동작을 부여하는 프로그래밍 언어입니다." },
          {
            label: "Head와 Body",
            desc: "HTML 문서는 크게 head와 body로 나뉩니다. head에는 눈에 보이지 않는 설정(제목, 메타 정보 등)이 들어가고, body에는 화면에 실제로 보이는 내용이 들어갑니다.",
          },
          {
            label: "Body의 구성",
            desc: "body 안은 보통 header(상단 영역), hero(첫 화면을 채우는 큰 배너), section(본문 콘텐츠 구역들), footer(하단 영역) 등으로 구성됩니다.",
          },
        ],
      },
      {
        id: "deploy",
        label: "Deploy",
        desc: "만든 웹앱을 인터넷에 올려 누구나 접속할 수 있게 만드는 과정입니다. 대표적인 무료 배포 툴들을 살펴봅니다.",
        children: [
          { label: "GitHub Pages", desc: "GitHub 저장소에 올린 파일을 그대로 무료 웹사이트로 공개해주는 기능입니다. 순수 정적 파일(HTML/CSS/JS)에 적합합니다." },
          { label: "Netlify", desc: "파일을 드래그 앤 드롭하거나 Git 저장소를 연결해 무료로 배포할 수 있는 서비스입니다. 설정 없이 가장 쉽게 시작할 수 있지만, 무료 플랜은 한 달 빌드 시간이 300분으로 제한됩니다." },
          { label: "Vercel", desc: "React 같은 프레임워크 프로젝트 배포에 특화된 서비스로, Git과 연동하면 자동 재배포됩니다. Next.js와 궁합이 특히 좋습니다." },
          { label: "Cloudflare Pages", desc: "Cloudflare의 빠른 글로벌 네트워크를 이용해 정적 사이트를 무료로 배포하는 서비스입니다. 트래픽이 많아져도 속도가 안정적입니다." },
        ],
      },
      {
        id: "netlify-drop",
        label: "Netlify Drop(간단 수동 배포)",
        desc: "만든 웹앱 파일을 드래그 앤 드롭만으로 인터넷에 무료 배포합니다.",
        children: [
          { label: "정적 사이트 호스팅", desc: "서버 코드 없이 HTML/CSS/JS 파일만으로 동작하는 웹사이트를 올려두는 방식입니다." },
          { label: "배포 URL", desc: "업로드하면 즉시 전 세계 어디서나 접속 가능한 주소가 생성됩니다." },
          { label: "PWA", desc: "홈 화면에 추가해서 앱처럼 쓸 수 있게 해주는 웹 기술입니다." },
          { label: "netlify.app 도메인", desc: "별도 도메인을 구매하기 전에는, 배포하면 '나의프로젝트.netlify.app' 형태의 Netlify 도메인 주소가 자동으로 발급됩니다." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "DB 연동 & 자동 배포 프로세스",
    topics: [
      {
        id: "database",
        label: "Database",
        desc: "데이터를 체계적으로 저장하고 관리하는 공간입니다. 웹앱의 회원 정보, 게시글 등이 여기 저장됩니다.",
        children: [
          { label: "테이블", desc: "엑셀 시트처럼 행과 열로 이루어진 데이터 저장 단위입니다." },
          { label: "스키마", desc: "테이블에 어떤 열이 있고, 각 열에 어떤 종류의 데이터가 들어가는지 미리 정해둔 설계도입니다." },
          { label: "RDBMS", desc: "테이블 간의 관계로 데이터를 관리하는 데이터베이스 방식입니다." },
          { label: "대표 RDBMS 프로그램", desc: "Oracle Database, MySQL, MariaDB, PostgreSQL 등이 있습니다. Supabase는 이 중 PostgreSQL을 씁니다." },
        ],
      },
      {
        id: "sql",
        label: "SQL",
        desc: "데이터베이스에서 데이터를 저장·조회·수정·삭제할 때 쓰는 쿼리 언어입니다. Supabase도 내부적으로 SQL을 씁니다.",
        children: [
          { label: "SELECT", desc: "테이블에서 원하는 데이터를 조회하는 명령어입니다." },
          { label: "INSERT", desc: "테이블에 새로운 데이터(행)를 추가하는 명령어입니다." },
          { label: "UPDATE", desc: "이미 있는 데이터를 원하는 값으로 수정하는 명령어입니다." },
          { label: "DELETE", desc: "테이블에서 데이터를 삭제하는 명령어입니다." },
        ],
      },
      {
        id: "supabase",
        label: "Supabase",
        desc: "오픈소스 Firebase 대안. 데이터베이스·인증·실시간 기능을 API로 손쉽게 씁니다.",
        children: [
          { label: "싱가포르 다국적 기업", desc: "Supabase는 싱가포르에 본사를 둔 다국적 스타트업이 만들고 운영하는 서비스입니다." },
          { label: "회원 가입 및 조직 설정", desc: "Supabase 홈페이지에서 회원 가입 후, 여러 프로젝트를 묶어 관리하는 조직(Organization)을 만듭니다." },
          { label: "프로젝트 생성", desc: "조직 안에 새 프로젝트를 만들면, 그 프로젝트마다 독립된 데이터베이스와 API가 발급됩니다." },
          { label: "데이터베이스", desc: "회원 정보, 게시글 같은 데이터를 저장하고 관리하는 공간입니다." },
          { label: "환경변수", desc: "내 웹앱이 Supabase 프로젝트와 통신하려면 프로젝트 URL과 API 키 같은 값을 환경변수로 등록해야 합니다." },
          { label: "Auth", desc: "로그인·회원가입 같은 사용자 인증 기능을 자동으로 제공합니다." },
          { label: "Realtime", desc: "데이터가 바뀌면 화면에 즉시 반영되는 실시간 동기화 기능입니다." },
          { label: "Firebase란?", desc: "구글(Google)이 만든 백엔드 서비스입니다. Supabase와 같은 카테고리(BaaS)라 자주 비교되지만, 이름만 비슷할 뿐 서로 다른 회사가 만든 별개의 서비스입니다." },
          { label: "Supabase vs Firebase ①", desc: "데이터 모델 — Supabase는 SQL(관계형) DB, Firebase는 NoSQL(문서형) DB를 씁니다." },
          { label: "Supabase vs Firebase ②", desc: "보안 — Supabase는 DB 안에서 행 단위로 접근을 제한하는 RLS 기능을 쓰고, Firebase는 자체 보안 규칙(Security Rules) 문법을 씁니다." },
          { label: "Supabase vs Firebase ③", desc: "호스팅 — Supabase는 클라우드뿐 아니라 직접 서버에 설치해서도 운영할 수 있고, Firebase는 구글 클라우드 전용입니다." },
          { label: "Supabase vs Firebase ④", desc: "생태계 — Supabase는 오픈소스라 다른 서버로도 자유롭게 옮길 수 있고, Firebase는 구글 플랫폼 안에서만 써야 합니다." },
        ],
      },
      {
        id: "nodejs",
        label: "Node.js",
        desc: "브라우저 밖에서 자바스크립트를 실행하는 런타임입니다. React 개발 도구(Vite, npm 등)를 돌리는 데 필수입니다.",
        children: [
          { label: "npm", desc: "Node.js와 함께 설치되는 패키지 관리자입니다. React, Vite 같은 라이브러리를 설치할 때 씁니다." },
          { label: "package.json", desc: "프로젝트에 어떤 패키지가 필요한지, 어떤 명령어로 실행하는지 정리해둔 설정 파일입니다." },
          { label: "npm install", desc: "package.json에 적힌 패키지들을 전부 내려받아 node_modules 폴더에 설치하는 명령어입니다. 새 프로젝트를 받으면 가장 먼저 실행합니다." },
          { label: "npm run dev", desc: "개발용 서버를 켜는 명령어입니다. 실행하면 터미널에 나오는 주소(예: localhost:5173)로 접속해 만들고 있는 화면을 바로 확인할 수 있습니다." },
        ],
      },
      {
        id: "dashboard",
        label: "Dashboard (React/Vite)",
        desc: "컴포넌트 기반 라이브러리 React와 빠른 빌드 도구 Vite로 진짜 웹앱을 만듭니다.",
        children: [
          { label: "React", desc: "재사용 가능한 컴포넌트로 UI를 조립하는 자바스크립트 라이브러리입니다." },
          { label: "Vite", desc: "개발 서버 실행과 빌드가 매우 빠른 최신 프론트엔드 빌드 도구입니다." },
          { label: "컴포넌트", desc: "버튼, 카드처럼 재사용 가능한 UI 조각 단위입니다." },
        ],
      },
      {
        id: "git-commit",
        label: "Git Commit",
        desc: "코드가 바뀐 시점을 기록하고 되돌릴 수 있게 관리하는 버전 관리 습관입니다.",
        children: [
          { label: "add / commit", desc: "변경사항을 담고(add) 기록을 남기는(commit), 커밋의 기본 흐름입니다." },
          { label: "커밋 메시지", desc: "무엇을, 왜 바꿨는지 남기는 짧은 기록입니다. 나중의 나와 동료를 위한 것입니다." },
          { label: "git add .", desc: "바뀐 파일들을 커밋 대상으로 담는 명령어입니다. 마침표(.)는 '현재 폴더의 모든 변경사항'을 뜻합니다." },
          { label: 'git commit -m "fix: 변경 내용"', desc: "담아둔 변경사항을 하나의 기록으로 남기는 명령어입니다. -m 뒤에 무엇을, 왜 바꿨는지 적습니다." },
          { label: "git push", desc: "로컬에 쌓인 커밋 기록을 GitHub 같은 원격 저장소로 올려 백업·공유하는 명령어입니다." },
        ],
      },
      {
        id: "vercel-deploy",
        label: "Vercel (github 연동 자동 배포)",
        desc: "React 같은 프레임워크 프로젝트를 Git 저장소와 연결해 자동으로 배포합니다.",
        children: [
          { label: "Git 연동 배포", desc: "GitHub 저장소를 연결하면 코드를 푸시할 때마다 자동으로 재배포됩니다." },
          { label: "프리뷰 배포", desc: "브랜치마다 별도의 임시 URL이 생겨 배포 전에 미리 확인할 수 있습니다." },
          { label: "환경변수", desc: "API 키처럼 코드에 직접 넣으면 안 되는 값을 안전하게 설정하는 곳입니다." },
          { label: "vercel.app 도메인", desc: "별도 도메인을 구매하기 전에는, 배포하면 '내프로젝트.vercel.app' 형태의 Vercel 도메인 주소가 자동으로 발급됩니다." },
        ],
      },
    ],
  },
];
