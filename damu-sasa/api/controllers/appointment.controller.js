import Appointment from "../models/appointment.model.js";

import createError from "../utils/createError.js";

export const createAppointment = async (req, res, next) => {
  if (req.isNurse)
    return next(createError(403, "Only Nurses Can create a Appointment"));

  const newAppointment = new Appointment({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    next(err);
  }
};
export const deleteAppointment = async (req, res, next) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).send("Appointment has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getAppointments = async (req, res, next) => {
  try {
    const Appointments = await Appointment.find();
    res.status(200).send(Appointments);
  } catch (err) {
    next(err);
  }
};
