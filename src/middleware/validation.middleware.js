import { body , validationResult } from "express-validator";
import jobModel from "../model/job.model.js";

export const validateResult_1 = async(req , res , next)=>{

    const rules = [
        body('job_category').custom((value) => {
            if (!value || value.length === 0) {
              throw new Error('Select Category Please');
            }
            return true;
          }),
        body('job_designation').custom((value) => {
            if (!value || value.length === 0) {
              throw new Error('Select Deignation Please');
            }
            return true;
          }),
        body('job_skills').custom((value) => {
            if (!value || value.length === 0) {
              throw new Error('At least one skill must be selected');
            }
            return true;
          }),
        body("job_location")
        .notEmpty()
        .withMessage("location should not be empty"),
        body("job_company").notEmpty()
        .withMessage("company name should be filled"),
        body("job_salary")
        .isFloat({gt : 0})
        .withMessage("salary can't be 0")
    ]

    await Promise.all(
        rules.map((rule)=> rule.run(req))
    )

    // 3. check if there any erro after running the code
    const result = validationResult(req);

    // 4. if errors , then return the error msg
    if(!result.isEmpty()){
        return res.render('createjob' , {errorMessage : result.array()[0].msg})
    }
    // console.log(result)
    next();
}


export const validateResult_2 = async(req , res , next)=>{
    // 1. Set up the Rules
    // console.log(typeof(req.body.price))
    // console.log(req.body)
    const rules = [
        body('applicant_name')
        .notEmpty()
        .withMessage("Name is Empty"),
        body("applicant_email")
        .isEmail()
        .withMessage("Price should be a positive value"),
        body("applicant_contact")
        .isLength({min:10})
        .withMessage("Enter Valid Phone Number"),
        body("applicant_resume").custom((value , {req})=>{
            if(!req.file){
                throw new Error("resume pdf is required")
            }
            return true
        })  
    ]

    // 2. run the Rules
    await Promise.all(
        rules.map((rule)=> rule.run(req))
    )

    // 3. check if there any erro after running the code
    const result = validationResult(req);

    // 4. if errors , then return the error msg
    if(!result.isEmpty()){
        const id = req.params.id;
        const job = jobModel.detail(id)
        return res.render('details' , {errorMessage : result.array()[0].msg , job:job})
    }
    // console.log(result)
    next();
}

