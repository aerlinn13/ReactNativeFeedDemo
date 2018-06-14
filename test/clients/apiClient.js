export const GetListings = async () => {
    try{
        let response = await fetch('https://mvtest.getsandbox.com/getlistings', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        return await response.json();
    }
    catch(error){
        console.log(error.message);
        return {status:"failed", message:error.message}
    } 
}

export const GetListing = async () => {
    try{
        let response = await fetch('https://mvtest.getsandbox.com/getlisting', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        return await response.json();
    }
    catch(error){
        console.log(error.message);
        return {status:"failed", message:error.message}
    } 
}