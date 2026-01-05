import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 및 백엔드 개발자로서 보안 솔루션, 학습 관리 시스템(LMS), 자동화 도구를 개발·운영하며 운영 환경에서 발생하는 이슈를 분석하고 안정적으로 처리하는 역할을 수행해 왔습니다. 기능 구현뿐 아니라, 실제 운영 과정에서 발생하는 오류와 예외 상황을 확인하고 이를 보완하는 데 집중해 왔습니다.',
    '소만사에서는 Mail-i, WebKeeper, DB-i, WAS-i 등 주요 보안 솔루션의 개발 및 유지보수를 담당하며, 정책 처리 및 데이터 흐름과 관련된 오류를 점검하고 수정하여 서비스 안정성을 유지했습니다. 운영 중 발생하는 문제를 로그와 이슈 이력을 기반으로 분석하며, 동일한 문제가 다시 발생하지 않도록 코드 보완과 검증 작업을 수행했습니다. 또한 LMS 및 CMS 프로젝트에서는 사용자 흐름과 관리자 운영 방식을 고려한 기능 개선을 통해 서비스 사용성과 운영 편의성을 향상시켰습니다.',
    '최근에는 Cursor 기반 개발 환경을 활용해 반복적인 구현과 수정 작업을 효율화하며 개발 생산성을 높이고 있습니다. 자동화 도구를 활용하되, 결과물에 대해서는 직접 검토와 테스트를 거쳐 품질과 안정성을 우선하는 개발 방식을 지향합니다.',
  ],
  sign: 'Siyeon Han',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
