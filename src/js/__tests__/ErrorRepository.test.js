import ErrorRepository from '../ErrorRepository';

test('Метод translate должен вурнуть код ошибки', () => {
  const errRepo = new ErrorRepository();
  errRepo.errors.set(1, 'Первая ошибка');

  expect(errRepo.translate(1)).toBe('Первая ошибка');
});

test('Метод translate должен вурнуть "Unknown error", если передать несуществующий код ошибки', () => {
  const errRepo = new ErrorRepository();
  errRepo.errors.set(1, 'Первая ошибка');

  expect(errRepo.translate(5)).toBe('Unknown error');
});
