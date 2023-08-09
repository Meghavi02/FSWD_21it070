function displayEnvVar(envVariable){
    const value = process.env[envVariable];
    if(value != undefined){
        console.log(`${envVariable}: ${value}`);
    }else{
        console.log(`${envVariable} not found`);
    }
}
const envVariable = 'PATH';
displayEnvVar(envVariable);