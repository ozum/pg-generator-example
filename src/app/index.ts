/* eslint-disable class-methods-use-this */
import { PgGenerator } from "pg-generator";

/**
 * Example `pg-generator` generator which creates uses several sub-generators.
 */
export default class App extends PgGenerator {
  /**
   * Example of executing other sub generators.
   */
  protected async init(): Promise<any> {
    return Promise.all([
      this.composeWith(require.resolve("../md")),
      this.composeWith(require.resolve("../sequelize6")),
      this.composeWith(require.resolve("../report")),
    ]);
  }
}
