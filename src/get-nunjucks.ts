import { join } from "path";
import { filterFunctions } from "pg-generator";
import nunjucks, { Environment } from "nunjucks";

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
  // Create `nunjucks` environment and add given generator's templates directory to environment.
  const environment = new nunjucks.Environment(new nunjucks.FileSystemLoader(join(generatorPath, "templates")), { autoescape: false });

  // Add filters provided by `pg-generator` to `nunjucks`. Filters are not nunjucks spesific.
  // Many template engines have similar mechanism. You can use filters with difffernet template engines too.
  Object.entries(filterFunctions).forEach(([name, filterFunction]) => environment.addFilter(name, filterFunction));

  return environment;
}
