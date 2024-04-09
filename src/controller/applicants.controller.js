import ApplicantsModel from "../model/applicants.model.js";
import jobModel from "../model/job.model.js";

export default class ApplicantController{

    applyJob(req , res){
        const id = req.params.id;
        // console.log("here is req.body-", req.body)
        const {applicant_name , applicant_email , applicant_contact} = req.body;
        const uploadFile = req.file;
        ApplicantsModel.addApplicant(id , applicant_name , applicant_email , applicant_contact , uploadFile);
        const jobs = jobModel.getAllJobs();
        res.render('jobs' ,{jobs ,email : req.session.user_email})
    }

    getApplicants(req , res){
        const jobId = req.params.id;
        const job = jobModel.detail(jobId);
        
        const jobApplicants = job.applicants;
        // console.log(jobApplicants)
        // const applicants = ApplicantsModel.getAllApplicant();
        res.render("applicants" , { applicants : jobApplicants , email : req.session.user_email})
    }
 }