import jobModel from "./job.model.js";


export default class ApplicantsModel{
    constructor(id , name , email , contact , resume ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
    }

    static addApplicant( id , name , email , contact , resume){
        const job = jobModel.detail(id);
        const jobApplicant = job.applicants
        let applicant = new ApplicantsModel(
            jobApplicant.length + 1,
            name ,
            email,
            contact,
            resume,
        )
        jobApplicant.push(applicant);

    }

    // static getAllApplicant(){
    //     return applicants;
    // }
        

}

export var applicants1 = [
    new ApplicantsModel(1 , "Palak" , "palaks08@gmail.com" , 7987684225 , "resume.pdf"),
    new ApplicantsModel(2 , "Anul" , "Analmishra@234gmail.com" , 8269913260 , "resumeAnal.pdf")
]
export var applicants2 = [
    new ApplicantsModel(1 , "rakesh" , "rakesh08@gmail.com" , 7987684225 , "resume.pdf"),
    new ApplicantsModel(2 , "sakarmak" , "anulmishra@234gmail.com" , 8269913260 , "resumeAnal.pdf")
]
export var applicants3 = [
    new ApplicantsModel(1 , "Param" , "params08@gmail.com" , 7987684225 , "resume.pdf"),
    new ApplicantsModel(2 , "Anul" , "Analmishra@234gmail.com" , 8269913260 , "resumeAnal.pdf")
]
