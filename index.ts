import inquirer from "inquirer";

async function welcome() {
    console.clear()
    let userName = await inquirer.prompt([
        {
            name: "user_name",
            type: "input",
            message: "Please Enter your Name: "
        }
    ])
    console.clear()
    console.log("***********************************\n")
    console.log(    `Welcome ${userName.user_name}!`)
    console.log("Here you can convert \"Currencies\"\n")
    console.log("***********************************\n")
}



async function converter() {
    await welcome()
    console.log("*** Currency That You Want To Convert ***")
    let curre: string[] = ["$ Dollar", "Rs Pakistani Rupees"]
    let initialCurrency = await inquirer.prompt([
        {
            name: "initial_currency",
            type: "list",
            choices: [...curre],
            message: "Please select: "
        },
    ])
    await welcome()
    console.log("*** Currency In Which You Want To Convert ***")
    let st1:string = initialCurrency.initial_currency
    const index = curre.indexOf(st1)
    if (index > -1){
        curre.splice(index, 1)
    }
    let secondCurrency = await inquirer.prompt([
        {
            name: "second_currency",
            type: "list",
            choices: [...curre],
            message: "Please select: "
        }
    ])
    console.log(secondCurrency.second_currency)
}
converter()