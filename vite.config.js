import { defineConfig } from 'vite';
import mdPlugin , {Mode} from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    mdPlugin({
      mode: [Mode.HTML],
    }),
  ],
});