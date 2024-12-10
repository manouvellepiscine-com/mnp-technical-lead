CREATE MIGRATION m1fyvks4kezcjpnhlmw5yfzwsw5igaan56qomigf4oewcuxrfx4adq
    ONTO initial
{
  CREATE ABSTRACT TYPE default::Timestamps {
      CREATE REQUIRED PROPERTY createdAt: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY updatedAt: std::datetime {
          SET default := (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
      CREATE INDEX ON (.createdAt);
  };
  CREATE TYPE default::Task EXTENDING default::Timestamps {
      CREATE PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY done: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY title: std::str;
  };
  CREATE TYPE default::List EXTENDING default::Timestamps {
      CREATE MULTI LINK tasks: default::Task;
      CREATE REQUIRED PROPERTY title: std::str;
  };
};
