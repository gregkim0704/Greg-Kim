
import React from 'react';
import { SUCCESS_STORIES } from '../constants';

export const SuccessStories = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Records</span>
          <h1 className="text-5xl font-bold text-navy mb-8">결과로 증명하는<br />10년의 기록</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            우리의 실력은 화려한 수식어가 아닌 실제 고객의 수익률과 성과로 증명됩니다. 
            다양한 위기 상황과 복잡한 문제들을 해결해온 사례들을 만나보세요.
          </p>
        </div>

        <div className="space-y-24">
          {SUCCESS_STORIES.map((story, idx) => (
            <div key={story.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={story.imageUrl} alt={story.title} className="w-full h-[500px] object-cover" />
                <div className="absolute bottom-8 right-8 bg-gold text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-80">최종 결과</p>
                  <p className="text-xl font-bold">{story.result}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-gold font-bold text-lg mb-2 block">Case {story.id < 10 ? `0${story.id}` : story.id}</span>
                <h2 className="text-4xl font-bold text-navy mb-6">{story.title}</h2>
                <h3 className="text-xl font-bold text-navy-light mb-4">{story.summary}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {story.details}
                </p>
                <button className="border-b-2 border-gold text-navy font-bold pb-1 hover:text-gold transition-premium">
                  상세 전략 보고서 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-gray-50 py-20 rounded-3xl">
          <h2 className="text-3xl font-bold text-navy mb-6">귀하의 자산도 성공 사례가 될 수 있습니다.</h2>
          <p className="text-gray-500 mb-10 text-lg">지금 바로 전문가의 진단을 받아보세요.</p>
          <div className="flex justify-center gap-6">
            <button className="bg-navy text-white px-10 py-4 rounded font-bold hover:bg-navy-light transition-premium">
              자산 진단 신청
            </button>
            <button className="border border-navy text-navy px-10 py-4 rounded font-bold hover:bg-navy hover:text-white transition-premium">
              상담 예약
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
