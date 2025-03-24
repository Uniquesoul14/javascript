const get_color = ()=>{
    const random_num = Math.floor(Math.random() * 16777215);

    const randome_code = "#" + random_num.toString(16)

     document.body.style.backgroundColor = randome_code ;

     document.getElementById("code").innerText = randome_code ;

     navigator.clipboard.writeText(randome_code)

}

document.getElementById("btn").addEventListener(
    'click' , get_color
)


get_color();

