import * as express from "express";
import * as homeController from "./controllers/home";

const router = express.Router();

/**
 * Primary app routes.
 */
router.get("/", homeController.index);

module.exports = router;