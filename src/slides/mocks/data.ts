import { Node } from "reactflow";

export const initialNodes : Node []= [
  { 
    id: '1', 
    position: { x: 200, y: 0 }, 
    data: { label: 'Test double' },
    style:{
      background: '#456785'
    }
  },
  { 
    id: '2', 
    position: { x: 0, y: 100 }, 
    data: { label: 'mock' } 
  },
  {
    id: '2-1',
    position: { x: 0, y: 200},
    data: {label: 'mock and spy'}
  },
  { 
    id: '3', 
    position: { x: 400, y: 100 }, 
    data: { label: 'stub' } 
  },
  { 
    id: '3-1', 
    position: { x: 400, y: 200 }, 
    data: { label: 'stub, fake, dummy' } 
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' }, 
  { id: 'el-3', source: '1', target: '3'},
  { id: 'el-2-1', source: '2', target: '2-1'},
  { id: 'el-3-1', source: '3', target: '3-1'},
];
