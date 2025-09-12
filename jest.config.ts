import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  // 👇 this is the key
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default createJestConfig(config);
