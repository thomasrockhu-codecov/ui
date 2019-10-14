module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFiles: ['./jest.enzyme.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'md'],
  moduleNameMapper: {
    '\\.(md)$': '<rootDir>/src/mdMock.ts',
  },
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.tsx?$': 'babel-jest',
  },
};
