import Character from '../character';

test('проверка по длине имени', () => {
  const unit1 = () => new Character('1', 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка по выбору класса', () => {
  const unit1 = () => new Character('unit', 'luchnik');
  expect(unit1).toThrow('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка основного персонажа', () => {
  const unit1 = new Character('лучник', 'Boweman');
  const unit2 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
  };
  expect(unit1).toEqual(unit2);
});
