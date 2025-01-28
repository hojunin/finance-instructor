export type Question = {
  id: string;
  title: string;
  description: string;
  score: number;
  category: string;
  subcategory: string;
};

// 예시로 채권 관련 문제 10개만 작성하겠습니다. 나머지는 비슷한 패턴으로 확장하면 됩니다.
export const questions: Record<string, Question[]> = {
  bonds: [
    {
      id: 'bonds-1',
      title: '채권의 기본 개념',
      description: '채권의 정의와 주식과의 차이점을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-2',
      title: '채권 가격과 금리',
      description: '채권 가격과 금리의 역의 관계에 대해 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-3',
      title: '채권의 종류',
      description: '국채, 회사채, 지방채의 차이점과 각각의 특징을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-4',
      title: '채권 수익률 계산',
      description:
        '채권의 표면금리와 실효수익률의 차이를 설명하고, 계산 방법을 서술하시오.',
      score: 15,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-5',
      title: '듀레이션',
      description:
        '채권의 듀레이션이란 무엇이며, 투자에서 어떤 의미를 가지는지 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-6',
      title: '채권의 신용등급',
      description:
        '채권의 신용등급이 의미하는 바와 투자 결정에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-7',
      title: '채권 투자 전략',
      description:
        '래더링, 바벨, 불릿 전략의 차이점과 각각의 장단점을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-8',
      title: '채권과 인플레이션',
      description:
        '인플레이션이 채권 투자에 미치는 영향과 대응 전략을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-9',
      title: '전환사채',
      description: '전환사채의 특징과 일반 회사채와의 차이점을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'bonds',
    },
    {
      id: 'bonds-10',
      title: '채권 발행시장과 유통시장',
      description:
        '채권의 발행시장과 유통시장의 차이점과 각 시장의 특징을 설명하시오.',
      score: 5,
      category: 'terms',
      subcategory: 'bonds',
    },
  ],
  'monetary-policy': [
    {
      id: 'monetaryPolicy-1',
      title: '통화정책의 기본 개념',
      description: '통화정책이란 무엇이며, 중앙은행의 역할을 설명하시오.',
      score: 10,
      category: 'macro',
      subcategory: 'monetary-policy',
    },
    {
      id: 'monetaryPolicy-2',
      title: '긴축적 통화정책 vs 완화적 통화정책',
      description: '긴축적 통화정책과 완화적 통화정책의 차이점을 설명하시오.',
      score: 10,
      category: 'macro',
      subcategory: 'monetary-policy',
    },
    {
      id: 'monetaryPolicy-3',
      title: '금리 조정과 통화정책',
      description:
        '중앙은행이 금리를 조정하여 통화정책을 실행하는 방법을 설명하시오.',
      score: 10,
      category: 'macro',
      subcategory: 'monetary-policy',
    },
    {
      id: 'monetaryPolicy-4',
      title: '양적 완화',
      description: '양적 완화 정책의 목적과 효과를 설명하시오.',
      score: 10,
      category: 'macro',
      subcategory: 'monetary-policy',
    },
    {
      id: 'monetaryPolicy-5',
      title: '통화정책과 인플레이션',
      description: '통화정책이 인플레이션에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'macro',
      subcategory: 'monetary-policy',
    },
  ],
  sp500: [
    {
      id: 'sp500-1',
      title: 'S&P 500의 기본 개념',
      description: 'S&P 500 지수의 구성과 의미를 설명하시오.',
      score: 10,
      category: 'indexes',
      subcategory: 'sp500',
    },
    {
      id: 'sp500-2',
      title: 'S&P 500과 경제 지표',
      description: 'S&P 500 지수가 미국 경제를 대표하는 이유를 설명하시오.',
      score: 10,
      category: 'indexes',
      subcategory: 'sp500',
    },
    {
      id: 'sp500-3',
      title: 'S&P 500의 구성 종목',
      description: 'S&P 500 지수의 구성 종목이 선정되는 기준을 설명하시오.',
      score: 10,
      category: 'indexes',
      subcategory: 'sp500',
    },
    {
      id: 'sp500-4',
      title: 'S&P 500과 투자 전략',
      description: 'S&P 500 지수를 활용한 투자 전략을 설명하시오.',
      score: 10,
      category: 'indexes',
      subcategory: 'sp500',
    },
    {
      id: 'sp500-5',
      title: 'S&P 500의 역사적 성과',
      description: 'S&P 500 지수의 역사적 수익률과 변동성을 설명하시오.',
      score: 10,
      category: 'indexes',
      subcategory: 'sp500',
    },
  ],
  inflation: [
    {
      id: 'inflation-1',
      title: '인플레이션의 기본 개념',
      description: '인플레이션이란 무엇이며, 경제에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'inflation',
    },
    {
      id: 'inflation-2',
      title: '수요 견인 인플레이션 vs 비용 인플레이션',
      description:
        '수요 견인 인플레이션과 비용 인플레이션의 차이점을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'inflation',
    },
    {
      id: 'inflation-3',
      title: '인플레이션과 금리',
      description: '인플레이션이 금리에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'inflation',
    },
    {
      id: 'inflation-4',
      title: '인플레이션과 실업률',
      description:
        '필립스 곡선을 통해 인플레이션과 실업률의 관계를 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'inflation',
    },
    {
      id: 'inflation-5',
      title: '인플레이션 대응 정책',
      description:
        '정부와 중앙은행이 인플레이션을 통제하기 위해 사용하는 정책을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'inflation',
    },
  ],
  'interest-rate': [
    {
      id: 'interestRate-1',
      title: '금리의 기본 개념',
      description:
        '금리란 무엇이며, 금리 변동이 경제에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'interest-rate',
    },
    {
      id: 'interestRate-2',
      title: '명목 금리 vs 실질 금리',
      description:
        '명목 금리와 실질 금리의 차이를 설명하고, 인플레이션과의 관계를 서술하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'interest-rate',
    },
    {
      id: 'interestRate-3',
      title: '금리와 투자 결정',
      description: '금리 상승이 기업의 투자 결정에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'interest-rate',
    },
    {
      id: 'interestRate-4',
      title: '중앙은행과 금리 정책',
      description: '중앙은행이 금리를 조정하는 목적과 방법을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'interest-rate',
    },
    {
      id: 'interestRate-5',
      title: '금리와 채권 가격',
      description: '금리 변동이 채권 가격에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'interest-rate',
    },
  ],
  exchangeRate: [
    {
      id: 'exchangeRate-1',
      title: '환율의 기본 개념',
      description:
        '환율이란 무엇이며, 환율 변동이 경제에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'exchange-rate',
    },
    {
      id: 'exchangeRate-2',
      title: '고정 환율 vs 변동 환율',
      description:
        '고정 환율 제도와 변동 환율 제도의 차이점과 장단점을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'exchange-rate',
    },
    {
      id: 'exchangeRate-3',
      title: '환율 결정 요인',
      description: '환율을 결정하는 주요 경제적 요인들을 나열하고 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'exchange-rate',
    },
    {
      id: 'exchangeRate-4',
      title: '환율과 무역 수지',
      description: '환율 하락이 무역 수지에 미치는 영향을 설명하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'exchange-rate',
    },
    {
      id: 'exchangeRate-5',
      title: '실질 환율과 명목 환율',
      description:
        '실질 환율과 명목 환율의 차이를 설명하고, 실질 환율의 경제적 의미를 서술하시오.',
      score: 10,
      category: 'terms',
      subcategory: 'exchange-rate',
    },
  ],
};
