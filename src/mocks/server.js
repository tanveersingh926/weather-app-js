import { rest } from "msw";
import { setupServer } from "msw/node";
import oneCallRes from "./mockOnecallRes";
import mockRes from "./mockWeatherRes";

const server = setupServer(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(ctx.json(mockRes));
    }
  ),

  rest.get(
    "https://api.openweathermap.org/data/3.0/onecall",
    (req, res, ctx) => {
      return res(ctx.json(oneCallRes));
    }
  )
);

export default server;
