"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const formatRequestIds = () => {
  if (process.env.REQUEST_IDS) {
    const lines = ['\n', 'Request Ids during this test:'];
    lines.push(...process.env.REQUEST_IDS.split(','));
    return lines.join('\n');
  }

  return "";
};

const rethrowWithMessage = error => {
  const messageSuffix = formatRequestIds();
  error.message += ` ${messageSuffix}`;
  throw error;
};

var _default = test => {
  // proxy the test function
  let testProxy = Object.assign((name, fn) => {
    test(name, async () => {
      try {
        await fn();
      } catch (err) {
        rethrowWithMessage(err);
      }
    });
  }, test // clone additional properties on test
  );
  return testProxy;
};

exports.default = _default;