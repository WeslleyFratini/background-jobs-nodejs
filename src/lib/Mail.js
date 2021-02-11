import nodemailer from "nodemailer";
import mailConfig from "../app/config/Mail";

export default nodemailer.createTransport(mailConfig);
