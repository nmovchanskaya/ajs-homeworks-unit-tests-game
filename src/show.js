export default function showHealth(person) {
  if (person.health > 50) {
    return 'healthy';
  }
  if (person.health > 15) {
    return 'wounded';
  }

  return 'critical';
}
