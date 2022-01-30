import { useEffect } from 'react';
import { useStore } from 'effector-react';
// material
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Container,
  Typography,
  TableContainer
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import { $balances, fetchBalances } from '../stores/stores';
//

// ----------------------------------------------------------------------

export default function User() {
  useEffect(() => {
    fetchBalances();
  }, []);
  const balances = useStore($balances);
  let lst = [];
  if (balances.result !== null) {
    lst = balances.result;
  }
  return (
    <Page title="Balances | BlockPenn RPi">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Balances
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">ETH Address</TableCell>
                    <TableCell align="left">Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lst.map((row) => {
                    const { Name, EthAddress, Balance } = row;
                    return (
                      <TableRow key={EthAddress}>
                        <TableCell align="left">
                          <b>{Name}</b>
                        </TableCell>
                        <TableCell align="left">
                          {EthAddress === '0x0000000000000000000000000000000000000000'
                            ? '----'
                            : EthAddress}
                        </TableCell>
                        <TableCell align="left">{Balance}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
