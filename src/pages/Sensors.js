import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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

function SensorRow(props) {
  const { sensor } = props;

  function handleChange() {
    return function (event) {
      sensor.Enabled = event.target.checked;
      updateSensor(sensor);
      fetchSensors();
    };
  }
  const [open, setOpen] = useState(false);
  const [addValue, setAddValue] = useState(sensor.Add);
  const [mulValue, setMulValue] = useState(sensor.Mul);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    sensor.Add = addValue;
    sensor.Mul = mulValue;
    updateSensor(sensor);
    setOpen(false);
    fetchSensors();
  };
  const handleAddChange = (event) => {
    setAddValue(parseFloat(event.target.value));
  };
  const handleMulChange = (event) => {
    setMulValue(parseFloat(event.target.value));
  };
  const { ID, Type, Enabled, Atime } = sensor;
  return (
    <TableRow key={ID}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Calibration</DialogTitle>
        <DialogContent>
          <DialogContentText>Y=(X+Add)*Mul</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="add"
            label="Adding value"
            type="number"
            fullWidth
            variant="standard"
            value={addValue}
            onChange={handleAddChange}
          />
          <TextField
            margin="dense"
            id="mul"
            label="Multiplying value"
            type="number"
            fullWidth
            variant="standard"
            value={mulValue}
            onChange={handleMulChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <TableCell align="left">
        <b>{ID}</b>
      </TableCell>
      <TableCell align="left">{Type}</TableCell>
      <TableCell align="left">{Atime}</TableCell>
      <TableCell align="left">
        <Switch
          checked={Enabled}
          onChange={handleChange()}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Button variant="outlined" onClick={handleClickOpen}>
          calibrate
        </Button>
      </TableCell>
    </TableRow>
  );
}

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
                    <TableCell align="left">Control</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lst.map((row) => (
                    <SensorRow key={row.ID} sensor={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
