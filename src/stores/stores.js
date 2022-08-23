import { createServiceEffect, createServiceStore } from './index';
import { apiURL } from '../const';

export const fetchConfig = createServiceEffect(
  async () => fetch(`${apiURL()}/config`),
  'fetch/config'
);

export const $config = createServiceStore(fetchConfig, null);

export const fetchStatus = createServiceEffect(
  async () => fetch(`${apiURL()}/status`),
  'fetch/status'
);

export const $status = createServiceStore(fetchStatus, null);

export const fetchBalances = createServiceEffect(
  async () => fetch(`${apiURL()}/balances`),
  'fetch/balances'
);

export const $balances = createServiceStore(fetchBalances, null);

export const fetchSensors = createServiceEffect(
  async () => fetch(`${apiURL()}/sensors`),
  'fetch/sensors'
);

export const $sensors = createServiceStore(fetchSensors, null);

export const updateSensor = createServiceEffect(
  async (params) =>
    fetch(`${apiURL()}/sensors`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    }),
  'update/sensor'
);

$sensors.on(updateSensor.doneData, (state, { params }) => {
  console.log(params);
  const { result } = state;
  const { Enabled } = params;
  const index = result.findIndex(({ Id }) => Id === params.Id);
  result[index].Enabled = Enabled;
  return { ...state, result };
});
