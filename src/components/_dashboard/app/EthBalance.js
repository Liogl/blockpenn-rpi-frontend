import { Icon } from '@iconify/react';
import ethereumIcon from '@iconify/icons-cib/ethereum';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
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
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function EthBalance(props) {
  const { balance } = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={ethereumIcon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{balance === null ? 'N/A' : balance.substring(0, 7)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Balance (ETH)
      </Typography>
    </RootStyle>
  );
}
