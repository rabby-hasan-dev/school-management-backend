"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    default_password: process.env.DEFAULT_PASS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
    super_admin_email: process.env.SUPER_ADMIN_EMAIL,
    super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
    nodemailer_user_email: process.env.NODEMAILER_USER_EMAIL,
    nodemailer_user_app_pass: process.env.NODEMAILER__USER_APP_PASSWORD,
    nodemailer_sender_email_address: process.env.NODEMAILER__SENDER_EMAIL_ADDRESS,
    // cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    // cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    // cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};
