module default {

  abstract type Timestamps {
    required property createdAt -> datetime {
        readonly := true;
        default := datetime_of_statement();
        rewrite insert using (datetime_of_statement());
    }
    required property updatedAt -> datetime {
        default := datetime_of_statement();
        rewrite update using (datetime_of_statement());
    }

    index on (.createdAt);
  }

  type List extending Timestamps {
    required title:str;
    
    multi tasks:Task;
  }


  type Task extending Timestamps  {
    required title:str;
    description:str;

    required done: bool {
      default := false;
    }
  }
}