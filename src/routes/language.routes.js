import { Router, request, response } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router=Router();

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguageById);
router.post("/", languageController.addLanguages);
router.delete("/:id", languageController.deleteLanguageById);
router.put("/:id", languageController.updateLanguageById);
export default router;