# SCOPE Lab 홈페이지 사용 안내

HTML, CSS, JavaScript만으로 만든 정적 사이트입니다. 설치나 빌드 과정이 없고 GitHub Pages에서 바로 동작합니다.
최종 주소는 `https://scope.khu.ac.kr` 입니다. 학교 DNS 등록이 끝나기 전에는 `github.io` 주소로 사용합니다.

## 0. 파일 구성

| 파일 / 폴더 | 역할 |
|---|---|
| `assets/js/data.js` | **모든 내용** (지도교수, 구성원, 논문, 소식, 연락처). 내용은 이 파일만 고치면 됩니다. |
| `assets/img/people/` | 지도교수와 구성원 사진을 넣는 폴더 |
| `index.html` | 페이지 뼈대 (보통 고칠 필요 없음) |
| `assets/css/style.css` | 디자인. 맨 위의 색상 변수만 바꾸면 전체 색이 바뀝니다. |
| `assets/js/main.js` | 화면을 그리는 코드 (한/영 전환, 다크 모드, 첫 화면 애니메이션) |
| `CNAME` (이 폴더에 없음) | 학교 DNS 등록 **후에** 추가하는 파일입니다. 아래 2번 참고 |

---

## 1. 지금 할 일: GitHub에 올리기 (도메인 연결 없이)

1. GitHub에 가입합니다. 연구실 전용 계정을 권장합니다. 담당자가 바뀌어도 사이트를 유지할 수 있습니다.
2. 오른쪽 위 `+` → `New repository`를 누릅니다.
   - Repository name: `<GitHub아이디>.github.io` (예: 아이디가 `scope-lab`이면 `scope-lab.github.io`)
   - `Public` 선택 (무료 GitHub Pages는 공개 저장소만 가능)
   - `Add a README file` 등 다른 체크는 모두 끈 채로 `Create repository`
3. 만들어진 화면에서 `uploading an existing file` 링크를 누릅니다.
4. **zip 파일을 풀고, 폴더 안의 내용물**(`index.html`, `assets` 폴더 등)을 끌어서 올립니다.
   zip 파일 자체를 올리면 동작하지 않습니다. GitHub는 zip을 풀어 주지 않습니다.
5. 아래쪽 `Commit changes`를 누릅니다.
6. `Settings` → `Pages` → `Build and deployment`
   - Source: `Deploy from a branch`
   - Branch: `main`, 폴더 `/ (root)` → `Save`
7. 1~10분 뒤 `https://<GitHub아이디>.github.io` 가 열립니다. 이 주소를 학생들에게 먼저 공지하면 됩니다.

> **중요:** 학교 DNS 등록이 끝나기 전에는 `Settings → Pages`의 **Custom domain 칸을 비워 두세요.**
> 미리 입력하면 `github.io` 주소가 `scope.khu.ac.kr`로 넘어가는데, DNS가 없으면 접속 오류가 납니다.

---

## 2. 학교 DNS 등록이 끝난 뒤 할 일

### 2-1. 학교 전산 담당 부서에 요청 (등록 전)
요청 문구 예시:

> `scope.khu.ac.kr` 서브도메인을 만들고, CNAME 레코드로 `<GitHub아이디>.github.io` 에 연결해 주세요.
> (GitHub Pages 연결용이며, 인증서 발급을 위해 CAA 레코드가 있다면 `letsencrypt.org` 를 허용해 주세요.)

- 레코드 종류는 포트포워딩이 아니라 **CNAME**입니다.
- 값 끝에 점(`.`)이 필요하다고 안내받으면 `<GitHub아이디>.github.io.` 로 적습니다.

### 2-2. 등록이 되었는지 확인
Windows는 명령 프롬프트, 맥은 터미널에서 다음을 입력합니다.

```
nslookup scope.khu.ac.kr
```

결과에 `<GitHub아이디>.github.io` 가 보이면 등록된 것입니다. 보이지 않으면 아직 전파 중이거나 등록이 안 된 것이니 기다리거나 전산에 문의합니다.

