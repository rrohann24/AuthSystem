import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test route for admin only access
router.get("/test", requireSignIn, isAdmin, testController);

//protected route for user access
router.get("/user-auth", requireSignIn,(req,res)=>{
  res.status(200).send({ok: true});
});

//protected route for admin only access
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
