"use strict";

function tellfortune( job_title , geographic_location , partners_name , number_of_children ) 
{

    console.log (`You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} children`);

    let ruba=' YOU will be a ' +job_title+' in '+ geographic_location+ ', and married to '+ partners_name+ ' with '+ number_of_children+' children';
    console.log(ruba);
}

tellfortune(`tourism management`, `Amman`, `Ayman` , `2`)