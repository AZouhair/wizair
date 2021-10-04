import { Router } from "express";
import pkg_bcryptjs from 'bcryptjs';
import pkg_jwt from 'jsonwebtoken';
import { secretOrKey } from "../../config/keys.js";

// Load input validation
import validateRegisterInput from "../../validation/register.js";
import validateLoginInput from "../../validation/login.js";

// Load User model
import User from "../../models/User.js";

const { genSalt, hash: _hash, compare } = pkg_bcryptjs;
const { sign } = pkg_jwt;

const router = Router();

router.post("/register", (req, res) => {

  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        deviceId: req.body.deviceId || null
      });

      // Hash password before saving in database
      genSalt(10, (err, salt) => {
        _hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });

  console.log("end of the register query")
});

router.post("/login", (req, res) => {
  // Form validation
  console.log("The login endpoint has been queried");

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        sign(
          payload,
          secretOrKey,
          {
            expiresIn: 9999999  //arbitrary long time span
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

export default router;
