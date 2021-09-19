import test from 'ava';
import { Config } from './config.class';

test('can create an empty config object', (t) => {
  const config = new Config();
  t.truthy(config);
});
