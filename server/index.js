const express  = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes ////////


// createa a user

app.post("/userss",async(req,res) => {
    try {
        const {firstName,lastName,email,password} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO users (first_name, last_name, email, password) VALUES($1,$2,$3,$4) RETURNING *",
            [firstName,lastName,email,password]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
// // get all todos

// app.get("/todos",async(req,res) => {
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(allTodos.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });


// get a password

app.get('/userss', async (req, res) => {
    const { email } = req.query;
  
    try {
      const result = await pool.query('SELECT password FROM users WHERE email = $1', [email]);
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ password: result.rows[0].password });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });


// // update a todo

// app.put("/todos/:id",async(req,res) => {
//     try {
//         const {id} = req.params;
//         const {description} = req.body;
//         const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id]);
        
//         res.json("Todo was updated!");
//     } catch (error) {
//         console.error(err.message);
//     }
// });

// // delete a todo

// app.delete("/todos/:id",async(req,res) => {
//     try {
//         const {id} = req.params;
//         const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
//         res.json("Todo was deleted!");
//     } catch (error) {
//         console.error(err.message);
//     }
// });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});