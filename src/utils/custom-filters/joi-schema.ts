/* eslint-disable no-use-before-define, @typescript-eslint/no-unused-vars */
import type { Table, Column, EnumType } from "pg-structure";

const types: Record<string, any> = {
  array: processArray,
  bigint: processInteger,
  bigserial: processInteger,
  bit: null,
  "bit varying": null,
  boolean: processBoolean,
  box: null,
  bytea: null,
  character: processString,
  "character varying": processString,
  cidr: processIP,
  circle: null,
  date: processDate,
  "double precision": processNumeric,
  hstore: null,
  inet: processIP,
  integer: processInteger,
  interval: null,
  json: processJSON,
  jsonb: processJSON,
  line: null,
  lseg: null,
  macaddr: null,
  money: processNumeric,
  numeric: processNumeric,
  path: null,
  point: null,
  polygon: null,
  real: processNumeric,
  smallint: processInteger,
  smallserial: processInteger,
  serial: processInteger,
  text: processText,
  "time without time zone": processTime,
  "time with time zone": null,
  "timestamp without time zone": processTimestamp,
  "timestamp with time zone": null,
  tsquery: null,
  tsvector: null,
  txid_snapshot: null,
  uuid: processUUID,
  xml: null,
  "user-defined": null,
};

// Regex Source:: https://rgxdb.com/r/2LE6429J
const timeRegex =
  "^(?:(?:(?:0?[1-9]|1[0-2])(?::|.)[0-5]d(?:(?::|.)[0-5]d)? ?[aApP][mM])|(?:(?:0?d|1d|2[0-3])(?::|.)[0-5]d(?:(?::|.)[0-5]d)?))$";

// const formats = {
//     macaddr: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
//     bit: '^[10]*$',
//     uuid: '[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}'
// };

const skipKey = ["xcreated_at", "xupdated_at"];

interface Options {
  exclude?: string[];
  jsonAsString?: boolean;
  defaultValueOptional?: boolean;
}

/**
 * Returns Joi schema with column names as keys, string representation of Joi schema as values for given table.
 * @param   {Object}    table                                 - pg-structure table object.
 * @param   {Object}    [options]                             - Options
 * @param   {string[]}  [options.exclude]                     - Column names to exclude
 * @param   {boolean}   [options.jsonAsString=false]          - Whether json and jsonb types are expected as a string
 * @param   {boolean}   [options.defaultValueOptional=false]  - Whether to make columns with default values optional
 * @returns {Object}                                          - Joi schema with column names as keys, string representation of Joi schema as values. i.e. { name: 'Joi.string()' }
 */
export function joiSchema(table: Table, { exclude = [], jsonAsString, defaultValueOptional }: Options = {}): Record<string, any> {
  const schema: Record<string, any> = {};

  table.columns
    .filter((column) => !exclude.includes(column.name))
    .forEach((column) => {
      const columnSchema = processColumn(column, { exclude, jsonAsString, defaultValueOptional });
      if (columnSchema) schema[column.name] = columnSchema;
    });

  return schema;
}

function processColumn(column: Column, options: Options): string | undefined {
  if (skipKey.indexOf(column.name) > -1 || !types[column.type.name]) return undefined;

  if (column.isSerial) return processInteger(column);

  let columnSchema = "";
  const method = types[column.type.name];

  if (typeof method === "function") {
    columnSchema = method(column, options);
  }

  if (column.notNull && (!options.defaultValueOptional || column.default === null)) {
    columnSchema += ".required()";
  }

  return columnSchema;
}

function processInteger(column: Column): string {
  // const limit = Math.pow(2, column.precision) / 2;
  if (column.precision) {
    const limit = 2 ** column.precision / 2;
    return `Joi.number().integer().min(${column.isSerial ? 1 : -limit}).max(${limit - 1})`;
  }
  return `Joi.number().integer()`;
}

function processString(column: Column): string {
  return `Joi.string().max(${column.length})`;
}

function processText(column: Column): string {
  let property = "Joi.string()";

  if (column.length) {
    property += `.max(${column.length})`;
  }
  return property;
}

function processDate(column?: Column): string {
  return "Joi.date()";
}

function processTime(column: Column): string {
  return `Joi.string().regex(/${timeRegex}/, "time")`;
}

function processTimestamp(column: Column): string {
  return "Joi.string().isoDate()";
}

function processNumeric(column: Column): string {
  if (column.precision) {
    const limit = 10 ** (column.precision - (column.scale ?? 0)) - 1;
    return `Joi.number().min(${-limit}).max(${limit})`;
  }
  return `Joi.number()`;
}

function processBoolean(column: Column): string {
  return `Joi.boolean()`;
}

function processArray(column: Column): string {
  const type = types[column.type.name](column);
  return "Joi.array().items(".repeat(column.arrayDimension) + type + ")".repeat(column.arrayDimension);
}

function processIP(column: Column): string {
  return `Joi.string().ip()`;
}

function processJSON(column: Column, options: Options): string {
  // TODO: Consider custom JOI class
  return options.jsonAsString ? "Joi.string()" : "Joi.object()";
}

function processUUID(column: Column): string {
  return `Joi.string().uuid()`;
}

module.exports.process = process;
