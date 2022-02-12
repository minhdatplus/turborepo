import { resolve as _resolve } from 'path';

export const resolve = {
  alias: {
    libs: _resolve(__dirname, 'libs/'),
    components: _resolve(__dirname, 'components/'),
  },
};