import { render, screen } from '@testing-library/react';
import {TestExport} from './App';

test('checking function x', () => {

  expect(TestExport.name(5)).toBe(5);
});
