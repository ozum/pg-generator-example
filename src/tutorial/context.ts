/**
 * This is an example context file provided by sub-generator. User also may add a custom context file using options.
 * It is a good practice to document context file using comments.
 * `pg-generator` have a few optional special keys. If this example contains any special keys, we added [KEYWORD:xxx]
 * to show the reader it is a special key. Other keys are named as you wish. They will be available in templates.
 */
export default {
  /**
   * [KEYWORD: global] Value of the `global` key is sent to all templates.
   */
  global: {
    message: "Hello",
  },

  /**
   * [KEYWORD: schemas] Value of the `schemas` key is sent to templates under `schema` directory and having the name stated by the key.
   */
  schemas: {
    /**
     * Data below only sent to templates under `schema` directory for `public` schema.
     */
    public: { message: "Hello public.product" },
  },

  /**
   * [KEYWORD: tables] Values under "tables" key is sent to templates related to corresponding table.
   */
  tables: {
    /**
     * Data below only sent to templates related to `public.product` table.
     */
    "public.product": { message: "Hello public.product" },
  },
};
