import ReactFlow from "reactflow";
import { initialEdges, initialNodes } from "./data";

export const MockGraph = ()=> (
  <ReactFlow 
    fitView
    nodes={initialNodes} 
    edges={initialEdges} 
  />
)
