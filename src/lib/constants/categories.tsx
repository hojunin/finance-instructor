import { Bookmark, BarChart, Globe, PieChart, LineChart } from 'lucide-react';

export type CategoryItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
};

export type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: CategoryItem[];
};

export const categories: Category[] = [
  {
    id: 'terms',
    label: '주요 용어',
    icon: <Bookmark className="w-4 h-4" />,
    items: [
      {
        id: '1',
        title: '채권',
        slug: 'bonds',
        description: '채권의 기본 개념과 종류',
      },
      {
        id: '2',
        title: '환율',
        slug: 'exchange-rate',
        description: '환율의 개념과 영향',
      },
      {
        id: '3',
        title: '금리',
        slug: 'interest-rate',
        description: '금리의 의미와 경제적 영향',
      },
      {
        id: '4',
        title: '인플레이션',
        slug: 'inflation',
        description: '물가 상승과 화폐 가치',
      },
      {
        id: '5',
        title: '디플레이션',
        slug: 'deflation',
        description: '물가 하락과 경제 영향',
      },
      {
        id: '6',
        title: '유동성',
        slug: 'liquidity',
        description: '자산의 현금화 용이성',
      },
      {
        id: '7',
        title: '변동성',
        slug: 'volatility',
        description: '가격 변동의 정도',
      },
      {
        id: '8',
        title: '레버리지',
        slug: 'leverage',
        description: '차입을 통한 투자',
      },
      {
        id: '9',
        title: '배당',
        slug: 'dividend',
        description: '기업의 이익 분배',
      },
      {
        id: '10',
        title: '시가총액',
        slug: 'market-cap',
        description: '기업의 총 주식 가치',
      },
      {
        id: '11',
        title: 'GDP',
        slug: 'gdp',
        description: '국내 총생산의 이해',
      },
      {
        id: '12',
        title: '베이시스',
        slug: 'basis',
        description: '현물가격과 선물가격의 차이',
      },
    ],
  },
  {
    id: 'indexes',
    label: '주요 인덱스',
    icon: <BarChart className="w-4 h-4" />,
    items: [
      {
        id: '13',
        title: 'S&P 500',
        slug: 'sp500',
        description: '미국 주식시장 대표 지수',
      },
      {
        id: '14',
        title: 'KOSPI',
        slug: 'kospi',
        description: '한국 종합주가지수',
      },
      {
        id: '15',
        title: 'VIX',
        slug: 'vix',
        description: '변동성 지수의 이해',
      },
      {
        id: '16',
        title: '나스닥',
        slug: 'nasdaq',
        description: '미국 기술주 중심 지수',
      },
      {
        id: '17',
        title: '다우존스',
        slug: 'dow-jones',
        description: '미국 30대 기업 지수',
      },
      {
        id: '18',
        title: '니케이225',
        slug: 'nikkei225',
        description: '일본 대표 주가지수',
      },
      {
        id: '19',
        title: 'FTSE100',
        slug: 'ftse100',
        description: '영국 대표 지수',
      },
      { id: '20', title: 'DAX', slug: 'dax', description: '독일 주가지수' },
      {
        id: '21',
        title: 'CSI300',
        slug: 'csi300',
        description: '중국 본토 주가지수',
      },
      {
        id: '22',
        title: 'MSCI World',
        slug: 'msci-world',
        description: '전세계 주가지수',
      },
    ],
  },
  {
    id: 'macro',
    label: '거시경제 이론',
    icon: <Globe className="w-4 h-4" />,
    items: [
      {
        id: '23',
        title: '통화정책',
        slug: 'monetary-policy',
        description: '중앙은행의 통화정책',
      },
      {
        id: '24',
        title: '재정정책',
        slug: 'fiscal-policy',
        description: '정부의 재정정책',
      },
      {
        id: '25',
        title: '경기순환',
        slug: 'economic-cycle',
        description: '경제 순환의 이해',
      },
      {
        id: '26',
        title: '총수요와 총공급',
        slug: 'aggregate-demand-supply',
        description: '거시경제의 기본 개념',
      },
      {
        id: '27',
        title: '화폐이론',
        slug: 'monetary-theory',
        description: '화폐의 기능과 역할',
      },
      {
        id: '28',
        title: '국제수지',
        slug: 'balance-of-payments',
        description: '국가간 거래 관계',
      },
      {
        id: '29',
        title: '환율제도',
        slug: 'exchange-rate-system',
        description: '다양한 환율 정책',
      },
      {
        id: '30',
        title: '경제성장론',
        slug: 'economic-growth',
        description: '경제 성장의 요인',
      },
      {
        id: '31',
        title: '고용이론',
        slug: 'employment-theory',
        description: '노동시장의 이해',
      },
      {
        id: '32',
        title: '국제무역이론',
        slug: 'international-trade',
        description: '무역의 원리',
      },
    ],
  },
  {
    id: 'charts',
    label: '그래프 분석',
    icon: <LineChart className="w-4 h-4" />,
    items: [
      {
        id: '33',
        title: '캔들차트',
        slug: 'candle-chart',
        description: '캔들차트 읽는 법',
      },
      {
        id: '34',
        title: '이동평균선',
        slug: 'moving-average',
        description: '추세 분석의 기본',
      },
      {
        id: '35',
        title: 'MACD',
        slug: 'macd',
        description: '추세 전환점 분석',
      },
      {
        id: '36',
        title: 'RSI',
        slug: 'rsi',
        description: '과매수/과매도 분석',
      },
      {
        id: '37',
        title: '볼린저밴드',
        slug: 'bollinger-bands',
        description: '변동성 범위 분석',
      },
      {
        id: '38',
        title: '피보나치',
        slug: 'fibonacci',
        description: '되돌림 수준 분석',
      },
      {
        id: '39',
        title: '스토캐스틱',
        slug: 'stochastic',
        description: '모멘텀 지표',
      },
      {
        id: '40',
        title: '일목균형표',
        slug: 'ichimoku',
        description: '일본식 차트 분석',
      },
      {
        id: '41',
        title: '엘리엇파동',
        slug: 'elliott-wave',
        description: '파동 이론',
      },
      {
        id: '42',
        title: '포인트앤피겨',
        slug: 'point-and-figure',
        description: '가격 변화 중심 차트',
      },
    ],
  },
  {
    id: 'markets',
    label: '금융시장',
    icon: <PieChart className="w-4 h-4" />,
    items: [
      {
        id: '43',
        title: '주식시장',
        slug: 'stock-market',
        description: '주식시장의 구조',
      },
      {
        id: '44',
        title: '채권시장',
        slug: 'bond-market',
        description: '채권시장의 이해',
      },
      {
        id: '45',
        title: '선물시장',
        slug: 'futures-market',
        description: '파생상품 시장',
      },
      {
        id: '46',
        title: '옵션시장',
        slug: 'options-market',
        description: '권리 매매 시장',
      },
      {
        id: '47',
        title: '외환시장',
        slug: 'forex-market',
        description: '환율 거래 시장',
      },
      {
        id: '48',
        title: '암호화폐',
        slug: 'crypto-market',
        description: '디지털 자산 시장',
      },
      {
        id: '49',
        title: '상품시장',
        slug: 'commodity-market',
        description: '실물자산 시장',
      },
      {
        id: '50',
        title: '부동산시장',
        slug: 'real-estate-market',
        description: '부동산 투자',
      },
      {
        id: '51',
        title: 'ETF시장',
        slug: 'etf-market',
        description: '상장지수펀드',
      },
      {
        id: '52',
        title: 'P2P시장',
        slug: 'p2p-market',
        description: '개인간 대출 시장',
      },
    ],
  },
];
