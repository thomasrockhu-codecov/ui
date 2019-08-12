const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const registerRequireContextHook = require('babel-plugin-require-context-hook/register');

jest.mock('framer-motion', () => {
  const React = require('react');
  const Dummy = ({ children }) =>
    React.createElement(React.Fragment, {}, ...(Array.isArray(children) ? children : [children]));

  return {
    motion: {
      span: Dummy,
    },
    AnimatePresence: Dummy,
  };
});

registerRequireContextHook();

Enzyme.configure({ adapter: new Adapter() });
