import { body } from "express-validator";
import UserModel from "../model/user.model.js";
import jobModel from "../model/job.model.js";
import nodemailer from "nodemailer";


export default class UserController{

    login(req , res){
        res.render("login" ,{email : req.session.user_email})
    }

    addNewUser(req , res , next){
        // console.log("here is " , req.body)
        const {user_name, user_email , user_password} = req.body;
        // console.log(user_name, user_email , user_password , "here");
        UserModel.addUser(user_name , user_email , user_password);
        req.session.userName = user_name;
        res.render("login" , { userName: user_name});
        next();
        
    }

    sendEmail(req , res){
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "rdrishi96@gmail.com",
              pass: "tidogfllucnbuxol",
            },
          });

          let mailOptions = {
            from: "rdrishi96@gmail.com",
            to: req.body.user_email,
            text: "Welcome to the job portal " + req.body.user_name,
            subject: "job Portal",
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log(`Success: Email sent to ${req.body.user_email}`);
            }
          });

    }


    postLogin(req , res){
        const {user_email , user_password} = req.body;
        // console.log(req.body)
        const user = UserModel.isValidUser(user_email , user_password);
        if(!user){
            return res.send("no credential found")
        }
        req.session.userEmail = user_email;
        // req.session.username = user_name;
        // console.log(req.session.userEmail )
        // let products = ProductModel.get();
        res.render('home' , { email : user_email})
    }

    logout(req , res){
        // res.clearCookie('lastVisit');
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }else{
                res.redirect("/")
            }
        });
        res.clearCookie('lastVisit');
    }

    

}

