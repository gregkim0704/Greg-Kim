
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, features }: { title: string, description: string, features: string[] }) => (
  <div className="bg-white border border-gray-100 p-10 rounded-xl shadow-sm hover:shadow-xl transition-premium group">
    <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
    <ul className="space-y-4">
      {features.map((f, i) => (
        <li key={i} className="flex items-start text-sm text-gray-500">
          <span className="text-gold mr-3 mt-1">●</span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

export const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl font-bold text-navy mb-8">중개를 넘어<br />자산의 미래를 설계합니다.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            단순한 매칭 서비스를 지양합니다. 고객의 생애 주기에 맞춘 자산 포트폴리오 최적화와 
            시장 분석을 통한 선제적 대응 전략을 제공하는 것이 우리의 사명입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="매수/매도 컨설팅"
            description="고객의 포트폴리오에 맞춘 최적의 매물 제안 및 정교한 매각 전략을 수립합니다."
            features={[
              "시장 트렌드 정밀 분석 보고서 제공",
              "비공개 오프마켓 매물 단독 큐레이션",
              "가격 협상 및 계약 전 과정 서포트"
            ]}
          />
          <ServiceCard 
            title="권리 분석 및 리스크 관리"
            description="10년 노하우로 법률적, 행정적 리스크를 사전에 완벽히 차단하여 안전한 거래를 보장합니다."
            features={[
              "심층 등기 및 대장 권리 분석",
              "용도 변경 및 인허가 리스크 검토",
              "자산운용사 연계 정밀 실사 시스템"
            ]}
          />
          <ServiceCard 
            title="수익률 최적화 솔루션"
            description="노후 건물 리모델링 제안 및 임차인 구성 최적화를 통해 실질적인 가치를 상승시킵니다."
            features={[
              "MD 구성 최적화 컨설팅",
              "건물 외관 및 설비 밸류업 플랜",
              "임대 관리 및 시설 관리 대행 연계"
            ]}
          />
        </div>

        <div className="mt-20 bg-navy text-white p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">자산 관리 프로세스가 궁금하신가요?</h2>
            <p className="text-gray-400">초기 미팅부터 사후 관리까지, 투명하고 체계적인 프로세스를 공개합니다.</p>
          </div>
          <Link to="/consultation" className="bg-gold hover:bg-gold-light text-white px-10 py-4 rounded-lg font-bold transition-premium whitespace-nowrap">
            프로세스 문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};
