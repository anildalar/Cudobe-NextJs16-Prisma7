
//1. Function defination

import { prisma } from "@/app/lib/prisma";

import bcrypt from "bcrypt";

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

    let p: any = payload.pass;
    let cp: any = payload.cpass;

    //THis is example ServerSide Validation
    if(p==cp){
        console.log("Password and Confirm Pasword is Same ");
        
        if(payload.email.includes("@") && payload.email.includes(".")){

            if(payload.role_type=='importer' || payload.role_type=='exporter' || payload.role_type=='importer_exporter'){
                //All data is validated
                //Lets store into the database
                //prisma.model.create();

                //Psudo Code
                //First we will check if the email address is already in the db user tbl

                const existingUser = await prisma.user.findUnique({
                    where: {
                        username: payload.email
                    }
                });
                //object.method(aa1[,aa2])
                console.log(' existingUser >>>>>',existingUser);
                if(existingUser){
                    return Response.json(
                                            {"msg":"User Already Exist"},
                                            { status: 409 }
                                        )
                }
                const saltRounds = 10;
                const hash = bcrypt.hashSync(p, saltRounds);
                const role = await prisma.role.findUnique({
                    where: {
                        roleCode: payload.role_type,
                    },
                });

                const user = await prisma.user.create({
                    data: {
                        fname:payload.fname,
                        lname:payload.lname,
                        username:payload.email,
                        password: hash,
                        roleId: role.id
                    }
                });
                delete user.password;
                return Response.json(
                                        { msg: "User registered successfully", user },
                                        { status: 201 }
                                    );    
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


