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
//
import { $sensors, fetchSensors } from '../stores/stores';

// ----------------------------------------------------------------------

export default function Sensor() {
  useEffect(() => {
    fetchSensors();
  }, []);
  const sensors = useStore($sensors);
  let lst = [];
  if (sensors.result !== null) {
    lst = sensors.result;
  }
  return (
    <Page title="Sensors | BlockPenn RPi">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Sensors
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="left">Active at</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lst.map((row) => {
                    const { ID, Type, Atime } = row;
                    return (
                      <TableRow key={ID}>
                        <TableCell align="left">
                          <b>{ID}</b>
                        </TableCell>
                        <TableCell align="left">{Type}</TableCell>
                        <TableCell align="left">{Atime}</TableCell>
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
