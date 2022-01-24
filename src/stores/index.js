import { createEffect, createStore } from 'effector';
import { errorReducer, loadingReducer, successReducer } from '../utils/reducers';

export const initialServiceState = {
  loading: false,
  result: null,
  error: null
};

export const createServiceStore = (effect, initialResult) =>
  createStore({ ...initialServiceState, result: initialResult })
    .on(effect, loadingReducer)
    .on(effect.done, successReducer)
    .on(effect.fail, errorReducer);

export const createServiceEffect = (asyncFn, name) =>
  createEffect(name, {
    handler: async (params) => {
      const answer = await asyncFn(params);
      console.log(answer);
      const body = await answer.json();
      console.log(body);
      if (answer.status === 204) {
        return Promise.resolve(true);
      }
      if (answer.status !== 200) {
        return Promise.reject(body.code || 1);
      }
      return Promise.resolve(body);
    }
  });
