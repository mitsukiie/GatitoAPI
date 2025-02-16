import { Router } from 'express';
import { updateData, fetchData } from '../controllers/data.controller';
import { updateCommands, fetchCommands } from '../controllers/commands.controller';

const router = Router();

// Rotas para /api/data
router.post('/data', updateData);
router.get('/data', fetchData);

// Rotas para /api/commands
router.post('/commands', updateCommands);
router.get('/commands', fetchCommands);

export default router;