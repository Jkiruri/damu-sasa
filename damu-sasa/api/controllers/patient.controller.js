import Patient from "../models/patient.model.js";

import createError from "../utils/createError.js";

export const createPatient = async (req, res, next) => {
  if (req.isNurse)
    return next(createError(403, "Only Nurses Can create a patient"));

  const newPatient = new Patient({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    next(err);
  }
};
export const deletePatient = async (req, res, next) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(200).send("Patient has been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).send(patients);
  } catch (err) {
    next(err);
  }
};
