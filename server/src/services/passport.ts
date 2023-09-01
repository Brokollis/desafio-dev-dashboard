// import passport from 'passport'
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: '914220170936-irhelmt57818qqp18krps2o7ca8smqsq.apps.googleusercontent.com',
//             clientSecret:"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",
//             callbackURL: "/auth/google/callback",
//             scope:["profile", "email"],
//         },
//         async function (accessToken: undefined , refreshToken: undefined, profile, callback) {
//             callback(null, profile)
//         }
//     )
// )

// passport.serializeUser((user, done) => {
//     done(null, user)
// })
// passport.deserializeUser((user, done) => {
//     done(null, user)
// })













// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import cookieSession from 'cookie-session'
// import passport from 'passport'
// import './services/passport'
// // import authRouter from './routes/auth';
// import session from 'express-session'
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import { Router } from "express";

// const app = express()

// app.use(express.json())
// app.use(cors());
// app.use(bodyParser.json())
// app.use(
//   cookieSession({
//     name: "session",
//     keys:["wipmrr"],
//     maxAge:24*60*60*100,
//   })
// )
// app.use(
//   session({
//     secret: "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",
//     resave: false,
//     saveUninitialized: true
//   })
// );
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(
//   cors({
//     origin:"http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true
//   })
// )
// // app.use("/auth", authRouter)



// passport.use(
//   new GoogleStrategy(
//       {
//           clientID: '914220170936-irhelmt57818qqp18krps2o7ca8smqsq.apps.googleusercontent.com',
//           clientSecret:"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",
//           callbackURL: "http://localhost:3000/auth/google/callback",
//           scope:["profile", "email"],
//       },
//       function (accessToken: undefined , refreshToken: undefined, profile, done) {
//         console.log(profile)
//         done(null, profile)
//       }
//   )
// )

// passport.serializeUser((user, done) => {
//   done(null, user)
// })
// passport.deserializeUser((user, done) => {
//   done(null, user)
// })


// const authRouter = Router();

// authRouter.get(
//     "/google/callback",
//     passport.authenticate("google", {
//       successRedirect: "http://localhost:5173",
//       failureRedirect: "/login/failed",
//     })
//   );
  
//   authRouter.get(
//     "/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );
//   app.get('/auth/google/callback', passport.authenticate('google', {
//     successRedirect: 'http://localhost:5173', // Redirecionar em caso de sucesso
//     failureRedirect: '/login/failed', // Redirecionar em caso de falha
//   }));
//   app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  
//   authRouter.get("/logout", (req, res) => {
//     req.logout((err) => {
//         if (err) {
//             console.error(err);
//         }
//         res.redirect("http://localhost:5173");

//     })
//   });
  

// authRouter.get("/login/success", (req, res) => {
//     if(req.user){
//         res.status(200).json({
//             error: false,
//             message: "Successfylly loged in",
//             user: req.user,
//         });
//         console.log("Successfylly loged in")
//     }else{
//         res.status(403).json({
//             error: true,
//             message : 'Not authorized'
//         })
//         console.log("Not authorized")
//     }
// });

// authRouter.get("/login/failed", (req, res) => {
//     res.status(401).json({
//         error: true,
//         message : 'Login failed'
//     })
// });


// export { app }