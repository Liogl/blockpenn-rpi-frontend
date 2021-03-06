import { Icon } from '@iconify/react';
import moment from 'moment';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import connect2 from '@iconify/icons-si-glyph/connect-2';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppFullNodeActive(props) {
  const { active } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={connect2} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{moment(active).startOf('minute').fromNow()}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Full node active
      </Typography>
    </RootStyle>
  );
}
