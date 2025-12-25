
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMarketInsight } from '../services/geminiService';

export const Home = () => {
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    setIsLoading(true);
    const result = await getMarketInsight(aiQuery);
    setAiResponse(result || '');
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-gold/20 backdrop-blur-md border border-gold/30 px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              <span className="text-gold font-bold text-sm tracking-widest">부동산 전문가 한서윤 대표</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              10년의 통찰로 당신의<br />
              <span className="text-gold">자산 가치</span>를 증명합니다.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed font-light">
              한서윤 대표의 데이터 기반 자산 최적화 전략을 제시합니다.<br />
              상위 1%를 위한 프리미엄 부동산 파트너.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/listings" className="bg-gold hover:bg-gold-light text-white px-8 py-4 rounded font-bold text-center transition-premium shadow-xl">
                매물 확인하기
              </Link>
              <Link to="/consultation" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded font-bold text-center transition-premium">
                한서윤 대표와 1:1 상담
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl font-bold mb-8 text-navy leading-tight">
                정보의 홍수 속에서 진짜<br />
                '가치 있는' 매물을 찾고 계신가요?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                시중에는 넘쳐나는 정보가 있지만, 실제 자산가들이 필요로 하는 핵심 정보는 숨겨져 있습니다. 
                복잡한 세무와 법률 리스크, 예측하기 어려운 시장 변동성은 큰 자산을 관리할수록 더 큰 고민이 됩니다.
              </p>
              <div className="bg-gray-50 p-8 border-l-4 border-gold">
                <p className="text-xl font-medium text-navy italic">
                  "한서윤 대표는 단순한 거래를 넘어, 고객의 자산이 가진 고유의 미래 가치를 극대화하는 솔루션을 제공합니다."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: '데이터 기반 시세 분석', desc: '한서윤 대표의 10년 시장 지표와 빅데이터를 통한 정확한 가치 평가.' },
                { title: '비공개 매물 네트워크', desc: '한서윤 대표가 단독 확보한 시장 미노출 우량 수익형/주거용 매물.' },
                { title: '전 과정 리스크 관리', desc: '취득부터 매각까지 한서윤 대표의 법률/세무 리스크 솔루션.' }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-premium rounded-lg group">
                  <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Market Insight Widget */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#C5A059" d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.7,-17.3,90.2,-2.1C89.6,13.1,84.1,28.3,75.2,41.2C66.3,54.1,54.1,64.7,40.1,72.3C26.1,79.9,10.3,84.5,-4.4,92.1C-19.1,99.7,-32.7,110.3,-44.6,108.7C-56.5,107.1,-66.7,93.3,-74.6,79.6C-82.5,65.9,-88.1,52.3,-91.3,38.2C-94.5,24.1,-95.3,9.5,-92.5,-4.4C-89.7,-18.3,-83.3,-31.5,-73.9,-42.6C-64.5,-53.7,-52.1,-62.7,-39,-70.2C-25.9,-77.7,-12.9,-83.7,0.7,-85.1C14.3,-86.5,28.6,-83.3,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 italic font-serif tracking-tight">Expert AI Agent (by 한서윤)</h2>
            <p className="text-gray-400 text-lg">한서윤 대표의 인사이트가 학습된 AI에게 실시간 시장 트렌드에 대해 물어보세요.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleAiAsk} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="예: 강남 꼬마빌딩 투자 트렌드에 대해 알려줘" 
                className="flex-grow bg-white/10 border border-white/20 rounded px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder:text-gray-500"
              />
              <button 
                disabled={isLoading}
                className="bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded transition-premium disabled:opacity-50"
              >
                {isLoading ? '분석 중...' : '문의하기'}
              </button>
            </form>
            {aiResponse && (
              <div className="bg-white/5 border border-white/10 p-8 rounded-lg animate-fade-in">
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
            <div>
              <div className="text-5xl font-bold text-navy mb-3">5,800억+</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">누적 거래액</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-navy mb-3">92%</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">고객 재의뢰율</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-navy mb-3">10년</div>
              <p className="text-gray-500 uppercase tracking-widest text-sm">무사고 전문 중개</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-2xl relative">
              <span className="absolute top-8 left-8 text-6xl text-gold/20 font-serif">"</span>
              <p className="text-2xl text-navy font-medium mb-8 leading-relaxed relative z-10 italic">
                한서윤 대표님의 통찰력 있는 분석 덕분에 최적의 타이밍에 매수할 수 있었습니다. 단순한 중개인이 아닌 든든한 자산 관리 파트너를 만난 기분입니다.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <span className="text-gold font-bold">K</span>
                </div>
                <div>
                  <p className="font-bold text-navy">서초동 건물주 김OO 님</p>
                  <p className="text-sm text-gray-500">한서윤 대표와 2023년 강남역 인근 빌딩 밸류업 프로젝트 협업</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
