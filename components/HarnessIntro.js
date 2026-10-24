"use client";

const HARNESS_ELEMENTS = [
  { name: "맥락", en: "Context", question: "무엇을 알려줄 것인가", bg: "bg-brutal-blue/40" },
  { name: "도구", en: "Tools", question: "무엇을 할 수 있게 할 것인가", bg: "bg-brutal-green/50" },
  { name: "절차", en: "Control", question: "언제 무엇을 하게 할 것인가", bg: "bg-brutal-orange/40" },
  { name: "검증", en: "Verification", question: "맞는지 어떻게 확인할 것인가", bg: "bg-brutal-pink/40" },
];

const WEAKNESS_TABLE = [
  { weakness: "탐색의 한계", prescription: "추가 탐색 지시", work: "최신 자료를 따로 찾게 시킨다" },
  { weakness: "선호도 훈련의 오류", sub: "아첨, 동조", prescription: "중립화와 재훈련", work: "편향된 질문을 중립 문장으로 바꿔서 다시 묻게 한다" },
  { weakness: "불충분한 문맥", prescription: "문맥 검증", work: "조건이 빠졌는지 먼저 따지게 한다" },
  { weakness: "확률적 선택", sub: "계산을 대충 한다", prescription: "도구 사용 및 검증", work: "계산은 계산기로, 결과는 검산으로" },
  { weakness: "구조적 약점", sub: "토큰 단위 인식", prescription: "절차 제시와 도구", work: "단계를 쪼개 주거나 프로그램을 쓰게 한다" },
  { weakness: "기타", prescription: "범위 제한과 검증", work: "업무 밖 질문은 거절하게 하고, 결과를 한 번 더 검사한다" },
];

const HARNESS_TABLE = [
  { name: "맥락", en: "Context", question: "무엇을 알려줄 것인가", analogy: "업무 매뉴얼, 사규", example: "단가표, 거래처 특성, 사내 용어, 과거 견적 이력" },
  { name: "도구", en: "Tools", question: "무엇을 할 수 있게 할 것인가", analogy: "사내 시스템 계정", example: "ERP 조회, 엑셀 생성, 메일 발송, 재고 DB 접근" },
  { name: "절차", en: "Control", question: "언제 무엇을 하게 할 것인가", analogy: "업무 프로세스, 결재선", example: "금액 300만원 초과 건은 사람 승인 후 진행" },
  { name: "검증", en: "Verification", question: "맞는지 어떻게 확인할 것인가", analogy: "검수, 보고 양식", example: "합계가 품목 합과 일치하는지 자동 대조" },
];

const FAILURE_PATTERNS = [
  { title: "맥락 결손", quote: "그럴듯한데 우리 회사 얘기가 아니다.", desc: "답변이 일반론에 머문다. 사내 자료가 연결돼 있지 않은 상태.", bg: "bg-brutal-blue/40" },
  { title: "도구 결손", quote: "결국 사람이 다시 입력해야 한다.", desc: "AI가 문장만 만들고 시스템에 반영이 안 된다. 업무 시간이 오히려 늘어난다.", bg: "bg-brutal-green/50" },
  { title: "절차 결손", quote: "위험해서 중요한 일은 못 맡긴다.", desc: "사람이 끼어들 지점이 설계되지 않았다. 전부 수동 확인으로 되돌아간다.", bg: "bg-brutal-orange/40" },
  { title: "검증 결손", quote: "한 번 크게 틀린 뒤로 아무도 안 쓴다.", desc: "가장 흔한 사망 원인. 틀릴 수 있다는 전제가 설계에 없었던 경우.", bg: "bg-brutal-pink/40" },
];

