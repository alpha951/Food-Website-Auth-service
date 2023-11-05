/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const PORT = Config.PORT;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
