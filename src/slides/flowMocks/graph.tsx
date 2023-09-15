import ReactFlow, { Edge, MarkerType, Node } from "reactflow";

const initialNodes : Node[] = [
  {
    id: '1',
    data: {
      label: 'System under test'
    },
    position: {x: 0, y: 100}
  },
  {
    id: '2',
    data: {
      label: 'Service bus front door'
    },
    position: {x: 200, y: 0}
  }, 
  {
    id: '3',
    data: {
      label: 'Data base'
    },
    position: {x: 200, y: 200},
    draggable: true
  }
]

const initialEdges : Edge[] = [
  {
    id: 'ed-2',
    label: 'send notification / mock',
    source: '2',
    target: '1',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    }
  },
  {
    id: 'ed-3',
    label: 'send notification / stub',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    }
  }
]

export const Graph = ()=>(
  <ReactFlow nodes={initialNodes} edges={initialEdges} fitView/>
)
