
export function getAppointmentsForDay(state, day) {
  const matches = [];
  const dayData = state.days.filter(eachDay => eachDay.name === day)

  if (!dayData[0]) return matches;
  for (const appointment of dayData[0].appointments) {
    matches.push(state.appointments[appointment]);
  }

  return matches;
};

export function getInterview(state, interview) {
  if (interview) {
    const interviewData = {
      student: interview.student,
      interviewer: { ...state.interviewers[interview.interviewer] }
    };
    return interviewData;
  };
  return null;
}

export function getInterviewersForDay(state, day) {
  const result = []
  const dayData = state.days.filter(eachDay => eachDay.name === day)
  if (!dayData[0]) return result;
  for (const interviwer of dayData[0].interviewers) {
    result.push(state.interviewers[interviwer]);
  }
  return result;
};