import jobModel from "../model/job.model.js";
import { skills_available } from "../model/job.model.js";

export default class JobController{

    landingPage(req , res){
        res.render("home" , {email:req.session.userEmail})
    }


    Jobs(req , res){
        const jobs = jobModel.getAllJobs();
        // console.log(jobs)
        
        res.render("jobs" , {
            jobs : jobs ,
            email : req.session.userEmail
        } );
    }

    postNewJob(req , res){
        res.render("createjob" , {errorMessage : null ,email: req.session.userEmail})
    }

    createJob(req , res){
        // console.log(req.boy)
        const {job_category , job_designation , job_location , job_company , job_salary , job_skills , job_time , job_positions  } = req.body;
        const jobPosted = new Date().toLocaleDateString() +", " + new Date().toLocaleTimeString();
        // console.log(jobPosted)
        jobModel.addJob(job_category , job_designation , job_location , job_company , job_salary , job_skills ,job_positions , job_time  , jobPosted)
        const jobs = jobModel.getAllJobs();
        
        res.status(200).render("jobs" , {jobs:jobs , email:req.session.userEmail});
    }

    viewDetail(req , res){
        const id = req.params.id;
        const job = jobModel.detail(id);
        if(job){
            res.render("details" , {job : job ,
                errorMessage:null,
                email:req.session.userEmail})
        }
        else{
            res.status(401).send("job not found")
        }
        

    }

    deleteJob(req , res){
        const id = req.params.id;
        jobModel.delete(id);
        const jobs = jobModel.getAllJobs();
        res.status(200).render("jobs" , {
            jobs:jobs ,
             email : req.session.userEmail 
            })
    }

    getUpdateJob(req , res){
        const id = req.params.id;
        // console.log("here is your id" , id)
        const job = jobModel.detail(id);
        // console.log("here is your job" , job)
        res.status(200).render("update" , {
            job : job ,
            email: req.session.userEmail,
            skills_available : skills_available})
    }

    postUpdateJob(req , res){
        jobModel.updateJob(req.body);
        console.log("hereis request body" , req.body)
        const jobs = jobModel.getAllJobs();
        res.render("jobs" ,{
            jobs: jobs,
            email: req.session.userEmail,
        })


    }

    
}