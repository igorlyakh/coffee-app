import axios, { AxiosError } from 'axios';
import { atom } from 'jotai';
import { API_URL } from '../api/api';
import { FilteredCoffee, FilterRequest } from './filter.model';

export interface FilterState {
  coffee: FilteredCoffee[] | null;
  isLoading: boolean;
  error: string | null;
  text: string;
  type: string; // '' = все
}

const INITIAL_STATE: FilterState = {
  coffee: null,
  isLoading: false,
  error: null,
  text: '',
  type: '', // пустая строка = все категории
};

const _storageAtom = atom<FilterState>(INITIAL_STATE);

export const filterAtom = atom(
  get => get(_storageAtom),
  async (get, set, update?: FilterRequest) => {
    const prev = get(_storageAtom);

    // Объединяем новый фильтр с предыдущим состоянием
    const text = update?.text ?? prev.text ?? '';
    const type = update?.type ?? prev.type ?? '';

    // Ставим лоадер, сохраняем текущие text / type
    set(_storageAtom, {
      ...prev,
      text,
      type,
      isLoading: true,
      error: null,
    });

    try {
      const { data } = await axios.get<FilteredCoffee[]>(API_URL, {
        params: {
          text, // строка поиска
          type, // '', 'cappuccino', 'latte', 'macchiato', 'americano'
        },
      });

      set(_storageAtom, {
        ...prev,
        text,
        type,
        coffee: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(_storageAtom, {
          ...prev,
          text,
          type,
          isLoading: false,
          coffee: null,
          error: error.response?.data?.message ?? 'Unknown error',
        });
      } else {
        set(_storageAtom, {
          ...prev,
          text,
          type,
          isLoading: false,
          coffee: null,
          error: 'Unknown error',
        });
      }
    }
  }
);