const PROPOSAL_STEPS = [
  { step: "1. 진단", work: "업무 흐름을 따라가며 네 요소 중 무엇이 비어 있는지 확인", output: "현황 진단서, 적용 후보 업무 목록" },
  { step: "2. 설계", work: "맥락, 도구, 절차, 검증을 업무별로 정의", output: "하네스 설계서, 사람이 개입할 지점 정의" },
  { step: "3. 구축", work: <>실제 시스템으로 구현. <strong>기존 강점 영역</strong></>, output: "AI 연계로 동작하는 시스템" },
  { step: "4. 이관", work: "담당자가 맥락을 직접 갱신할 수 있는 수준까지 교육", output: "운영 매뉴얼, 사내 담당자 교육" },
];

const DEFAULT_DIAGRAM_LABELS = {
  center: "LLM",
  context: { title: "맥락", desc: "무엇을 알려줄 것인가" },
  tools: { title: "도구", desc: "무엇을 할 수 있게 할 것인가" },
  control: { title: "절차", desc: "언제 무엇을 하게 할 것인가" },
  verify: { title: "검증", desc: "맞는지 어떻게 확인할 것인가" },
};

// labels로 일부 글자만 덮어쓸 수 있다 (예: { context: { title: "맥락", desc: "..." } })
function HarnessDiagram({ labels = {} }) {
  const L = { ...DEFAULT_DIAGRAM_LABELS, ...labels };
  // 맥락 박스: desc를 배열로 주면 여러 줄, width로 가로폭 조절 (줄이 늘면 박스는 아래로 늘어난다)
  const ctxLines = Array.isArray(L.context.desc) ? L.context.desc : [L.context.desc];
  const ctxW = L.context.width ?? 240;
  const ctxExtra = (ctxLines.length - 1) * 22;
  // 맥락 박스 위 바깥에 붙는 보조 설명 (줄 배열, 가운데 정렬). 있으면 그림이 위로 길어진다.
  const note = L.context.note ?? [];
  const hasNote = note.length > 0;
  // 도구 박스 아래 바깥에 붙는 보조 설명 (줄 배열, 가운데 정렬)
  const toolNote = L.tools.note ?? [];
  // 절차 박스 아래 바깥에 붙는 보조 설명 (줄 배열, 가운데 정렬). 있으면 그림이 아래로 길어진다.
  const controlNote = L.control.note ?? [];
  // 검증 박스 아래 바깥에 붙는 보조 설명 (줄 배열, 박스 가운데 정렬. 그림 왼쪽 가장자리에 가까워 줄을 짧게 나눈다)
  const verifyNote = L.verify.note ?? [];
  // 위아래 그림의 확대 배율(글자·박스 크기)을 맞추기 위해 viewBox 폭에 비례해 최대 너비를 정한다
  const topExtra = hasNote ? 50 : 0;
  const vbW = 800;
  const vbH = 480 + topExtra + (controlNote.length > 0 ? 60 : 0);
  return (
    <svg
      viewBox={`20 ${60 - topExtra} ${vbW} ${vbH}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="가운데 LLM, 둘레에 맥락·도구·절차·검증 네 요소가 배치된 하네스 구조도"
      className="w-full h-auto"
      style={{ maxWidth: vbW * 1.3 }}
    >

      <line x1="420" y1="220" x2={420} y2={162 + ctxExtra} stroke="#1A1A2E" strokeWidth="3" />
      <line x1="500" y1="300" x2="578" y2="300" stroke="#1A1A2E" strokeWidth="3" />
      <line x1="420" y1="380" x2="420" y2="438" stroke="#1A1A2E" strokeWidth="3" />
      <line x1="340" y1="300" x2="262" y2="300" stroke="#1A1A2E" strokeWidth="3" />

      <circle cx="420" cy="300" r="80" fill="#FFE156" stroke="#1A1A2E" strokeWidth="4" />
      <text x="420" y="311" textAnchor="middle" fontSize="32" fontWeight="800" fill="#1A1A2E">{L.center}</text>

      <rect x={420 - ctxW / 2} y="76" width={ctxW} height={86 + ctxExtra} fill="#6EC6FF" stroke="#1A1A2E" strokeWidth="3" />
      <text x="420" y="114" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1A1A2E">{L.context.title}</text>
      {ctxLines.map((line, i) => (
        <text key={i} x="420" y={138 + i * 22} textAnchor="middle" fontSize="16" fill="#1A1A2E">{line}</text>
      ))}
      {note.map((line, i) => (
        <text key={i} x="420" y={27 + i * 24} textAnchor="middle" fontSize="16" fontWeight="600" fill="#1D6FD1">{line}</text>
      ))}
      {toolNote.map((line, i) => (
        <text key={i} x="689" y={376 + i * 24} textAnchor="middle" fontSize="16" fontWeight="600" fill="#1D6FD1">{line}</text>
      ))}
      {controlNote.map((line, i) => (
        <text key={i} x="420" y={557 + i * 24} textAnchor="middle" fontSize="16" fontWeight="600" fill="#1D6FD1">{line}</text>
      ))}
      {verifyNote.map((line, i) => (
        <text key={i} x="151" y={376 + i * 24} textAnchor="middle" fontSize="16" fontWeight="600" fill="#1D6FD1">{line}</text>
      ))}

      <rect x="578" y="257" width="222" height="86" fill="#7BED9F" stroke="#1A1A2E" strokeWidth="3" />
      <text x="689" y="295" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1A1A2E">{L.tools.title}</text>
      <text x="689" y="319" textAnchor="middle" fontSize="16" fill="#1A1A2E">{L.tools.desc}</text>

      <rect x="300" y="438" width="240" height="86" fill="#FFA94D" stroke="#1A1A2E" strokeWidth="3" />
      <text x="420" y="476" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1A1A2E">{L.control.title}</text>
      <text x="420" y="500" textAnchor="middle" fontSize="16" fill="#1A1A2E">{L.control.desc}</text>

      <rect x="40" y="257" width="222" height="86" fill="#FF6B9D" stroke="#1A1A2E" strokeWidth="3" />
      <text x="151" y="295" textAnchor="middle" fontSize="26" fontWeight="800" fill="#1A1A2E">{L.verify.title}</text>
      <text x="151" y="319" textAnchor="middle" fontSize="16" fill="#1A1A2E">{L.verify.desc}</text>
    </svg>
  );
}

// 과제별 AI 능력을 나타낸 꺾은선. 봉우리는 잘하는 과제, 골짜기는 못하는 과제다.
const JAGGED_POINTS = [
  { x: 110, y: 100, label: "변호사 시험", strong: true },
  { x: 228, y: 258, label: "글자 수 세기", strong: false },
  { x: 346, y: 104, label: "전략 분석", strong: true },
  { x: 464, y: 262, label: "숫자 비교", strong: false },
  { x: 582, y: 110, label: "논문 요약", strong: true },
  { x: 700, y: 254, label: "거꾸로 읽기", strong: false },
];

function JaggedFrontierChart() {
  return (
    <svg
      viewBox="0 0 800 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="과제별 AI 능력을 나타낸 꺾은선. 사람의 기대는 평탄한 선이지만 실제는 톱니처럼 오르내린다"
      className="w-full h-auto"
      style={{ maxWidth: 1040 }}
    >
      <text x="24" y="40" fontSize="20" fontWeight="800" fill="#1A1A2E">AI 능력</text>
      <line x1="90" y1="70" x2="90" y2="300" stroke="#1A1A2E" strokeWidth="3" />
      <line x1="90" y1="300" x2="740" y2="300" stroke="#1A1A2E" strokeWidth="3" />

      <line x1="110" y1="108" x2="740" y2="108" stroke="#1A1A2E" strokeWidth="3" strokeDasharray="10 8" />
      <text x="740" y="94" textAnchor="end" fontSize="19" fontWeight="700" fill="#1A1A2E">사람의 기대</text>

      <polyline
        points={JAGGED_POINTS.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="none"
        stroke="#1D6FD1"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {JAGGED_POINTS.map((p) => (
        <circle key={p.label} cx={p.x} cy={p.y} r="9" fill={p.strong ? "#6EC6FF" : "#FF6B9D"} stroke="#1A1A2E" strokeWidth="3" />
      ))}
      {JAGGED_POINTS.map((p) => (
        <text
          key={p.label}
          x={p.x}
          y="332"
          textAnchor="middle"
          fontSize="18"
          fontWeight={p.strong ? "600" : "800"}
          fill={p.strong ? "#1A1A2E" : "#D62F2F"}
        >
          {p.label}
        </text>
      ))}

      <text x="400" y="400" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1A1A2E">
        “어려운 과제를 해냈다고 해서 쉬운 과제를 한다는 보장이 없다”
      </text>
    </svg>
  );
}

/**
 * HarnessIntro — 로그인 직후, 강의 로드맵 이전에 보여주는 "AI 하네스 입문" 과정 목표 화면.
 * 데스크톱 전용 레이아웃(모바일 대응 없음).
 */
export default function HarnessIntro({ onNext }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto mb-10">
      <div className="flex flex-col gap-8">
        <figure className="flex flex-col items-center gap-4">
          <HarnessDiagram />
          <h2 className="font-black text-4xl text-center text-[#1D6FD1]">과정 목표: AI Harness Engineering</h2>
        </figure>

        <section className="mt-12 bg-brutal-white border-4 border-brutal-black p-10 flex flex-col gap-8">
        <div className="border-4 border-brutal-black bg-brutal-yellow p-6 brutal-shadow-sm">
          <p className="font-black text-3xl mb-4">
            하네스(harness)란, LLM을 특정 업무에서 믿고 사용할 수 있게 만드는 주변 장치 일체를 말한다.
          </p>
          <ul className="text-2xl leading-relaxed list-disc pl-8">
            <li>LLM 모델 자체를 바꾸는 게 아니다.</li>
            <li>
              LLM 모델에 무엇을 알려주고, 무엇을 할 수 있게 하고, 어떠한 순서로 시키고,
              결과를 어떻게 검증할지를 설계하는 일이다.
            </li>
          </ul>
        </div>
        </section>

        <div className="mt-12">
          <p className="font-black text-3xl mb-5 text-[#1D6FD1]">왜 필요한가: 들쑥날쑥 AI (Jagged Frontier)</p>
          <div className="flex flex-col gap-5">
            <p className="text-2xl leading-relaxed">
              <strong className="text-[1.7rem]">AI의 능력 경계는 평평하지 않고 톱니처럼 들쑥날쑥하다.</strong>{" "}
              미국 펜실베이니아대 와튼스쿨(The Wharton School) 에단 몰릭(Ethan Mollick) 교수가
              컨설턴트를 대상으로 한 현장 실험에서 나온 말이다.
            </p>
            <p className="text-2xl leading-relaxed">
              어려운 걸 해내니 쉬운 것도 당연히 할 거라는 직관이 깨진다.
              하네스가 왜 필요한지는 이 개념 하나로 설명된다.{" "}
              <strong>AI가 머리는 이미 충분히 좋다. 체계가 없을 뿐이다.</strong>
            </p>
          </div>
          <figure className="mt-8 flex flex-col items-center gap-4">
            <JaggedFrontierChart />
            <figcaption className="text-xl opacity-60 text-center">
              톱니 모양이 핵심. 평평한 점선(기대)과의 차이가 사고가 나는 자리다
            </figcaption>
          </figure>
          <div className="mt-8 w-fit mx-auto border-4 border-brutal-black bg-brutal-blue/40 px-8 py-6 brutal-shadow-sm">
            <p className="text-2xl leading-relaxed">AI는 변호사 시험에 붙으면서 단어의 글자 수는 못 센다.</p>
            <p className="text-2xl leading-relaxed">이 들쑥날쑥함을 관리하는 장치가 하네스다.</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-black text-3xl mb-5 text-[#1D6FD1]">비유 두 가지</p>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-2xl leading-relaxed">
                <strong className="text-[1.7rem]">마구(馬具).</strong>{" "}
                harness의 원뜻이다. 말은 그 자체로 힘이 세지만, 마구가 없으면 그 힘이 사람이 원하는 일로 바뀌지 않는다.
                고삐와 멍에와 수레를 연결해야 비로소 짐을 나른다. LLM이 말이고, 하네스가 마구다.
              </p>
            </div>
            <div>
              <p className="text-2xl leading-relaxed">
                <strong className="text-[1.7rem]">아주 똑똑한 신입사원.</strong>{" "}
                명문대를 나온 신입이 와도 가만히 두면 회사의 사정을 몰라 헛일을 한다.
                업무 매뉴얼, 체크리스트, 결재선, 시스템 계정, 보고 양식. 이걸 갖춰줘야 전력이 된다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-black text-3xl mb-5 text-[#1D6FD1]">약점별 처방 &mdash; 6가지</p>
          <p className="text-2xl leading-relaxed mb-5">
            하네스는 AI의 약점을 하나씩 막는 장치다. 각 약점에 맞는 처방이 따로 있다.
          </p>
          <table className="w-full border-4 border-brutal-black bg-brutal-cream text-2xl text-left">
            <thead className="bg-brutal-cream">
              <tr>
                <th className="p-4 border-b-4 border-brutal-black">약점</th>
                <th className="p-4 border-b-4 border-brutal-black">처방</th>
                <th className="p-4 border-b-4 border-brutal-black">실제로 하는 일</th>
              </tr>
            </thead>
            <tbody>
              {WEAKNESS_TABLE.map((row) => (
                <tr key={row.weakness} className="border-t-2 border-brutal-black first:border-t-0 align-top">
                  <td className="p-4">
                    <span className="font-black">{row.weakness}</span>
                    {row.sub && (
                      <>
                        <br />
                        <span className="text-lg opacity-60">{row.sub}</span>
                      </>
                    )}
                  </td>
                  <td className="p-4 whitespace-nowrap">{row.prescription}</td>
                  <td className="p-4">{row.work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <p className="font-black text-3xl mb-5 text-[#1D6FD1]">설계할 때는 4개로 묶는다</p>
          <p className="text-2xl leading-relaxed">
            위 6가지는 <strong>진단용</strong>이다. &ldquo;이 업무에서 AI가 어떻게 틀리는가&rdquo;를 찾을 때 쓴다.
            반면 실제로 하네스를 <strong>설계</strong>할 때는 네 덩어리로 묶는 편이 손에 잡힌다.
          </p>
        </div>

        <div>
          <p className="font-black text-3xl mb-5">하네스 4대 구성 요소</p>
          <div className="grid grid-cols-4 gap-5">
            {HARNESS_ELEMENTS.map((el) => (
              <div key={el.name} className={`border-4 border-brutal-black p-5 ${el.bg}`}>
                <p className="font-black text-4xl">{el.name}</p>
                <p className="text-lg font-bold opacity-60 mb-3">{el.en}</p>
                <p className="text-xl">{el.question}</p>
              </div>
            ))}
          </div>
        </div>

        <table className="w-full border-4 border-brutal-black bg-brutal-cream text-2xl text-left">
          <thead className="bg-brutal-cream">
            <tr>
              <th className="p-4 border-b-4 border-brutal-black">요소</th>
              <th className="p-4 border-b-4 border-brutal-black">묻는 질문</th>
              <th className="p-4 border-b-4 border-brutal-black">신입사원 비유</th>
              <th className="p-4 border-b-4 border-brutal-black">중소기업 사례</th>
            </tr>
          </thead>
          <tbody>
            {HARNESS_TABLE.map((el) => (
              <tr key={el.name} className="border-t-2 border-brutal-black first:border-t-0 align-top">
                <td className="p-4 whitespace-nowrap">
                  <span className="font-black text-3xl">{el.name}</span>
                  <br />
                  <span className="text-lg opacity-60">{el.en}</span>
                </td>
                <td className="p-4">{el.question}</td>
                <td className="p-4">{el.analogy}</td>
                <td className="p-4">{el.example}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-12">
          <div className="flex justify-center mb-12">
            <HarnessDiagram
              labels={{
                context: {
                  ...DEFAULT_DIAGRAM_LABELS.context,
                  note: ["“대표님, 우리 회사 단가표, 거래처 성향, 사내 용어.", "이걸 모르면 남의 회사 답변이 나옵니다.”"],
                },
                verify: {
                  ...DEFAULT_DIAGRAM_LABELS.verify,
                  note: ["“AI가 틀릴 수 있다는 걸", "전제로, 틀린 걸 잡아내는", "장치입니다. 여기가 빠지면", "결국 아무도 안 씁니다.”"],
                },
                control: {
                  ...DEFAULT_DIAGRAM_LABELS.control,
                  note: ["“3백만원 넘는 건은 사람이 승인하고 넘어간다.", "이런 규칙이 들어가는 자리입니다.”"],
                },
                tools: {
                  ...DEFAULT_DIAGRAM_LABELS.tools,
                  note: ["“말만 하는 AI와 ERP를 직접 조회하는", "AI는 다른 물건입니다.”"],
                },
              }}
            />
          </div>
          <p className="font-black text-3xl mb-5 text-[#D62F2F]">하네스 없는 AI 도입이 실패하는 패턴</p>
          <div className="grid grid-cols-2 gap-5">
            {FAILURE_PATTERNS.map((f) => (
              <div key={f.title} className={`border-4 border-brutal-black p-6 ${f.bg}`}>
                <p className="font-black text-3xl mb-2">{f.title}</p>
                <p className="text-2xl font-bold mb-2">&ldquo;{f.quote}&rdquo;</p>
                <ul className="text-xl leading-relaxed list-disc pl-6">
                  {f.desc.split(". ").map((sentence, i, arr) => (
                    <li key={i}>{i < arr.length - 1 ? `${sentence}.` : sentence}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-black text-3xl mb-5 text-[#1D6FD1]">컨설팅 제안(&ldquo;귀사 업무에 맞는 하네스를 설계해 드립니다&rdquo;)</p>
          <table className="w-full border-4 border-brutal-black bg-brutal-cream text-2xl text-left">
            <thead className="bg-brutal-cream">
              <tr>
                <th className="p-4 border-b-4 border-brutal-black">단계</th>
                <th className="p-4 border-b-4 border-brutal-black">하는 일</th>
                <th className="p-4 border-b-4 border-brutal-black">산출물</th>
              </tr>
            </thead>
            <tbody>
              {PROPOSAL_STEPS.map((row) => (
                <tr key={row.step} className="border-t-2 border-brutal-black first:border-t-0 align-top">
                  <td className="p-4 font-black whitespace-nowrap">{row.step}</td>
                  <td className="p-4">{row.work}</td>
                  <td className="p-4">{row.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 border-4 border-brutal-black bg-brutal-blue/40 p-6 brutal-shadow-sm">
            <p className="text-2xl leading-relaxed">
              <strong className="text-[1.7rem]">컨설팅 단가의 상승.</strong>{" "}
              &ldquo;AI로 만들어드립니다&rdquo;는 외주 개발자 포지션이고, 단가가 결과물의 크기에 묶인다.
              반면 &ldquo;<u>귀사 업무에 맞는 하네스를 설계해 드립니다</u>&rdquo;는 컨설턴트 포지션이다.
            </p>
            <p className="mt-8 text-2xl leading-relaxed">
              <strong className="text-[1.7rem]">고급화와 전문화.</strong>{" "}
              솔루션 납품·제공이 아니라 시스템 전체 설계용역으로 포지션이 바뀐다.
              컨설팅 단가가 전체 체계에 묶이므로 같은 일을 하고도 훨씬 고급적이고 전문적이다.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button onClick={onNext} className="brutal-btn bg-brutal-yellow px-8 py-4 text-xl">
            전체 강의 로드맵 보기 →
          </button>
        </div>

        <p className="-mt-4 text-center text-xl opacity-60">
          &copy; 2026 주식회사 에이아이캠프. All rights reserved.
        </p>
      </div>
    </div>
  );
}
