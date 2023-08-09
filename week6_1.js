const envVariables = process.env;

for(const k in envVariables){
    console.log(`${k}: ${envVariables[k]}`);
}
