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
  TableContainer,
  Switch
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
//
import { $sensors, fetchSensors, updateSensor } from '../stores/stores';

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
  function handleChange(sensor) {
    return (event) => {
      sensor.Enabled = event.target.checked;
      updateSensor(sensor);
    };
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
                    <TableCell align="left">Control</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lst.map((row) => {
                    const { ID, Type, Enabled, Atime } = row;
                    return (
                      <TableRow key={ID}>
                        <TableCell align="left">
                          <b>{ID}</b>
                        </TableCell>
                        <TableCell align="left">{Type}</TableCell>
                        <TableCell align="left">{Atime}</TableCell>
                        <TableCell align="left">
                          <Switch
                            checked={Enabled}
                            onChange={handleChange(row)}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                        </TableCell>
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
