import axios, { AxiosError } from 'axios';
import { atom } from 'jotai';
import { API_URL } from '../api/api';
import { FilteredCoffee } from './filter.model';

const INITIAL_STATE = {
  coffee: null,
  isLoading: false,
  error: null,
};

const _storageAtom = atom<FilterState>(INITIAL_STATE);

export const filterAtom = atom(
  get => get(_storageAtom),
  async (_get, set) => {
    set(_storageAtom, {
      coffee: null,
      isLoading: true,
      error: null,
    });
    try {
      const { data } = await axios.get<FilteredCoffee[]>(API_URL);
      set(_storageAtom, {
        coffee: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(_storageAtom, {
          error: error.response?.data.message,
          isLoading: false,
          coffee: null,
        });
      }
    }
  }
);

export interface FilterState {
  coffee: FilteredCoffee[] | null;
  isLoading: boolean;
  error: string | null;
}
