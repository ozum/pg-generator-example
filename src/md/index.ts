/* eslint-disable class-methods-use-this */
import { PgGenerator, Context } from "pg-generator";
import merge from "lodash.merge";
import { getNunjucks } from "../get-nunjucks";
import generatorContext from "../context";
import { mdToSVG } from "../converter";

const nunjucks = getNunjucks(__dirname);

/**
 * Example `pg-generator` generator which creates sequelize models.
 */
export default class Md extends PgGenerator {
  /**
   * Returns a context data including sequelize data types
   * and some other examples.
   */
  protected context(): Record<string, any> {
    return generatorContext;
  }

  /**
   * Render method which uses a nunjucks template. You can use any template engine.
   * `pg-generator` is template engine agnostic.
   */
  protected async render(templatePath: string, context: Context): Promise<string> {
    const md = nunjucks.render(templatePath, merge(context));
    // Convert diagrams into SVG.
    return mdToSVG(md);
  }
}
