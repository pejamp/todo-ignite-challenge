import { v4 as uuidv4 } from 'uuid';

export const initialTasks = [
  {
    id: uuidv4(),
    title: "Assistir todas as aulas",
    isDone: false
  },
  {
    id: uuidv4(),
    title: "Terminar desafio",
    isDone: false
  },
  {
    id: uuidv4(),
    title: "Responder o Quiz",
    isDone: false
  }
]