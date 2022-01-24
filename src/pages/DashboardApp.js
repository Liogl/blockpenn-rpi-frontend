import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { $config, $status, fetchStatus } from '../stores/stores';
// components
import Page from '../components/Page';
import {
  AppFullNodeActive,
  AppLastBlockInGeth,
  AppNetworkId,
  AppLastBlockInApp
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  useEffect(() => {
    fetchStatus();
  }, []);
  const config = useStore($config);
  const status = useStore($status);

  return (
    <Page title="Dashboard | BlockPenn RPi">
      <Container maxWidth="xl">
        <Box sx={{ pb: 1 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          Address:
          <Typography variant="overline" display="block">
            <i>{config.result === null ? '' : config.result.EthAddress}</i>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppLastBlockInApp block={status.result === null ? '' : status.result.AppLastBlock} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppLastBlockInGeth block={status.result === null ? '' : status.result.GethLastBlock} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppFullNodeActive
              active={status.result === null ? '' : status.result.FullNodeActiveAt}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNetworkId id={config.result === null ? '' : config.result.NetworkId} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
