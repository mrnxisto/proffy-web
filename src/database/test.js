const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  // Inserir dados

  proffyValue = {
    name: "Marina Xisto",
    avatar: "https://avatars0.githubusercontent.com/u/60436034?s=460&v=4",
    whatsapp: "080000800",
    bio:
      "Formada em Artes Cênicas (Licenciatura) pela USP e estudo Ciência da Computação pela Universidade Cruzeiro do Sul. Apaixonada por arte, educação e tecnologia. Gosto de aprender coisas novas e compartilhar o que sei.",
  };

  classValue = {
    subject: 1,
    cost: "20",
  };

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  // await createProffy(db, { proffyValue, classValue, classScheduleValues})

  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `);
  // console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `);

  // console.log(selectClassesSchedules)
});
