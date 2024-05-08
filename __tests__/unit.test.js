// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Valid phone number should return true', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('Valid phone number should return true', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(isPhoneNumber("1234-567-890")).toBe(false);
});

test('Invalid phone number should return false', () => {
  expect(isPhoneNumber("123_456_7890")).toBe(false);
});

test('Valid email should return true', () => {
  expect(isEmail("example@example.com")).toBe(true);
});

test('Valid email should return true', () => {
  expect(isEmail("example123@example.edu")).toBe(true);
});

test('Invalid email should return false', () => {
  expect(isEmail("example@example.")).toBe(false);
});

test('Invalid email should return false', () => {
  expect(isEmail("example@.")).toBe(false);
});

test('Valid password should return true', () => {
  expect(isStrongPassword("Pass_1234")).toBe(true);
});

test('Valid password should return true', () => {
  expect(isStrongPassword("A123_abcde")).toBe(true);
});

test('Invalid password should return false', () => {
  expect(isStrongPassword("123456")).toBe(false);
});

test('Invalid password should return false', () => {
  expect(isStrongPassword(",))")).toBe(false);
});

test('Valid date should return true', () => {
  expect(isDate("12/25/2023")).toBe(true);
});

test('Valid date should return true', () => {
  expect(isDate("1/1/2024")).toBe(true);
});

test('Invalid date should return false', () => {
  expect(isDate("012/12/2023")).toBe(false);
});

test('Invalid date should return false', () => {
  expect(isDate("12/25/23")).toBe(false);
});

test('Valid hex color should return true', () => {
  expect(isHexColor("#0F0")).toBe(true);
});

test('Valid hex color should return true', () => {
  expect(isHexColor("#FF00FF")).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(isHexColor("#G00")).toBe(false);
});

test('Invalid hex color should return false', () => {
  expect(isHexColor("123_ABC")).toBe(false);
});