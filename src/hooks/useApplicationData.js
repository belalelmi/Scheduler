import { useState, useEffect } from 'react';
import axios from 'axios';


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    const apiDays = axios.get(`/api/days`);
    const apiAppointments = axios.get(`/api/appointments`);
    const apiInterviewers = axios.get(`/api/interviewers`)
    Promise.all([
      Promise.resolve(apiDays),
      Promise.resolve(apiAppointments),
      Promise.resolve(apiInterviewers)
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }))
      });
  }, []);

  const bookInterview = (id, interview) => {
    const updateDay = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );

    const day = {
      ...state.days.find((day) => day.name === state.day),
      spots: state.days[updateDay].spots - 1,
    };

    const days = state.days;
    days[updateDay] = day;

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState((state) => { return { ...state, appointments, days } });
      })
  };

  const cancelInterview = (id, interview) => {

    const updateDay = state.days.findIndex((day) =>
      day.appointments.includes(id)
    );

    const day = {
      ...state.days.find((day) => day.name === state.day),
      spots: state.days[updateDay].spots + 1,
    };

    const days = state.days;
    days[updateDay] = day;

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState((state) => { return { ...state, appointments, days } });
      })
  }

  return { state, setDay, bookInterview, cancelInterview }
}
