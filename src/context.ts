// PostgreSQL Enum type comes as user-defined. As a result it should be handled manually.
export default {
  // `global` key contains general data. It is sent to all templates.
  global: {
    schema: true,
  },
  // `typeGlobal` key contains data specific to types. It is sent to all templates
  // related to given type of database objects.
  typeGlobal: {
    // For example, data below are sent to all tables.
    tables: {
      sequelizeTypes: {
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
      },
      diagramTypes: {
        array: "Array",
        bigint: "Number",
        bigserial: "Number",
        bit: "String",
        "bit varying": "String",
        boolean: "Boolean",
        box: "String",
        bytea: "String",
        character: "String",
        "character varying": "String",
        cidr: "String",
        circle: "String",
        citext: "String",
        date: "DateONLY",
        "double precision": "Number",
        hstore: "Object",
        inet: "String",
        integer: "Number",
        interval: "String",
        json: "Object",
        jsonb: "Object",
        line: "String",
        lseg: "String",
        macaddr: "String",
        money: "Number",
        numeric: "Number",
        path: "String",
        point: "String",
        polygon: "String",
        real: "Number",
        smallint: "Number",
        smallserial: "Number",
        serial: "Number",
        text: "String",
        "time without time zone": "String",
        "time with time zone": "String",
        "timestamp without time zone": "Date",
        "timestamp with time zone": "Date",
        tsquery: "String",
        tsvector: "String",
        txid_snapshot: "String",
        uuid: "String",
        xml: "String",
        "user-defined": "String",
        int4range: "String",
        int8range: "String",
        numrange: "String",
        tsrange: "String",
        tstzrange: "String",
        daterange: "String",
      },
    },
  },
  // Database object specific data. Data below sent to templates related to
  // specific named objects of specific type.
  tables: {
    // Data below sent only to `public.product` table.
    "public.product": {
      // This data can be used in template related to `public.product` only. Access using: `x.attributes.price.default`
      attributes: { price: { default: 10.5 } },
    },
    "public.color": {
      extra: { someBoolean: true, message: `Hello world. It's a "good" day.` },
    },
  },
};
