import Boweman from '../boweman';

test('проверка персонажа-лучника', () => {
  const unit1 = new Boweman('лучник');
  const unit2 = {
    name: 'лучник',
    type: 'Boweman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit1).toEqual(unit2);
});

test('проверка по длине имени у персонажа Лучника', () => {
  const unit1 = () => new Boweman(1, 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('Проверка по длине имени у персонажа лучника', () => {
  const unit1 = () => new Boweman('Q', 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка по длине имени у персонажа лучника', () => {
  const unit1 = () => new Boweman('Luuuchniiikkkkk', 'Boweman');
  expect(unit1).toThrow("the character's name must contain letters from 2 to 10 characters");
});

test('проверка класса персонажа лучника', () => {
  const unit1 = () => new Boweman('unit', 'luchnik');
  expect(unit1).toThrow('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});
