
import { Category, Listing, SuccessStory } from './types';

export const COLORS = {
  NAVY: '#1A2E44',
  GOLD: '#C5A059',
};

export const LISTINGS: Listing[] = [
  {
    id: 1,
    title: '한남 더 힐 펜트하우스',
    location: '용산구 한남동',
    price: '120억',
    category: Category.RESIDENTIAL,
    description: '남산과 한강을 동시에 조망할 수 있는 최상위 하이엔드 주거 단지입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: '강남구 신사동 꼬마빌딩',
    location: '강남구 신사동',
    price: '250억',
    category: Category.BUILDING,
    description: '유동인구가 풍부한 가로수길 인근, 공실 위험 없는 안정적인 수익형 건물입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: '제주 애월 리조트 부지',
    location: '제주시 애월읍',
    price: '85억',
    category: Category.LAND,
    description: '해안도로 인근으로 즉시 개발이 가능한 미래 가치 확실한 토지입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    title: '시장 하락기 20% 수익률 방어',
    summary: '강남권 오피스 빌딩 매입 및 밸류업 프로젝트',
    details: '고금리 상황에서도 임차인 재구성 및 리모델링을 통해 자산 가치를 유지하고 안정적인 캐시플로우를 확보했습니다.',
    result: '매입가 대비 25% 가치 상승',
    imageUrl: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: '복잡한 종중 재산 매각 해결',
    summary: '법률 및 세무 리스크가 얽힌 대규모 토지 컨설팅',
    details: '10년의 노하우로 복잡한 권리 관계를 조정하고 세무 최적화를 통해 성공적인 매각을 이끌어냈습니다.',
    result: '예상 매각가 대비 15% 높은 가격 낙찰',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
  },
];
