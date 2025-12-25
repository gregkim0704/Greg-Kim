
import React, { useState } from 'react';
import { LISTINGS } from '../constants';
import { Category } from '../types';

export const Listings = () => {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL');

  const filteredListings = filter === 'ALL' 
    ? LISTINGS 
    : LISTINGS.filter(l => l.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Curated List</span>
          <h1 className="text-5xl font-bold text-navy mb-8">당신만을 위한 익스클루시브 리스트</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button 
              onClick={() => setFilter('ALL')}
              className={`px-6 py-2 rounded-full border transition-premium font-medium ${filter === 'ALL' ? 'bg-navy text-white border-navy' : 'bg-transparent text-gray-500 border-gray-200 hover:border-navy hover:text-navy'}`}
            >
              전체 보기
            </button>
            {Object.values(Category).map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-premium font-medium ${filter === cat ? 'bg-navy text-white border-navy' : 'bg-transparent text-gray-500 border-gray-200 hover:border-navy hover:text-navy'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-premium border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={listing.imageUrl} 
                  alt={listing.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-premium"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-navy">
                  {listing.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm text-gold font-bold mb-2">{listing.location}</p>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold-dark transition-colors">{listing.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {listing.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-xl font-bold text-navy">{listing.price}</span>
                  <button className="text-sm font-bold text-gold hover:text-gold-dark transition-colors flex items-center">
                    상세 정보 요청 <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            현재 해당 카테고리의 비공개 매물을 준비 중입니다.
          </div>
        )}

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">시장에 공개되지 않은 우량 매물이 더 많이 확보되어 있습니다.</p>
          <button className="bg-navy hover:bg-navy-light text-white px-12 py-5 rounded-full font-bold transition-premium shadow-lg">
            VIP 전용 비공개 리스트 요청하기
          </button>
        </div>
      </div>
    </div>
  );
};
