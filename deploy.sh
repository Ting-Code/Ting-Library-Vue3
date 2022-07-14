lint-staged &&
vue-tsc --noEmit &&
vite build &&
vite build --mode test