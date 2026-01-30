
//1. Function defination

import { prisma } from "@/app/lib/prisma";

// We can also export it
// I can export anything in JS/TS
export async function POST(request: Request) {
    const payload = await request.json();
    console.log(payload);
            //object.property
    console.log(payload.pass);
    console.log(payload.cpass);


    console.log(typeof payload.pass);
    console.log(typeof payload.cpass);

    let p = payload.pass;
    let cp = payload.cpass;

    //THis is example ServerSide Validation
    if(p==cp){
        console.log("Password and Confirm Pasword is Same ");
        
        if(payload.email.includes("@") && payload.email.includes(".")){

            if(payload.role_type=='importer' || payload.role_type=='exporter' || payload.role_type=='importer_exporter'){
                //All data is validated
                //Lets store into the database
                //prisma.model.create();
                const user = await prisma.user.create({
                        data: {
                            fname:payload.fname,
                            lname:payload.lname,
                            username:payload.email,
                            password: p,
                            roleId: 1
                        }
                    });
                return Response.json(
                                        { msg: "User registered successfully", user },
                                        { status: 201 }
                                    );    
                //return Response.json({payload})
            }else{
                return Response.json({"msg":"Invalid roleType"})
            }
            
        }else{
            return Response.json({"msg":"Invalid Email Address"})
        }
        

    }else{
        return Response.json({"msg":"Password and Confirm Pasword doest mapth"})
    }


    //check the datatype
    // How to check the datatype of a variable ?

   

    // Data Validation 

    //Function Body
    //Every function may return something
         //    ceo1.method(aa)
    
}


