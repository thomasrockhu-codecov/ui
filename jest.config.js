module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.mocks.js'],
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'md'],
  transformIgnorePatterns: [
    'node_modules/(?!(@statecharts|@storybook|react-syntax-highlighter)/.*)',
  ],
  moduleNameMapper: {
    '\\.(mdx?)$': '<rootDir>/src/mdMock.ts',
  },
  transform: {
    '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
};
