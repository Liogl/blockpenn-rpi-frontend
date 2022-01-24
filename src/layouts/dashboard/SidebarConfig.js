import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import balanceFill from '@iconify/icons-ic/round-account-balance-wallet';
import baselineSensors from '@iconify/icons-ic/baseline-sensors';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'balances',
    path: '/dashboard/balances',
    icon: getIcon(balanceFill)
  },
  {
    title: 'sensors',
    path: '/dashboard/sensors',
    icon: getIcon(baselineSensors)
  }
];

export default sidebarConfig;
