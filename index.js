// importing exteranl module.
import express from "express";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import path from "path"
import cookieParser from "cookie-parser";

// importing custom modules
import JobController from "./src/controller/job.controller.js";
import UserController from "./src/controller/user.controller.js";
import ApplicantController from "./src/controller/applicants.controller.js";
import { uploadFile } from "./src/middleware/file-upload.middleware.js";
import { validateResult_1, validateResult_2 } from "./src/middleware/validation.middleware.js";
import { setlastVisit } from "./src/middleware/lastvisit.middleware.js";


// creating express server.
const app = express();

// using middlewares.
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// settting up view engine.
app.set("view engine" , "ejs");
app.set("views" , path.join(path.resolve() , "src" , "view"));
app.use(ejsLayouts);

// setting up session.
app.use(session({
    secret : "password",
    resave : false,
    saveUninitialized : true,
    cookie : { secure : false }
}))

// creating instance of jobController
const jobController = new JobController();

// creating instance of a userController
const userController = new UserController();

// creating instance for applicant controller
const applicantController = new ApplicantController();


// Routes
app.get("/jobs" ,  jobController.Jobs )
app.get("/" , setlastVisit ,  jobController.landingPage)
app.post("/jobs" ,validateResult_1 , jobController.createJob);
app.get("/postnewjob" , jobController.postNewJob)
app.get("/jobs/update/:id" , jobController.getUpdateJob)
app.post("/jobs/update/" , jobController.postUpdateJob);
app.get("/jobs/:id" , jobController.viewDetail );
// app.get("/apply" , jobController.applyJob)
app.post("/jobs/apply/:id" ,uploadFile.single("applicant_resume") , applicantController.applyJob );
app.delete("/delete-job/:id" , jobController.deleteJob)



// user's routes
app.post("/" , userController.addNewUser , userController.sendEmail);
app.get("/login" , userController.login);
app.post("/login" , userController.postLogin );
app.get("/logout" , userController.logout )

// applicants routes
app.get("/applicants/:id" , applicantController.getApplicants)



// uploading static files.
app.use(express.static("public"));

// configure port number.
app.listen(3500 , ()=>{
    console.log("server is listening to port 3500");
});