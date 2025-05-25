import db from "./database.js";

const testDB = async () => {
  try {
    const res = await db.query("SELECT * FROM product_43");
    console.log("res", JSON.stringify(res.rows));
  } catch (error) {
    console.error(error);
  }
};

testDB();