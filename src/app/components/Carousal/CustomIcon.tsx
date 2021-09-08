import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export interface ICustomIconsProps {}

function CustomIcons({ iconName, className }) {
  return <div className={className}>{renderSwitch(iconName)}</div>;
}

function renderSwitch(param) {
  switch (param) {
    case 'chevron':
      return <Chevron />;
    case 'arrow-pager':
      return <ArrowPager />;
    default:
      return 'foo';
  }
}
function Chevron(props: SvgIconProps) {
  const { className, style, onClick } = props;

  return (
    <SvgIcon
      {...props}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <g
        id="Asset-Artboard-Page"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="icon-arrow-icon/chevron"
          transform="translate(4.500000, 8.000000) rotate(-90.000000) translate(-4.500000, -8.000000) translate(-3.000000, 4.000000)"
        >
          <rect fill="#12161A" x="0" y="0" width="15" height="8" />
          <polyline
            id="icon/chevron"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(7.435547, 4.000000) rotate(-90.000000) translate(-7.435547, -4.000000) "
            points="10.6855469 10.7708333 4.18554687 4 10.6855469 -2.77083333"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

function ArrowPager(props: SvgIconProps) {
  const { className, style, onClick } = props;
  return (
    <SvgIcon
      {...props}
      className={className}
      style={{ ...style, width: '13px', height: '13px' }}
      onClick={onClick}
      viewBox="0 -1.5 5 13"
    >
      <path
        d="M0 10l5-5.001L0 0"
        stroke="currentColor"
        strokeWidth={3}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default React.memo(CustomIcons);
