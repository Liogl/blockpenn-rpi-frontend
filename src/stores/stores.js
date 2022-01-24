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
