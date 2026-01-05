import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Mail-i / WebKeeper / DB-i / WSG-VA 개발 및 유지보수',
      startedAt: '2024-04',
      endedAt: '2026-01',
      where: '소만사',
      descriptions: [
        {
          content:
            '삼성 사이트 커스터마이징으로 개인정보관련 암·복호화 DB 함수를 개발하고, AOP를 적용하여 파라미터 자동 주입 및 옵션화 처리',
        },
        {
          content:
            'Swagger API 명세 분석을 통해 WSG-VA TProxy/Server/CA 인증서 등록 및 삭제 기능 구현',
        },
        {
          content: 'DB-i SQL 로그 상세 페이지에서 차단 정책을 자동으로 생성하는 기능 구현',
        },
        {
          content: 'MQTT 기반 메시지 수신 및 처리 기능 구현',
        },
      ],
    },
    {
      title: 'WSG-VA 세션 로그 기반 대시보드 및 리포트 개발',
      startedAt: '2025-07',
      endedAt: '2025-08',
      where: '소만사',
      descriptions: [
        {
          content:
            '세션 상태 변화에 따른 운영 현황과 추이를 개별 로그 조회 없이 파악하기 어려운 문제가 존재',
          descriptions: [
            {
              content:
                '세션 상태·사용자·정책·서버 정보를 기준으로 건수 및 상태를 집계하여 운영 현황을 한눈에 파악할 수 있는 대시보드·리포트 화면 구현',
            },
            {
              content:
                'Elasticsearch에 저장된 세션 로그 데이터를 기반으로 대시보드는 기본 5분 단위, 리포트는 일 단위로 집계·가공하여 제공',
            },
            {
              content:
                'PostgreSQL 인덱스 설계 및 부모-자식 관계 테이블 구성 적용으로 대용량 데이터 조회 성능 고려',
            },
          ],
        },
      ],
    },
    {
      title: '정책 생성 및 결재 UX 개선',
      startedAt: '2025-01',
      endedAt: '2025-06',
      where: '소만사',
      descriptions: [
        {
          content:
            '정책 생성 구조 분리로 가시성이 떨어지고, 결재 단계에서 불필요한 항목으로 운영 혼선이 발생',
          descriptions: [
            {
              content:
                '정책 생성 화면에서 탐지 규칙·패턴·속성을 하나의 흐름으로 구성하여 정책 생성 및 관리 가시성 향상',
            },
            {
              content:
                'DB-i 정책 결재 요청 시 편집 가능 항목을 제한하여 잘못된 결재 요청 발생 가능성을 감소',
            },
            {
              content:
                'WAS-i HTTP Payload 관련 신규 정책을 개발하여 에이전트 단 정책 적용 범위 확장',
            },
          ],
        },
      ],
    },
    {
      title: '유니스터디 PHP 기반 웹 시스템의 Spring Boot 기반 전환',
      startedAt: '2023-05',
      endedAt: '2024-02',
      where: '아이비김영',
      descriptions: [
        {
          content: '운영자 계정 등록·수정·삭제 및 접속 이력 관리 기능 구현',
        },
        {
          content: 'Spring Interceptor를 활용한 권한별 접근 제어 적용으로 관리자 기능 보안 강화',
        },
        {
          content:
            'Spring Security 설정을 커스터마이징하여 로그인 실패 처리 및 사용자 안내 방식 개선',
        },
        {
          content: '교재 입출고 및 재고 현황 관리 화면을 구현하여 재고 관리 업무 효율 개선',
        },
        {
          content:
            '사이트 배너, 영역, 이벤트를 운영자가 직접 관리할 수 있는 관리 페이지를 개발하여 콘텐츠 운영 효율 향상',
        },
        {
          content:
            '드래그 앤 드롭 방식의 3단계 메뉴 관리 화면을 개발하여 메뉴 및 콘텐츠 관리 편의성 개선',
        },
        {
          content:
            '쿠폰, 포인트, 캐시, 웰컴팩 등 사용자 혜택 관리 기능을 개발하여 마케팅 및 운영 정책 적용을 지원',
        },
        {
          content: '환불 요청 처리, 이벤트 관리, 게시판 운영 기능 구현',
        },
        {
          content: 'KT SMS 및 AWS SES 연동을 통해 문자·메일 발송 기능과 관리 화면 구현',
        },
        {
          content:
            'AWS EC2 환경에서 Bastion 서버를 활용해 Redis를 구성하고, SSH 터널링을 통한 안전한 접근 환경 설정',
        },
        {
          content:
            'Thymeleaf 조각 템플릿을 활용해 고객센터 상담 화면을 개발하여 상담 업무 운영 효율 향상',
        },
      ],
    },
    {
      title: '라이나생명 보험사 프로젝트 QA 시스템 개발 및 유지보수',
      startedAt: '2020-11',
      endedAt: '2023-04',
      where: '라이나생명',
      descriptions: [
        {
          content:
            '노후화된 배치 시스템을 신규 환경으로 이전하고, 배치 실행·상태·오류를 관리할 수 있는 관리 화면을 개발하여 운영 편의성 개선',
        },
        {
          content:
            '불완전 판매 방지를 위한 사전 QA 프로세스를 구축하고, QA 상태 관리 및 마감일 관리 화면을 구현해 업무 누락 방지',
        },
        {
          content:
            'STT 기반 텍스트 정규식 검출 방식으로 자동 평가 시스템 개발, 평가 시간 50% 이상 단축',
        },
        {
          content:
            'QA 겸직자 정보 오류 방지를 위해 기간계 시스템과 EAI 연계 처리로 데이터 정확도 및 실시간 동기화 확보',
        },
        {
          content:
            '하드코딩된 권한 제어 로직을 RBAC 구조로 전환하여 권한 관리 체계화 및 유지보수성 개선',
        },
        {
          content:
            '공통 권한 테이블과 Auth/Full 모드 지원 구조를 구현하여 사용자 유형별 접근 제어 체계 확립',
        },
        {
          content: '재택근무 보안 체크리스트를 시스템화하여 수작업 오류를 줄이고 보안 리스크 감소',
        },
        {
          content: '채팅 상담 내용 조회 및 자동 평가에 추가하여 상담 품질 모니터링 체계 구축',
        },
        {
          content:
            'DAMO 라이브러리를 활용한 인코딩·디코딩 REST API를 구현하여 라이선스 비용 절감에 기여',
        },
      ],
    },
  ],
};

export default project;
