
import React, { useState } from 'react';

export const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    field: '매수 문의',
    method: '대면 미팅 (강남 오피스)',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-lg p-12 bg-white rounded-3xl shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl text-gold">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-navy mb-4">상담 신청이 완료되었습니다.</h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            한서윤 대표가 24시간 이내에 기재해주신 번호로 직접 연락드릴 예정입니다. 조금만 기다려주세요.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-navy text-white px-8 py-3 rounded font-bold hover:bg-navy-light transition-premium"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Consultation</span>
            <h1 className="text-5xl font-bold text-navy mb-8 leading-tight">
              지금 바로 전문가의<br />통찰력을 빌려보세요.
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              성공적인 투자는 올바른 첫걸음에서 시작됩니다. 
              부동산 전문가 한서윤 대표가 직접 1:1 심층 상담을 진행합니다.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <span className="text-gold font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">심층 니즈 파악</h3>
                  <p className="text-gray-500">투자 목적, 예산 범위, 리스크 선호도 등을 한서윤 대표가 직접 분석합니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <span className="text-gold font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">맞춤형 전략 제시</h3>
                  <p className="text-gray-500">10년의 노하우를 바탕으로 최적의 포트폴리오 전략을 제안합니다.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <span className="text-gold font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">매물 매칭 및 실행</h3>
                  <p className="text-gray-500">전략에 부합하는 엄선된 매물을 매칭하고 거래 전 과정을 책임집니다.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-navy rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-full border-2 border-gold mr-4 object-cover" alt="한서윤 대표" />
                <div>
                  <h4 className="font-bold text-lg">한서윤 대표</h4>
                  <p className="text-sm text-gold font-medium">010-9143-0800</p>
                  <p className="text-xs text-gray-400">10년 경력 프리미엄 부동산 자산관리 전문가</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic">"단 한 건의 거래를 위해서가 아닌, 평생의 자산 파트너가 되기 위해 진심을 다합니다. 10년의 통찰로 당신의 자산 가치를 증명하겠습니다."</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">성함</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="홍길동"
                    className="w-full bg-gray-50 border border-gray-200 rounded px-5 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">연락처</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="010-0000-0000"
                    className="w-full bg-gray-50 border border-gray-200 rounded px-5 py-3 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">상담 분야</label>
                <select 
                  value={formData.field}
                  onChange={(e) => setFormData({...formData, field: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-5 py-3 focus:outline-none focus:border-gold"
                >
                  <option>매수 문의</option>
                  <option>매도 의뢰</option>
                  <option>자산 진단</option>
                  <option>세무 및 법률</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">상담 방식</label>
                <div className="flex gap-4">
                  {['대면 미팅 (강남 오피스)', '유선/화상 상담'].map(method => (
                    <label key={method} className={`flex-1 flex items-center justify-center p-3 border rounded cursor-pointer transition-premium ${formData.method === method ? 'bg-navy text-white border-navy' : 'bg-white text-gray-500 border-gray-200 hover:border-gold'}`}>
                      <input 
                        type="radio" 
                        className="hidden" 
                        name="method"
                        checked={formData.method === method}
                        onChange={() => setFormData({...formData, method: method})}
                      />
                      <span className="text-sm font-medium">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">상담 희망 내용</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="관심 지역, 자산 종류 등 대략적인 내용을 적어주시면 더 원활한 상담이 가능합니다."
                  className="w-full bg-gray-50 border border-gray-200 rounded px-5 py-3 focus:outline-none focus:border-gold"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-white font-bold py-5 rounded-lg transition-premium shadow-lg text-lg"
              >
                무료 1차 상담 신청하기
              </button>
              
              <p className="text-xs text-center text-gray-400">
                기재해주신 정보는 상담 목적으로만 사용되며 법적으로 보호받습니다.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
