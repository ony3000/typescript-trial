import { sandbox } from '../lib/util';

sandbox(
  '1-1. Basic Types',
  require('./handbook/01-basic-types').default,
);

require('./handbook/interfaces');
require('./handbook/functions');
require('./handbook/literal-types');
require('./handbook/unions-and-intersection-types');
require('./handbook/classes');
