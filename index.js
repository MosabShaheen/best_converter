import inquirer from "inquirer";
let fuser;
async function name() {
    console.clear();
    let userName = await inquirer.prompt([
        {
            name: "user_name",
            type: "input",
            message: "Please Enter your Name: "
        }
    ]);
    fuser = userName.user_name;
}
await name();
function welcome() {
    console.clear();
    console.log("***********************************\n");
    console.log(`Welcome ${fuser}!`);
    console.log("Here you can convert \"Currencies\"\n");
    console.log("***********************************\n");
}
async function converter() {
    await welcome();
    console.log("*** Currency That You Want To Convert ***\n");
    let curre = ["$ Dollar", "Rs Pakistani Rupees", "Euro", "Indian Rupee", "Saudi Riyal", "Turkish lira", "Indonesian Rupiah", "United Arab Emirates Dirham", "Chinese Yuan", "Japanese Yen"];
    let initialCurrency = await inquirer.prompt([
        {
            name: "initial_currency",
            type: "list",
            choices: [...curre],
            message: "Currency you have: "
        },
        {
            name: "initial_amount",
            type: "number",
            message: "Amount: "
        }
    ]);
    await welcome();
    console.log("*** Currency In Which You Want To Convert ***\n");
    let st1 = initialCurrency.initial_currency;
    const index = curre.indexOf(st1);
    if (index > -1) {
        curre.splice(index, 1);
    }
    let secondCurrency = await inquirer.prompt([
        {
            name: "second_currency",
            type: "list",
            choices: [...curre],
            message: "Convert To: "
        }
    ]);
    if (initialCurrency.initial_currency == "$ Dollar") {
        if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drPkr = initialCurrency.initial_amount * 224.48;
            console.log(`Converted: ${drPkr}rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drEu = initialCurrency.initial_amount * 0.94;
            console.log(`Converted: ${drEu} Euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIn = initialCurrency.initial_amount * 82.79;
            console.log(`Converted: ${drIn} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 3.76;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 18.64;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 15607.75;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 3.67;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 6.97;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 137.14;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Rs Pakistani Rupees") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount / 224.48;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drEu = initialCurrency.initial_amount * 0.0042;
            console.log(`Converted: ${drEu} Euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIn = initialCurrency.initial_amount * 0.37;
            console.log(`Converted: ${drIn} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 0.017;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 0.083;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 69.51;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 0.016;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 0.031;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 0.61;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Euro") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 1.07;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 239.24;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIn = initialCurrency.initial_amount * 88.19;
            console.log(`Converted: ${drIn} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 4.01;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 19.87;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 16636.07;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 3.92;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 7.43;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 146.25;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Indian Rupee") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.012;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 2.71;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.011;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 0.045;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 0.23;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 188.49;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 0.044;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 0.084;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 1.63;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Saudi Riyal") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.27;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 59.68;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.25;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drRi = initialCurrency.initial_amount * 22.00;
            console.log(`Converted: ${drRi} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 4.96;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 4146.03;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 0.98;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 1.85;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 36.51;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Turkish lira") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 1.07;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 239.24;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIn = initialCurrency.initial_amount * 88.19;
            console.log(`Converted: ${drIn} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 4.01;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drLi = initialCurrency.initial_amount * 19.87;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 16636.07;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 3.92;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 7.43;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 146.25;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Indonesian Rupiah") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.012;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 2.71;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.011;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 0.045;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 0.23;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIr = initialCurrency.initial_amount * 188.49;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 0.044;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 0.084;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 1.63;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "United Arab Emirates Dirham") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.27;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 59.68;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.25;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drRi = initialCurrency.initial_amount * 22.00;
            console.log(`Converted: ${drRi} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 4.96;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 4146.03;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drDi = initialCurrency.initial_amount * 0.98;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 1.85;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 36.51;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Chinese Yuan") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.012;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 2.71;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.011;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drRi = initialCurrency.initial_amount * 0.045;
            console.log(`Converted: ${drRi} Riyal`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 0.23;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drIr = initialCurrency.initial_amount * 188.49;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drDi = initialCurrency.initial_amount * 0.044;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drYn = initialCurrency.initial_amount * 0.084;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Japanese Yen") {
            let drYe = initialCurrency.initial_amount * 1.63;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
    else if (initialCurrency.initial_currency == "Japanese Yen") {
        if (secondCurrency.second_currency == "$ Dollar") {
            let drPkr = initialCurrency.initial_amount * 0.27;
            console.log(`Converted: $${drPkr}`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Rs Pakistani Rupees") {
            let drEu = initialCurrency.initial_amount * 59.68;
            console.log(`Converted: ${drEu} rs`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Euro") {
            let drIn = initialCurrency.initial_amount * 0.25;
            console.log(`Converted: ${drIn} euro`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indian Rupee") {
            let drRi = initialCurrency.initial_amount * 22.00;
            console.log(`Converted: ${drRi} Indr`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Turkish lira") {
            let drLi = initialCurrency.initial_amount * 4.96;
            console.log(`Converted: ${drLi} Lira`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Indonesian Rupiah") {
            let drIr = initialCurrency.initial_amount * 4146.03;
            console.log(`Converted: ${drIr} Rupiah`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Saudi Riyal") {
            let drDi = initialCurrency.initial_amount * 0.98;
            console.log(`Converted: ${drDi} Dirham`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "Chinese Yuan") {
            let drYn = initialCurrency.initial_amount * 1.85;
            console.log(`Converted: ${drYn} Yuan`);
            await playAgain();
        }
        else if (secondCurrency.second_currency == "United Arab Emirates Dirham") {
            let drYe = initialCurrency.initial_amount * 36.51;
            console.log(`Converted: ${drYe} Yen`);
            await playAgain();
        }
    }
}
let play_againUser = false;
async function playAgain() {
    console.log("\n");
    let askUser = await inquirer.prompt([
        {
            name: "playUser",
            type: "confirm",
            message: "Do you want to continue: "
        }
    ]);
    if (askUser.playUser == true) {
        play_againUser = true;
    }
    else if (askUser.playUser == false) {
        play_againUser = false;
    }
}
do {
    await converter();
} while (play_againUser);
