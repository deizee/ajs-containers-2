import ErrorRepository from '../ErrorRepository';

test('Метод translate должен вурнуть код ошибки', () => {
  const errRepo = new ErrorRepository();
  errRepo.errors.set(1, 'Первая ошибка');

  expect(errRepo.translate(1)).toBe('Первая ошибка');
})