import { Router } from "express";

import { getAnimeList, getAnimeById } from "../controllers/controllers";

const router: Router = Router();

router.get("/api/anime", getAnimeList)

router.get("/api/anime/:id", getAnimeById)

export default router;