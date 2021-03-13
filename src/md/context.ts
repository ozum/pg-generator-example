import { jsTypes } from "../utils";

/**
 * This is an example context file provided by sub-generator. User also may add a custom context file using options.
 * It is a good practice to document context file using comments.
 * `pg-generator` have a few optional special keys. If this example contains any special keys, we added [KEYWORD:xxx]
 * to show the reader it is a special key. Other keys are named as you wish. They will be available in templates.
 */
export default {
  /** [KEYWORD: global] Value of the `global` key is sent to all templates. */
  global: {
    /**
     * Data type mapping for mermaid. They are used to create mermaid schemas.
     * We prefer to store mappings in external files to share them between sub-generators.
     */
    diagramTypes: jsTypes,
  },
};
