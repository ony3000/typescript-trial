import { sandbox } from '../../../lib/util';

export default function () {
  sandbox(
    'Boolean',
    require('./boolean').default,
  );
  sandbox(
    'Number',
    require('./number').default,
  );
  sandbox(
    'String',
    require('./string').default,
  );
  sandbox(
    'Array',
    require('./array').default,
  );
  sandbox(
    'Tuple',
    require('./tuple').default,
  );
  sandbox(
    'Enum',
    require('./enum').default,
  );
  sandbox(
    'Unknown',
    require('./unknown').default,
  );
  sandbox(
    'Any',
    require('./any').default,
  );
  sandbox(
    'Void',
    require('./void').default,
  );
  sandbox(
    'Null and Undefined',
    require('./null-and-undefined').default,
  );
  sandbox(
    'Never',
    require('./never').default,
  );
  sandbox(
    'Object',
    require('./object').default,
  );
  sandbox(
    'Type assertions',
    require('./type-assertions').default,
  );
}