### 2-3. GitHub에서 도메인 연결
1. 저장소 → `Settings` → `Pages` → `Custom domain` 칸에 `scope.khu.ac.kr` 입력 → `Save`
   - 저장하면 저장소에 `CNAME` 파일이 자동으로 생깁니다. 같이 받은 `CNAME` 파일을 저장소 루트에 직접 올려도 결과는 같습니다.
2. 같은 화면에 `DNS check successful` 이 나올 때까지 기다립니다. 몇 분에서 몇 시간 걸릴 수 있습니다.
3. `Enforce HTTPS`를 체크합니다.
   - 체크 칸이 흐리게 잠겨 있으면 인증서를 발급하는 중입니다. 보통 1시간 안에, 길어도 24시간 안에 풀립니다.
   - 하루가 지나도 안 되면 `Custom domain`을 지웠다가 다시 입력해 보고, 그래도 안 되면 전산에 CAA 레코드를 확인해 달라고 요청합니다.
4. `https://scope.khu.ac.kr` 접속을 확인합니다.

### 2-4. 연결 후
- 이전에 공지한 `github.io` 주소는 자동으로 `scope.khu.ac.kr`로 넘어갑니다. 다시 공지하지 않아도 됩니다.
- 이후에 사이트 파일을 올릴 때 **`CNAME` 파일을 지우지 마세요.** 파일을 덮어쓰기만 하면 안전합니다.
- 기존 `epe.khu.ac.kr`(Google Sites)를 계속 둘지, 새 주소로 넘길지는 학교 전산과 상의합니다.

---

## 3. 내용 수정하기

1. GitHub 저장소 → `assets` → `js` → `data.js` 를 엽니다.
2. 오른쪽 위 연필 아이콘(`Edit this file`)을 누릅니다.
3. 내용을 고치고 `Commit changes`를 누릅니다.
4. 1~2분 뒤 사이트에서 `Ctrl + F5`(맥은 `Cmd + Shift + R`)로 새로고침합니다.

**규칙**
- `[예시]`와 `[수정]`이 붙은 줄은 샘플입니다. 실제 내용으로 바꾸거나 `{ ... },` 항목 전체를 지우세요.
- 따옴표(`"`)와 쉼표(`,`)를 지우지 마세요. 항목과 항목 사이에는 쉼표가 필요합니다.
- 한국어는 `ko`, 영어는 `en`에 적습니다. `en`을 비우면 영어 모드에서도 한국어가 나옵니다.
- 이메일에 `@`가 없으면 (`id [at] khu.ac.kr`) 링크 없이 글자로만 보입니다. 스팸 수집을 줄이는 방법입니다.

**구성원 추가 예시** (`members` 안에 한 덩어리를 추가합니다)

```js
{
  group: "phd",                                   // phd | ms | intern | alumni
  name: { ko: "김연구", en: "Yeongu Kim" },
  role: { ko: "박사과정", en: "Ph.D. Student" },
  interest: { ko: "양자 최적화", en: "Quantum optimization" },
  email: "", link: "",
  photo: "assets/img/people/kim-yeongu.jpg"
},
```

졸업생은 `group`을 `"alumni"`로 바꾸면 졸업생 목록으로 이동합니다. 지도교수는 `members`가 아니라 위쪽의 `pi` 항목에 적습니다.

**논문 추가 예시** (`publications` 안에 추가, 연도 순서는 자동 정렬)

```js
{
  year: 2026, type: "journal",                    // journal | conference
  title: "논문 제목",
  authors: "Co-author A, **Your Name**, Co-author B",   // ** ** 로 감싼 이름은 굵게 표시
  venue: "Advanced Science",
  doi: "10.1002/advs.76607", link: ""
},
```

