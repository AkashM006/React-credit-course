import Exp1 from "./exp-1/Main";
import Exp2 from "./exp-2/Main";
import Exp3 from "./exp-3/Main";
import Exp4 from "./exp-4/Card";
import Api from "./api/Api";
import Validation from "./validation/Main";
import Rest from "./rest";
import Calculator from "./Calculator";
import Toggle from "./ToggleButton/Toggle";
import Props from "./propsExp/Main";

const routes = [
  {
    id: 1,
    path: "/exp-1",
    element: <Exp1 />,
    title: "Experiment-1",
    to: "/exp-1",
  },
  {
    id: 2,
    path: "/exp-2",
    element: <Exp2 />,
    title: "Experiment-2",
    to: "/exp-2",
  },
  {
    id: 3,
    path: "/exp-3",
    element: <Exp3 />,
    title: "Experiment-3",
    to: "/exp-3",
  },
  {
    id: 4,
    path: "/exp-4",
    element: <Exp4 />,
    title: "Experiment-4",
    to: "/exp-4",
  },
  {
    id: 5,
    path: "/api-example",
    element: <Api />,
    title: "API Example",
    to: "/api-example",
  },
  {
    id: 6,
    path: "/validation",
    element: <Validation />,
    title: "Validation",
    to: "/validation",
  },
  {
    id: 7,
    path: "/rest/*",
    element: <Rest />,
    title: "REST API",
    to: "/rest",
  },
  {
    id: 8,
    path: "/calculator",
    element: <Calculator />,
    title: "Calculator",
    to: "/calculator",
  },
  {
    id: 10,
    path: "/toggle",
    element: <Toggle />,
    title: "Toggle Button",
    to: "/toggle",
  },
  {
    id: 11,
    path: "/props",
    element: <Props />,
    title: "Props",
    to: "/props",
  },
];

export default routes;
