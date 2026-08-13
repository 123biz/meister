"use client";

import { useEffect, useState } from "react";
import { courseMap } from "@/lib/courseMap";

const SESSION_BG = {
  done: "bg-brutal-gray",
  current: "bg-brutal-yellow",
  upcoming: "bg-brutal-gray",
};

/**
 * CourseMap — 강의 전체 3세션 로드맵. 세션 카드는 진행 상태(완료/진행중/예정)로 색이 바뀌고,
 * Session 1의 주제를 클릭하면 하위 개념 설명이 바로 아래 패널로 펼쳐진다.
 * 데스크톱 전용 레이아웃(모바일 대응 없음).
 */
export default function CourseMap({ currentSession = 2 }) {
  const [expandedTopicId, setExpandedTopicId] = useState(null);

  // 오늘 세션이 바뀌면 이전 세션에서 펼쳐뒀던 패널은 닫는다
  useEffect(() => {
    setExpandedTopicId(null);
  }, [currentSession]);

  const expandedTopic = courseMap
    .flatMap((session) => session.topics)
    .find((topic) => topic.id === expandedTopicId);

  const activeSession = courseMap.find((session) => session.id === currentSession);

  return (
    <div className="w-full max-w-[1750px] mx-auto mb-10">
      <div className="brutal-card bg-brutal-white p-8">
        <h2 className="font-black text-2xl mb-6">🗺️ 강의 전체 여정</h2>

        <div className="flex gap-6 items-stretch">
          {courseMap.map((session) => {
            const status =
              session.id < currentSession ? "done" : session.id === currentSession ? "current" : "upcoming";
            const isCurrent = status === "current";

            return (
              <div
                key={session.id}
                className={`flex-1 border-4 border-brutal-black p-6 ${SESSION_BG[status]} ${
                  isCurrent ? "brutal-shadow-sm" : ""
                }`}
              >
                <div className="flex items-baseline gap-2 mb-4 whitespace-nowrap">
                  <span className="font-black text-xl">
                    {isCurrent && "👉 "}
                    Session {session.id}
                  </span>
                  <span className="text-base font-bold text-blue-800">{session.title}</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {session.topics.map((topic) => {
                    const isExpandable = Boolean(topic.children) && isCurrent;
                    const isActive = expandedTopicId === topic.id;

                    if (!isExpandable) {
                      return (
                        <span
                          key={topic.id}
                          className="text-base font-bold px-4 py-3 border-4 border-brutal-black bg-brutal-white/70 brutal-shadow-sm whitespace-nowrap"
                        >
                          {topic.label}
                        </span>
                      );
                    }

                    return (
                      <button
                        key={topic.id}
                        onClick={() => setExpandedTopicId(isActive ? null : topic.id)}
                        className={`brutal-btn !normal-case text-base px-4 py-3 whitespace-nowrap ${
                          isActive ? "bg-brutal-pink" : "bg-brutal-white"
                        }`}
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 세부 주제가 펼쳐지지 않은 상태에서는 오늘 세션을 별도의 전체 폭 박스로 확대 표시 */}
      {!expandedTopic && activeSession && (
        <div className="brutal-card bg-brutal-white p-8 mt-12">
          <div
            className={`border-4 border-brutal-black p-10 ${SESSION_BG.current} brutal-shadow-sm animate-slide-in-up`}
          >
            <div className="flex items-baseline justify-center gap-4 mb-14 whitespace-nowrap">
              <span className="font-black text-6xl">
                👉 <span className="animate-blink">Session {activeSession.id}</span>
              </span>
              <span className="text-3xl font-bold text-blue-800">{activeSession.title}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {activeSession.topics.map((topic) => (
                <span
                  key={topic.id}
                  className="text-3xl font-bold px-8 py-5 border-4 border-brutal-black bg-brutal-white/70 brutal-shadow-sm whitespace-nowrap"
                >
                  {topic.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {expandedTopic && (
        <div className="brutal-card bg-brutal-white p-8 mt-12">
          <div className="border-4 border-brutal-black bg-brutal-cream p-7 animate-slide-in-up">
            <div className="font-black text-3xl mb-3">{expandedTopic.label}</div>
            <p className="text-xl font-semibold mb-6 opacity-90">{expandedTopic.desc}</p>

            <div className="flex flex-wrap gap-5">
              {expandedTopic.children.map((child) => (
                <div key={child.label} className="w-80 border-2 border-brutal-black bg-brutal-white p-5">
                  <div className="font-black text-2xl mb-3">{child.label}</div>
                  <div className="text-lg font-semibold opacity-80">{child.desc}</div>
                  {child.note && <div className="mt-2 text-lg font-black text-brutal-pink">{child.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