**수정이 잘못되어 화면이 비었을 때**
`data.js`에 쉼표나 따옴표 오류가 있으면 내용이 표시되지 않습니다. 해당 파일 화면 오른쪽 위 `History` → 직전 버전의 `...` → `Revert`로 되돌릴 수 있습니다.
수정을 많이 할 때는 컴퓨터에서 폴더의 `index.html`을 더블클릭해 먼저 확인한 뒤 올리면 안전합니다. 편집기는 VS Code를 권장합니다.

---

## 4. 사진 넣기

### 4-1. 사진 준비
| 대상 | 권장 크기 | 비율 |
|---|---|---|
| 지도교수 | 600 × 750 px 이상 | 세로가 조금 긴 4:5 |
| 구성원 | 400 × 400 px | 정사각형 |

- 형식은 JPG, 파일 크기는 장당 **200KB 이하**를 권장합니다. 너무 크면 첫 화면이 느려집니다.
- 얼굴을 가운데에 두세요. 화면에 맞춰 자동으로 잘리고, 구성원 사진은 원형으로 표시됩니다.
- 크기 줄이기: 컴퓨터의 사진 앱이나 [squoosh.app](https://squoosh.app) 같은 무료 도구를 쓰면 됩니다.
- 파일 이름은 **영문 소문자와 하이픈만** 쓰세요. 예: `pi.jpg`, `kim-yeongu.jpg` (한글, 공백, 대문자는 피하세요.)

### 4-2. 올리는 순서
1. GitHub 저장소 → `assets` → `img` → `people` 폴더로 이동합니다.
2. `Add file` → `Upload files` → 사진을 끌어 놓고 `Commit changes`
3. `assets/js/data.js`에서 해당 사람의 `photo`에 경로를 적습니다.
   - 지도교수: `photo: "assets/img/people/pi.jpg",`
   - 구성원: `photo: "assets/img/people/kim-yeongu.jpg",`
4. 파일 이름의 대소문자까지 정확히 같아야 합니다. `Kim.JPG`와 `kim.jpg`는 다른 파일입니다.

사진이 없으면 이름의 첫 글자가 들어간 색 원으로 표시되니, 사진이 준비된 사람부터 넣어도 됩니다.

### 4-3. 개인정보 주의
- 학생 사진은 **게재 동의**를 받은 뒤 올리세요. 저장소는 공개라서 누구나 볼 수 있습니다.
- 휴대폰 원본 사진에는 촬영 위치 정보가 들어 있을 수 있습니다. 크기를 줄여 저장하거나 편집 앱으로 내보내면 대부분 사라집니다.
- GitHub는 파일을 지워도 과거 기록(History)에는 남습니다. 삭제 요청이 있을 수 있으니, 처음부터 동의를 받고 올리는 것이 안전합니다.
- 지도교수 CV(PDF)를 올릴 때는 `Add file → Upload files`로 저장소 맨 위에 `cv.pdf`를 올린 뒤, `data.js`의 CV 링크 `url`에 `"cv.pdf"`를 적습니다.

---

## 5. 자주 생기는 문제

| 증상 | 확인할 것 |
|---|---|
| 올렸는데 사이트가 안 열림 | Settings → Pages에서 Source가 `main` / `(root)`인지, 저장소가 Public인지 확인. 올린 후 최대 10분 기다립니다. |
| 사이트는 열리는데 내용이 비어 있음 | `data.js`의 쉼표나 따옴표 오류. 3번의 `Revert` 방법으로 되돌립니다. |
| 사진이 안 나옴 | 경로, 파일 이름 대소문자, 확장자(`.jpg`와 `.jpeg`)가 data.js와 같은지 확인합니다. |
| 수정했는데 그대로임 | 1~2분 기다린 뒤 `Ctrl + F5`. 파비콘은 브라우저가 오래 기억하므로 탭을 닫았다 다시 엽니다. |
| `DNS check unsuccessful` | 학교 DNS가 아직 등록되지 않았거나 전파 중입니다. 2-2의 `nslookup`으로 확인합니다. |
| HTTPS 체크 칸이 잠김 | 인증서 발급 대기입니다. 최대 24시간 걸릴 수 있습니다. |
