import withMessage from './withMessage';
import testWithMessage from './testWithMessage';

global.expect = withMessage(global.expect);
global.test = testWithMessage(global.test);
