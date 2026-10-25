<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 작업 방식

## 커밋과 푸시

"커밋해", "푸시해", "커밋하고 푸시해" — 셋 중 무엇이든 **남은 변경을 전부 담아 커밋하고 푸시한다.** 어떤 파일을 담을지, 메시지를 어떻게 쓸지 되묻지 않는다.

- 작업 트리에 남은 프로젝트 파일은 전부 스테이징한다. `package-lock.json`처럼 작업과 직접 관련 없는 파일도 포함한다. 빼두면 그 파일만 영영 올라가지 않은 채 남는다.
- 성격이 다른 변경이 섞여 있으면 커밋을 나누되 전부 푸시한다 (예: 기능 `feat:` + 의존성 `chore:`).
- 지시 없이 먼저 커밋·푸시하지 않는다. 트리거는 사용자의 말이다.
- 메시지 형식: `<type>: <한글 설명>` (feat, fix, refactor, docs, test, chore, perf, ci)
- 푸시 후 `git status -sb`로 남은 변경이 없는지 확인하고 결과만 간단히 보고한다.

사용자는 개발자가 아니다. `git add` 범위나 스테이징 확인 같은 세부를 사용자에게 묻거나 설명하게 만들지 않는다.

## 기록에 쓰는 말

커밋 메시지, 태그 메시지, 화면 문구에는 **사용자가 말한 것만** 넣는다. 코드나 화면에서 읽은 정보를 추측해 보태지 않는다. 배경 설명이 필요해 보이면 답변에서만 언급한다.

## 질문

요청한 작업이 끝난 턴은 질문 없이 닫는다. 결정할 것이 없으면 묻지 않는다. 특히 작업과 무관한 파일이나 상태를 두고 "이건 어떻게 할까요?"라고 묻지 않는다. 제외했다면 그 사실만 한 줄로 알린다.
