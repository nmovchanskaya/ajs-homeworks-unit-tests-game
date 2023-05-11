import showHealth from '../show.js';

test('test healthy', () => {
  const health = showHealth({ name: 'Маг', health: 90 });
  expect(health).toBe('healthy');
});

test('test wounded', () => {
  const health = showHealth({ name: 'Apr', health: 20 });
  expect(health).toBe('wounded');
});

test('test critical', () => {
  const health = showHealth({ name: 'Jan', health: 10 });
  expect(health).toBe('critical');
});
