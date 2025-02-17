import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { updateData, fetchData } from '../controllers/data.controller';
import { updateCommands, fetchCommands } from '../controllers/commands.controller';

const router = Router();

// Rotas para /api/data
router.post('/data', authenticate, updateData);
router.get('/data', fetchData);

// Rotas para /api/commands
router.post('/commands', authenticate, updateCommands);
router.get('/commands', fetchCommands);

export default router;