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
                    <TableCell>ERC20 Name</TableCell>
                    <TableCell align="left">Address Data Processor</TableCell>
                    <TableCell align="left">Address ERC20</TableCell>
                    <TableCell align="left">Balance ERC20</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lst.map((row) => {
                    const { DPEthAddress, ERC20Name, ERC20EthAddress, ERC20Balance } = row;
                    return (
                      <TableRow key={DPEthAddress}>
                        <TableCell align="left">
                          <b>{ERC20Name}</b>
                        </TableCell>
                        <TableCell align="left">{DPEthAddress}</TableCell>
                        <TableCell align="left">{ERC20EthAddress}</TableCell>
                        <TableCell align="left">{ERC20Balance}</TableCell>
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
