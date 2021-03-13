import { jsTypes, jsonSchemaTypes } from "../utils";

/**
 * This is an example context file provided by sub-generator. User also may add a custom context file using options.
 * It is a good practice to document context file using comments.
 */
export default {
  /**
   * [KEYWORD: global] Value of the `global` key is sent to all templates.
   */
  global: {
    /**
     * Base library to get Model object from.
     */
    library: "objection",
    /**
     * We added an attribute called "addSchemaName". It has no special meaning, and you can choose
     * any name as you wish. We used "addSchemaName" in templates to determine whether to add schema
     * names to class names.
     * See an example in "templates/table/{schema.name # dash-case}.{name # dash-case}.js.njk" file.
     * It is accesed using "addSchemaName". "o" contains database objects and "c" contains extra
     * context data provided by files.
     */
    addSchemaName: true,
    /**
     * Provide a base model class for generated models to extend.
     * Add your `baseModel` in your custom context file if you wish.
     */
    baseModel: undefined,

    /**
     * Data type mappings for several schemas and libraries. They are used for converting
     * PostgreSQL tyoes to related schema's or library's types.
     * We prefer to store mappings in external files to share them between sub-generators.
     */
    jsTypes,
    jsonSchemaTypes,
  },
};
