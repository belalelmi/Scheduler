
export function getAppointmentsForDay(state, day) {
  const matches = [];
  const dayData = state.days.filter(d => d.name === day)

  if (!dayData[0]) return matches;
  for (const appointment of dayData[0].appointments) {
    matches.push(state.appointments[appointment]);
  }

  return matches;
};
