export const humanFriendlyDate = (timestamp: string) => {
  const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  const date = new Date(timestamp);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
