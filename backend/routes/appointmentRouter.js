import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { cancelAppointment, confirmPayment, createAppointment, getAppointments,getAppointmentsByDoctor,getAppointmentsByPatient,getRegisteredUserCount,getStats, updateAppointment } from '../controllers/appointmentControllers.js';

const appointmentRouter = express.Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);
appointmentRouter.get("/patients/count", getRegisteredUserCount);


// authentic routes
appointmentRouter.post("/", clerkMiddleware(), requireAuth(), createAppointment);
appointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getAppointmentsByPatient);

appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;
