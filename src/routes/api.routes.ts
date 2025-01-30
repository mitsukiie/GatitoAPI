import { Router } from 'express';
import { updateData, getData } from '../controllers/data.controller';
import { updateCommands, getCommands } from '../controllers/commands.controller';

const router = Router();

// Rotas para /api/data
router.post('/data', updateData);
router.get('/data', getData);

// Rotas para /api/commands
router.post('/commands', updateCommands);
router.get('/commands', getCommands);

export default router;