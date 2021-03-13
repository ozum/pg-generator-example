import type { Table, Column } from "pg-structure";

/**
 * Filters non-serial required columns.
 *
 * @param table is the table to get columns of.
 * @returns non-serial required columns.
 */
export function requiredColumns(table: Table): Column[] {
  return table.columns.filter((column) => !column.isSerial && column.notNull);
}
