import { sequelizeTypes } from "../utils";

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
     * We added an attribute called "addSchemaName". It has no special meaning, and you can choose
     * any name as you wish. We used "addSchemaName" in templates to determine whether to add schema
     * names to class names.
     * See an example in "templates/table/{schema.name # dash-case}.{name # dash-case}.js.njk" file.
     * It is accesed using "addSchemaName". "o" contains database objects and "c" contains extra
     * context data provided by files.
     */
    addSchemaName: true,
    /**
     * Data type mapping for sequelize. They are used to create add sequelize types to generated files.
     * We prefer to store mappings in external files to share them between sub-generators.
     */
    sequelizeTypes,
  },
  /**
   * [KEYWORD: tables] Values under "tables" key is sent to templates related to corresponding table.
   */
  tables: {
    /**
     * Data below only sent to templates related to `public.product` table.
     */
    "public.product": {
      /**
       * This data can be used in template related to `public.product` only. Access using: `attributes.price.default`
       * For usage example see "defaultValue" in "templates/table/partials/columns.njk" file
       * For result see "defaultValue" of "price" column in generated "public.product.js" file.
       */
      attributes: { price: { default: 10.5 } },
      extra: { someBoolean: true, message: `Hello world. It's a "good" day.` },
    },
  },
};
