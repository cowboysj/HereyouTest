import { HttpResponse, http } from 'msw';

import { baseURL } from '@/apis/api';
import { API_PATH } from '@/constants/path';

export const travelHandlers = [
  http.get(`${baseURL}${API_PATH.FAVORITE_TRAVELS}`, (req, res, ctx) => {
    const travels = [
      { id: 1, title: '다빈' },
      { id: 2, title: '준하' },
      { id: 3, title: '수진' },
      { id: 4, title: '다인' },
      { id: 5, title: '용민' },
    ];
    return HttpResponse.json(travels);
  }),
];
