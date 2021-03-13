import { join } from "path";
import { filterFunctions } from "pg-generator";
import nunjucks, { Environment } from "nunjucks";
import * as customFilters from "./custom-filters";

/**
 * This function is not related to `pg-generator`. It creates `nunjucks` template engine environment
 * for the given generator and adds filters provided by `pg-generator`.
 * `pg-generator` is template agnostic, you can use any template engine.
 *
 * @param generatorPath is the path of the generator.
 *
 * @see https://mozilla.github.io/nunjucks
 */
export function getNunjucks(generatorPath: string): Environment {
  // Create `nunjucks` environment.
  const environment = new nunjucks.Environment(
    // Add given sub-generator path and shared "partials" path to the list of template paths.
    new nunjucks.FileSystemLoader([join(generatorPath, "templates"), join(__dirname, "../partials")]),
    { autoescape: false }
  );

  // Add pg-generator built-in filters and custom filters to nunjucks.
  // Filters are not nunjucks specific, many template engines have a similar mechanism.
  const filters = { ...filterFunctions, ...customFilters };
  Object.entries(filters).forEach(([name, filter]) => environment.addFilter(name, filter));

  return environment;
}
