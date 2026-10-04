/* ==========================================================================
   SCOPE Lab — 홈페이지 내용 파일 (이 파일만 고치면 사이트 내용이 바뀝니다)

   - 문구는 { ko: "...", en: "..." } 형태입니다. en 을 비우면 한국어가 표시됩니다.
   - "[예시]", "[수정]" 이 붙은 항목은 샘플입니다. 실제 내용으로 바꾸거나 줄 전체를 삭제하세요.
   - 따옴표(")와 쉼표(,) 를 지우지 않도록 주의하세요. 항목 사이에는 쉼표가 필요하고,
     마지막 항목 뒤에는 쉼표가 없어도 됩니다.
   - 사진은 assets/img/people/ 폴더에 올리고, 경로를 photo 에 적습니다. (README.md 참고)
   ========================================================================== */
window.LAB = {

  /* ---------- 기본 정보 ---------- */
  affiliation: {
    ko: "경희대학교 전자정보대학",
    en: "Electronic Eng., Kyung Hee Univ."
  },
  email: "eleest [at] khu.ac.kr",                         // [수정] 대표 문의 메일. @ 가 없으면 링크 없이 글자로만 표시됩니다.
  copyrightYear: 2026,

  /* ---------- 연구실 키워드 (소개 섹션의 # 태그) ---------- */
  topics: ["Stochastic Optimization (SO)","Electromagnetics (EM)", "Quantum Computing (QC)", "Machine Learning (ML)"],

  /* ---------- 소개 하단 숫자 카드 (원치 않으면 [] 로 비우세요) ---------- */
  stats: [
    { value: "SO", label: { ko: "Bayesian Optimization, Sim-to-Real Process", en: "Bayesian Optimization, Sim-to-Real Process" } },
    { value: "EM",  label: { ko: "Electromagnetic Design, Differentiable Physics", en: "Electromagnetic Design, Differentiable Physics" } },
    { value: "QC",  label: { ko: "QC Applications, Practical Advantages", en: "QC Applications, Practical Advantages" } },
    { value: "ML",  label: { ko: "AI for Quantum, AI for Meta and Photonics", en: "AI for Quantum, AI for Meta and Photonics" } }
  ],

  /* ---------- 지도교수 ----------
     photo : 사진 경로 (비우면 이니셜 표시). 권장: 세로로 약간 긴 사진 (가로:세로 = 4:5), 600×750px 이상
     links : url 이 비어 있으면 그 버튼은 표시되지 않습니다.
     education / career / awards : 필요 없는 항목은 [] 로 비우면 칸이 사라집니다.        */
  pi: {
    name: { ko: "이응규", en: "Eungkyu Lee" },
    role: { ko: "부교수", en: "Associate Professor " },
    photo: "assets/img/people/pi.jpg",                                        // 예: "assets/img/people/pi.jpg"
    email: "eleest [at] khu.ac.kr",
    bio: {},
    interests: [],
    education: [
      { period: "2009", text: { ko: "경희대학교 물리학전공 이학석사", en: "B.S. Physics, Kyung Hee Univ., Republic of Korea " } },
      { period: "2015", text: { ko: "서울대학교 나노과학기술 공학박사", en: "Ph.D. Nano Science and Technology, Seoul National Univ., Republic of Korea" } }
    ],
    career: [
      { period: "2025-", text: { ko: "경희대학교 전자공학과 부교수", en: "Associate Professor, Electronic Eng., Kyung Hee Univ." } },
      { period: "2021-2025", text: { ko: "경희대학교 전자공학과 조교수", en: "Assistant Professor, Electronic Eng., Kyung Hee Univ." } },
      { period: "2020-2021", text: { ko: "국립금오공과대학교 기계시스템공학과 조교수", en: "Assistant Professor, Mechanical System Eng., KIT" } },
      { period: "2019-2020", text: { ko: "미국노터데임대학교 기계항공공학부 연구조교수", en: "Research Assistant Professor, Aerospace and Mechanical Eng., Univ. of Notre Dame, USA" } },
      { period: "2015-2019", text: { ko: "미국노터데임대학교 기계항공공학부 박사후연구원", en: "Postdoctoral Associate, Aerospace and Mechanical Eng., Univ. of Notre Dame, USA" } }
    ],
    awards: [
      { period: "2025", text: { ko: "과학기술정보통신부 장관 표창, 대한민국 과학기술대전", en: "과학기술정보통신부 장관 표창, 대한민국 과학기술대전" } },
      { period: "2025", text: { ko: "국가아젠다사업 선정, 한국연구재단", en: "국가아젠다 지원사업 선정, 한국연구재단" } },
      { period: "2023", text: { ko: "양자이득도전연구사업 선정, 한국연구재단", en: "양자이득도전연구사업 선정, 한국연구재단" } },
      { period: "2021", text: { ko: "우수신진연구자사업 선정, 한국연구재단", en: "양자이득도전연구사업 선정, 한국연구재단" } },
    ],
    activities: [
      { period: "2026–", text: { ko: "한국양자정보학회 양자기술활용분과, 간사", en: "한국양자정보학회 양자기술활용분과, 간사" } },
      { period: "2026–", text: { ko: "한국광학회 양자광학및양자정보, 분과 위원", en: "한국광학회 양자광학및양자정보, 위원" } },
      { period: "2025-", text: { ko: "한국전자파학회 양자전파연구반, 위원", en: "한국전자파학회 양자전파연구반, 위원" } },
      { period: "2025-", text: { ko: "한국연구재단 양자기술단 RB", en: "한국연구재단 양자기술단 RB" } },
      { period: "2024-", text: { ko: "한국전자파학회 레이다연구회, 위원", en: "한국전자파학회 레이다연구회, 위원" } },
      { period: "2024-", text: { ko: "한국전자파학회 안테나연구회, 위원", en: "한국전자파학회 안테나연구회, 위원" } }


    ],
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=KKdHB40AAAAJ&hl=en" },            // 예: "https://scholar.google.com/citations?user=XXXX"
      { label: "ORCID",          url: "" },            // 예: "https://orcid.org/0000-0000-0000-0000"
      { label: "CV (PDF)",       url: "" }             // 예: "assets/files/cv.pdf"
    ]
  },

  /* ---------- 연구 분야 ----------
     icon 값: "bayes" | "quantum" | "wave" | "process"                    */
  research: [
    {
      icon: "bayes",
      title: { ko: "확률론적 최적화 · 능동 학습", en: "Stochastic Optimization & Active Learning" },
      text: {
        ko: "실험과 시뮬레이션 비용이 큰 문제에서, 적은 시도로 최적 조건을 찾는 확률적 탐색 방법을 연구합니다.",
        en: "We study probabilistic search methods that find optimal conditions with few trials when experiments and simulations are costly."
      },
      tags: ["Stochastic optimization", "Bayesian optimization", "Active learning", "Generative AI", "Surrogate model"]
    },
    {
      icon: "quantum",
      title: { ko: "양자 컴퓨팅 기반 최적화", en: "Quantum Computing for Optimization" },
      text: {
        ko: "양자어닐링부터 게이트 기반 NISQ 컴퓨팅으로 확장하는 최적화 알고리즘과, 고차 인수분해 머신(HOFM)기반 블랙박스 최적화를 다룹니다.",
        en: "We develop optimization algorithms that extend from quantum annealing to gate-based NISQ computing, including black-box optimization with higher-order factorization machines (HOFM)."
      },
      tags: ["Quantum Annealing", "NISQ", "HOFM", "QUBO", "AI for Quantum"]
    },
    {
      icon: "wave",
      title: { ko: "전자기파 · 메타포토닉스", en: "Electromagnetics & Metaphotonics" },
      text: {
        ko: "능동 메타표면, 에너지절감 광학필름, 주파수 선택 구조 등 전자기파 소자의 설계를 FDTD, RCWA, TMM과 기계학습 최적화 기법으로 수행합니다.",
        en: "We design electromagnetic structures such as active metasurfaces, energy-saving optical films, and frequency selective structures using FDTD, RCWA, TMM, and machine learning optimization methods."
      },
      tags: ["Photonics", "Differentiable physics", "Numerical Methods", "Semi-analytical Methods", "AI for Photonics"]
    },
    {
      icon: "process",
      title: { ko: "공정 최적화 · Sim-to-Real", en: "Process Optimization & Sim-to-Real" },
      text: {
        ko: "배터리 전극등의 에너지 소재, IGZO 등의 반도체 박막 공정에서, 시뮬레이션과 실험 사이의 차이를 줄이는 데이터 기반 공정 최적화를 연구합니다.",
        en: "We reduce the gap between simulation and experiment through data-driven optimization of battery electrodes (e.g., SiOx) and semiconductor thin-film processes (e.g., IGZO)."
      }, 
      tags: ["Sim-to-Real", "Energy", "Semiconductors", "Process Optimization", "Sim-to-Real"]
    }
  ],

  /* ---------- 구성원 (지도교수는 위의 pi 에 따로 적습니다) ----------
     photo : 사진 경로. 권장: 정사각형, 400×400px, 200KB 이하
     group : "phd" | "ms" | "intern" | "alumni"
     ※ 아래는 샘플입니다. 기존 홈페이지의 구성원 목록은 불러오지 못했습니다.            */
  members: [
    {
      group: "phd",
      name: { ko: "황상효(Sanghyo Hwang)", en: "황상효(Sanghyo Hwang)" },
      role: { ko: "박사과정", en: "Ph.D. Student" },
      interest: { ko: "Metasurface, AI for Quantum", en: "Metasurface, AI for Quantum"},
      email: "dsh629[at]khu.ac.kr", link: "", photo: "assets/img/people/sh.jpg"
    },
    {
      group: "ms",
      name: { ko: "박채영(Chae-young Park)", en: "박채영(Chae-young Park)" },
      role: { ko: "석사과정", en: "M.S. Student" },
      interest: { ko: "Sim-to-Real, AI for Photonics", en: "Sim-to-Real, AI for Photonics" },
      email: "pco5094[at]khu.ac.kr", link: "", photo: "assets/img/people/cp.jpg"
    },
    {
      group: "ms",
      name: { ko: "박재현(Jaehyun Park)", en: "박재현(Jaehyun Park)" },
      role: { ko: "석사과정", en: "M.S. Student" },
      interest: { ko: "AESA, AI for Metasurfaces", en: "AESA, AI for Metasurfaces" },
      email: "toglawogus[at]khu.ac.kr", link: "", photo: "assets/img/people/jhp.jpg"
    },
    {
      group: "ms",
      name: { ko: "김석진(Seokjin Kim)", en: "김석진(Seokjin Kim)" },
      role: { ko: "석사과정", en: "M.S. Student" },
      interest: { ko: "Energy, AI for Photonics", en: "Energy, AI for Photonics" },
      email: "chenchenkim[at]khu.ac.kr", link: "", photo: "assets/img/people/sjk.jpg"
    },
    {
      group: "ms",
      name: { ko: "강석규(Seok-Kyu Gang)", en: "강석규(Seok-Kyu Gang)" },
      role: { ko: "석사과정", en: "M.S. Student" },
      interest: { ko: "AESA, AI for Metasurface", en: "AESA, AI for Metasurface" },
      email: "sg1025000[at]khu.ac.kr", link: "", photo: "assets/img/people/skk.jpg"
    },
    {
      group: "intern",
      name: { ko: "김형민(Hyungmin Kim)", en: "김형민(Hyungmin Kim)" },
      role: { ko: "학석사과정", en: "B.S.-M.S. Student" },
      interest: { ko: "Differentiable Algorithm, AI for Metasurface", en: "Differentiable Algorithm, AI for Metasurface" },
      email: "chokobi1952[at]khu.ac.kr", link: "", photo: "assets/img/people/hmk.jpg"
    },
    {
      group: "intern",
      name: { ko: "정주영(Jooyoung Jung)", en: "정주영(Jooyoung Jung)" },
      role: { ko: "학석사과정", en: "B.S.-M.S. Student" },
      interest: { ko: "Sim-to-Real, AI for Photonics", en: "Sim-to-Real, AI for Photonics" },
      email: "gamsu0407[at]khu.ac.kr", link: "", photo: "assets/img/people/jyj.jpg"
    },
    {
      group: "alumni",
      name: { ko: "정세랑(Serang Jung)", en: "정세랑(Serang Jung)" },
      year: "2024",
      degree: { ko: "석사", en: "M.S."},
      now: { ko: "서울대학교 박사과정", en: "Graduate Student, Seoul National Univ." }
    },
    {
      group: "alumni",
      name: { ko: "안상우(Sang-woo Ahn)", en: "안상우(Sang-woo Ahn)" },
      year: "2023",
      degree: { ko: "학사", en: "B.S."},
      now: { ko: "미국미시건대학교 박사과정", en: "Graduate Student, Univ. of Michigan, Ann Arbor, USA" }
    },
    {
      group: "alumni",
      name: { ko: "정혁래(Hyukrae Jung)", en: "정혁래(Hyukrae Jung)" },
      year: "2024",
      degree: { ko: "학사", en: "B.S."},
      now: { ko: "LIG Defense&Aerospace", en: "LIG Defense&Aerospace" }
    },
    {
      group: "alumni",
      name: { ko: "강정모(Jungmo Kang)", en: "강정모(Jungmo Kang)" },
      year: "2025",
      degree: { ko: "학사", en: "B.S."},
      now: { ko: "Thermo Fisher Scientific Korea", en: "Thermo Fisher Scientific Korea" }
    }
  ],

  /* ---------- 소식 (최신 항목이 위로 오게 쓰세요) ---------- */
  news: [
    { date: "2026-8", text: { ko: "박채영, 박재현, 황상효 학생 졸업을 축하합니다.", en: "박채영, 박재현, 황상효 학생 졸업을 축하합니다."} }
  ],

  /* ---------- 연락처 ---------- */
  contact: [
    { label: { ko: "주소", en: "Address" },    value: { ko: "경희대학교 전자정보대학 337-1호/507호", en: "337-1/507 Electronic Eng., Kyung Hee Univ." } },
    { label: { ko: "이메일", en: "Email" },    value: { ko: "eleest[at]khu.ac.kr", en: "eleest[at]khu.ac.kr" }, mail: true },
    { label: { ko: "전화", en: "Phone" },      value: { ko: "031-201-2581", en: "[Edit] +82-31-201-2581" } }
  ]
};
