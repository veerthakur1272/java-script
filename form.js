let sub =()=>{

    let name = document.querySelector("#name").value;
    let num = document.querySelector("#email").value;
    let mno = document.querySelector("#mobile").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#password").value;




    let  errname= document.querySelector("#errname");
    let errmail= document.querySelector("#errmail");
    let errno= document.querySelector("#errno");
    let errpass = document.querySelector("#errpass");
    let errconfirm = document.querySelector("#errconfirm");


    if(name===""){
        errname.innerHTML="enter your name ";
        errname.style.color="red";
        return false;
    }
    if(mno===""){
        errno.innerHTML="enter your no ";
        errno.style.color="red";
        return false;
    }
    if(num===""){
        errmail.innerHTML="enter your email";
        errmail.style.color="red";
        return false;
    }
    if(pass===""){
        errpass.innerHTML="enter your pass";
        errpass.style.color="red";
        return false;
    }
    if(cpass===""){
        errconfirm.innerHTML="confirm your pass";
        errconfirm.style.color="red";
        return false;
    }

    else if (isNaN(num)){
        errno.innerHTML="please enter a valid number"
        errno.style.color="red";
        return false;
    }

    else if(errno.length!=10){
        errno.innerHTML="plese enter a 10 digit number";
        return false;
    }

    else if(email.includes("@")&& email.includes(('.com'))){
        errmail.innerHTML="please enter a valid email";
        return false;
    }

    else if (pass!=confirm){
        errconfirm.innerHTML="password and confirm password should same";
        return false;
    }

    else if (!(
        pass.match(/[1234567890]/) && 
        pass.match(/[!@#$%^&*()]/) &&
        pass.match(/[a-z]/) &&
        pass.match(/[A-Z]/)
    ))
    {
        errpass.innerHTML="enter a strong paswsword";
        errpass.style.color="red";
        return false;
    }
}

//focus()
// error should be in placholder
// if pass should not match the password should get removed automatically and focus should 

