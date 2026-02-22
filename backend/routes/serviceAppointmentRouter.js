import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import { cancelServiceAppointment, confirmServicePayment, createServiceAppointment, getServiceAppointmentByPatient, getServiceAppointments, getServiceAppointmentStats, getServicesAppointmentById, updateServiceAppointment } from "../controllers/serviceAppointmentController.js";


const serviceAppointmentRouter = express.Router();

serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServicePayment);
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats);

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment);

serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getServiceAppointmentByPatient);

serviceAppointmentRouter.get("/:id", getServicesAppointmentById);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);
serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment);

export default serviceAppointmentRouter;