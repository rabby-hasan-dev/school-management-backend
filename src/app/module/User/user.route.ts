import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../../constant';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.get(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin, USER_ROLE.superAdmin),
  UserControllers.getMyProfile,
);
router.put(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin, USER_ROLE.superAdmin),
  multerUpload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(UserValidation.userUpdateValidationSchema),
  UserControllers.UpdateMyProfile,
);

router.get('/:userId', UserControllers.getSingleUser);

router.get(
  '/',
  auth(USER_ROLE.user, USER_ROLE.admin, USER_ROLE.superAdmin),
  UserControllers.getAllUsers,
);

router.get('/is-primium/userId', UserControllers.isPremium);

export const UsersRoutes = router;
