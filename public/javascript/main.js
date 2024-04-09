// import jobModel from "../../src/model/job.model.js";
// import { applicants } from "../../src/model/applicants.model.js";

function deleteProduct(id){
    const userResponse = confirm("Are you sure you want to delete the Job" , id);
    if(userResponse){
        fetch("/delete-job/" + id , {
            method:"DELETE"
        }).then((res)=>{
            if(res.ok){
                location.reload();
            }
        }).catch((err)=>{
            if(err){
                Notification("can not delete the job")
            }
            
        })
        
    }

}

// var e = " pink"
// console.log(e.toUpperCase())
var jobs = [
    new jobModel(1 ,"tech" , "developer" , "banglore" , "Google" , "20-30" ,
          ["react" , "node" , "Mongo DB" , "express"] ,6 ,'03-03-2024' , "29-02-2024, 11:10:32 PM" , applicants ),
    new jobModel(2 , "non tech" , "BDA" , "Indore" , "Hirect" , "8-10" ,
         ["MBA" , "econonmics" , "financial Management" , "C   ++" , "python" , "SAP"] ,  4 , '03-04-2024' , "01-04-2024, 11:10:32 PM" , applicants),
    new jobModel(3 ,"tech" , "Devops" , "Indore" , "Hirect" , "12-18" ,
         ["react" , "node" , "Mongo DB" , "express" , "C++" , "Javascript"], 4 , '13-04-2024' , "10-04-2024, 11:10:32 PM" , applicants )
]


var a =  {
    job_id: '1',
    job_category : 'non_tech',
    job_designation : 'HR',
    job_location: 'banglore',
    job_company: 'Google',
    job_salary: '20-30',
    job_positions: '6',
    job_skills: [ 'React', 'Node', 'Express' ],
    job_time: '03-03-2024'
  }

jobs[1] = {
    job_id: '1',
    job_category : 'non_tech',
    job_designation : 'HR',
    job_location: 'banglore',
    job_company: 'Google',
    job_salary: '20-30',
    job_positions: '6',
    job_skills: [ 'React', 'Node', 'Express' ],
    job_time: '03-03-2024'
  };

// console.log(jobs)