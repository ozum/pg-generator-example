export const sequelizeTypes = {
  array: ".ARRAY",
  bigint: ".BIGINT",
  bigserial: ".BIGINT",
  bit: ".CHAR", // Not directly supported in Sequelize
  "bit varying": ".STRING", // Not directly supported in Sequelize
  boolean: ".BOOLEAN",
  box: ".STRING", // Not directly supported in Sequelize
  bytea: ".BLOB",
  character: ".CHAR",
  "character varying": ".STRING",
  cidr: ".STRING", // Not directly supported in Sequelize
  circle: ".STRING", // Not directly supported in Sequelize
  citext: ".CITEXT",
  date: ".DATEONLY",
  "double precision": ".FLOAT",
  hstore: ".HSTORE",
  inet: ".STRING", // Not directly supported in Sequelize
  integer: ".INTEGER",
  interval: ".STRING", // Not directly supported in Sequelize
  json: ".JSON",
  jsonb: ".JSONB",
  line: ".STRING", // Not directly supported in Sequelize
  lseg: ".STRING", // Not directly supported in Sequelize
  macaddr: ".STRING", // Not directly supported in Sequelize
  money: ".DECIMAL",
  numeric: ".DECIMAL",
  path: ".STRING", // Not directly supported in Sequelize
  point: ".STRING", // Not directly supported in Sequelize
  polygon: ".STRING", // Not directly supported in Sequelize
  real: ".REAL",
  smallint: ".INTEGER",
  smallserial: ".INTEGER",
  serial: ".INTEGER",
  text: ".TEXT",
  "time without time zone": ".TIME",
  "time with time zone": ".TIME",
  "timestamp without time zone": ".DATE",
  "timestamp with time zone": ".DATE",
  tsquery: ".STRING", // Not directly supported in Sequelize
  tsvector: ".STRING", // Not directly supported in Sequelize
  txid_snapshot: ".STRING", // Not directly supported in Sequelize
  uuid: ".UUID",
  xml: ".STRING", // Not directly supported in Sequelize
  "user-defined": ".STRING", // Not directly supported in Sequelize
  int4range: ".RANGE('INTEGER')",
  int8range: ".RANGE('BIGINT')",
  numrange: ".RANGE('DECIMAL')",
  tsrange: ".RANGE('DATENOTZ')",
  tstzrange: ".RANGE('DATE')",
  daterange: ".RANGE('DATEONLY')",
};
