import { handlers, handlers2 } from './handlers';
import { setupWorker } from 'msw/browser';

const worker = setupWorker(...handlers2);

export default worker;
