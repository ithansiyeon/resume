import { Badge, Col, Row } from 'reactstrap';
import { DateTime } from 'luxon';

import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  // 전체 월수 계산
  const totalMonths = payload.list.reduce((total: number, item: IExperience.Item) => {
    return (
      total +
      item.positions.reduce((sum: number, position: IExperience.Position) => {
        const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
        const endedAt = position.endedAt
          ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
          : DateTime.local();

        const startedAtMonthIndex = startedAt.year * 12 + startedAt.month;
        const endedAtMonthIndex = endedAt.year * 12 + endedAt.month;

        // 시작/종료 월 포함(예: 2023-05 ~ 2024-02 => 10개월)
        const months = Math.max(0, endedAtMonthIndex - startedAtMonthIndex + 1);
        return sum + months;
      }, 0)
    );
  }, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `총 ${years}년 ${months}개월`;
}
