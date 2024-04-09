import ApplicantsModel from "./applicants.model.js";
import { applicants }  from "./applicants.model.js";

export default class jobModel{
    constructor(id ,category , designation , location , company , salary , skills , positions , time , jobPosted , applicants ){
        this.id = id;
        this.category = category;
        this.designation = designation;
        this.location = location;
        this.company = company;
        this.salary = salary;
        this.skills = skills;
        this.positions = positions;
        this.time = time;
        this.jobPosted = jobPosted;
        this.applicants = applicants;
    }

    static getAllJobs(){
        return jobs;
    }

    static addJob(category , designation , location , company , salary , skills , position , time , jobPosted ){
        const id = jobs.length + 1;
        // const position = this.addJob.positions - 1
        const newjob = new jobModel(id , 
                category ,
                designation ,
                location ,
                company ,
                salary ,
                skills ,
                position,
                time,
                jobPosted,
                applicants);

        jobs.push(newjob)

    }

    static detail(id){
        const job = jobs.find((u)=> u.id == id);
        // console.log(job);
        return job
    }

    static applicantNo(id){
        const job = jobs.find((job)=> job.id == id);
        job.positions -= 1
        return job.positions
    }

    static updateJob(updated_job){
        const index = jobs.findIndex(job => job.id == updated_job.id);
        
        jobs[index] = updated_job;
        console.log(index)
        // console.log(jobs)
    }

    static delete(id){
        const jobIndex = jobs.findIndex(job=> job.id == id);

        jobs.splice(jobIndex , 1);
    }

}

var jobs = [
    new jobModel(1 ,"tech" , "developer" , "banglore" , "Google" , "20-30" ,
          ["react" , "node" , "Mongo DB" , "express"] ,6 ,'03-03-2024' , "29-02-2024, 11:10:32 PM" , applicants ),
    new jobModel(2 , "non tech" , "BDA" , "Indore" , "Hirect" , "8-10" ,
         ["MBA" , "econonmics" , "financial Management" , "C   ++" , "python" , "SAP"] ,  4 , '03-04-2024' , "01-04-2024, 11:10:32 PM" , applicants),
    new jobModel(3 ,"tech" , "Devops" , "Indore" , "Hirect" , "12-18" ,
         ["react" , "node" , "Mongo DB" , "express" , "C++" , "Javascript"], 4 , '13-04-2024' , "10-04-2024, 11:10:32 PM" , applicants )
]

// console.log(jobs[0].applicants)
// console.log(applicants)

// export var category = ['tech' , "nontech"]

export var skills_available = ["React" , "Node" , "MongoDb" , "Express" , "C++" , "Python" , "SAP" , "Angular" , "SpringBoot" , "Java" , "Javascript" , "WebDevelopment" , "mba", "economics" , "financial management" , "sap" ]