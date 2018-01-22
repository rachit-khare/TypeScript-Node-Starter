import * as express from "express";
import * as homeController from "./controllers/home";

const router = express.Router();

/**
 * Primary app routes.
 */
router.get("/", homeController.index);
router.get("/find", homeController.find);

module.exports = router;