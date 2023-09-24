import { getConnection } from "./../databases/database";

//BUSCAR TODOS
const getLanguages = async (req, res) => {
     try {
          const connection = await getConnection();
          const result = await connection.query("SELECT id, name, programmers FROM language");

          res.json(result);
     } catch (error) {
          res.status(500);
          res.send(error.message);
     }

};

// BUSCAR POR ID
const getLanguageById = async (req, res) => {
     try {
          console.log(req.params);
          const {id} =req.params;
          const connection = await getConnection();
          const result = await connection.query("SELECT id, name, programmers FROM language WHERE id=?",id);

          res.json(result);
     } catch (error) {
          res.status(500);
          res.send(error.message);
     }

};


// ELIMINAR POR ID
const deleteLanguageById = async (req, res) => {
     try {
          console.log(req.params);
          const { id } = req.params;
          const connection = await getConnection();
          const result = await connection.query("DELETE FROM language WHERE id=?", id);

          res.json(result);
     } catch (error) {
          res.status(500);
          res.send(error.message);
     }

};

// MODIFICAA POR ID
const updateLanguageById = async (req, res) => {
     try {
          console.log(req.params);
          const { id } = req.params;
          const { name, programmers } = req.body;
          if (id === undefined || name === undefined || programmers === undefined) {
               res.status(400).json({ message: "completa los campos" })
          }
          const language = {id, name, programmers};
          const connection = await getConnection();
          const result = await connection.query("UPDATE language SET ? WHERE id=?", [language,id]);

          res.json(result);
     } catch (error) {
          res.status(500);
          res.send(error.message);
     }

};
// INSERTAR
const addLanguages = async (req, res) => {
     try {
          const { name, programmers } = req.body;
          if (name === undefined || programmers === undefined) {
               res.status(400).json({ message: "completa los campos" })
          }
          const language = { name, programmers };
          const connection = await getConnection();
          await connection.query("INSERT INTO language SET ?", language);
          res.json({message: "dato agregado"});


          
     } catch (error) {
          res.status(500);
          res.send(error.message);
     }
}
export const methods = {
     getLanguages,
     addLanguages,
     getLanguageById,
     deleteLanguageById,
     updateLanguageById
};