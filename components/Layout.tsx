
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MarqueeBanner = () => {
  const messages = [
    "한서윤 대표 프리미엄 자산관리 솔루션",
    "금주의 하이엔드 추천 매물: 한남 더 힐 펜트하우스",
    "10년 경력의 노하우로 완성하는 자산 가치 증대",
    "상담 문의: 010-9143-0800",
    "Elite Asset 비공개 리스트 업데이트 완료",
    "강남권 빌딩 밸류업 프로젝트 성공 사례 확인 가능"
  ];

  // Repeat the content for seamless scroll
  const content = [...messages, ...messages].join(" • ");

  return (
    <div className="bg-navy-dark text-white h-10 flex items-center overflow-hidden border-b border-white/5 fixed top-0 w-full z-[60]">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[11px] md:text-xs font-light tracking-widest px-4 text-white/90 uppercase">
          {content}
        </span>
        <span className="text-[11px] md:text-xs font-light tracking-widest px-4 text-white/90 uppercase">
          {content}
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '서비스 안내', path: '/services' },
    { name: '프리미엄 매물', path: '/listings' },
    { name: '성공 사례', path: '/success-stories' },
    { name: '전문가 상담', path: '/consultation' },
  ];

  return (
    <header className={`fixed left-0 w-full z-50 transition-premium ${isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 top-0 shadow-lg' : 'bg-transparent py-6 top-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter flex items-center">
          <span className="text-gold mr-2">ELITE</span> ASSET
        </Link>
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-gold' : 'text-white/80 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link to="/consultation" className="hidden md:block bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded text-sm font-semibold transition-premium">
          상담 신청
        </Link>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-navy-dark text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-6"><span className="text-gold">ELITE</span> ASSET</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            10년의 통찰로 당신의 자산 가치를 증명합니다.<br />
            상위 1%를 위한 프리미엄 부동산 파트너.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">SERVICES</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">매수/매도 컨설팅</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">권리 분석</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">수익률 최적화</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">PAGES</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/listings" className="hover:text-white transition-colors">프리미엄 매물</Link></li>
            <li><Link to="/success-stories" className="hover:text-white transition-colors">성공 사례</Link></li>
            <li><Link to="/consultation" className="hover:text-white transition-colors">전문가 상담</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-gold">CONTACT</h4>
          <p className="text-sm text-gray-400">
            서울특별시 강남구 테헤란로 123, 45층<br />
            대표 전문가: 한서윤<br />
            T. 010-9143-0800<br />
            E. hsyon@eliteasset.com
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 ELITE Real Estate Asset Management. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">개인정보처리방침</a>
          <a href="#" className="hover:text-white">이용약관</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarqueeBanner />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
